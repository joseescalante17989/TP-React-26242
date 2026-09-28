import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

export const ItemDetailConteiner = () => {
    const {id} = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setItemDetail(null);
        setError(null);
        setLoading(true);

        fetch("/data/product.json")
            .then((res) => res.json())
            .then((data) => {
                const item = data.find ((product) => String(product.id) === id);
                if (item) {
                    setItemDetail(item);
                    return;
                }
                throw new Error ("No se encuentra el elemento");
            })
            .catch ((error) => setError(error.message))
            .finally (() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p> {error} </p>;
    if (!itemDetail) return <p>Producto inexistente</p>;

    return (
        <section>
            <div className="product-container">
                <ItemDetail item= {itemDetail}/>
            </div>
        </section>
    );
};