import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListConteiner = () => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);
    const [errors, setErrors] = useState (null);

    useEffect(() => {
        fetch("/data/product.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error ("Error al cargar los productos");
                }
                return res.json();
            })
            .then((data) => {setProducts(data);})
            .catch((error) => {setErrors(error.mensage);})
            .finally(() => {setLoading(false);})
        },[]);

    if (loading) return <p>Cargando...</p>;
    if (errors) return <p>{errors}</p>;

    return (
        <section>
            <h1>Productos</h1>
            <ItemList products={products}/>
        </section>
    );
};