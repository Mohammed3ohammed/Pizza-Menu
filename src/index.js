 import React from 'react';
import ReactDom from"react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];


function App() {
    return (
        <div className="container header">
            <Header />
            <Menu />
            <Footer />
        </div>

    )
}

function Header(){
    return(
        <header className='header footer'>
        <h1>Fast React Pizza</h1>
        </header>
    )
}
function Menu(){
    return(
        <main className='menu'>
            <h1 >Our Menu</h1>
            <Pizza />
        </main>
    )
}


function Pizza() {
    return(
        <div>
            <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
            <h1>Pizza Spinaci</h1>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
            
        </div>
    )
}


function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)

    return (
        <footer className='footer'>
        {new Date.toLocaleTimeString()}. We're currently open!
    </footer>
    )

}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);