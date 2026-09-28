import {Routes , Route} from "react-router-dom";
import { Header } from "./Components/Header/Header"; 
import './App.css';
import { Footer } from "./Components/Footer/Footer";
import { ItemListConteiner} from "./Components/ItemListConteiner/ItemListConteiner"
import { ItemDetailConteiner } from "./Components/ItemDetailConteiner/ItemDetailConteiner";

function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element= {<ItemListConteiner/>} />
        <Route path="/cart" element= {<h1>Carrito</h1>} />
        <Route path="/product/:id" element= {<ItemDetailConteiner/>} />
      </Routes>
    </main>
    <Footer/>
    </>
  );
}


export default App
