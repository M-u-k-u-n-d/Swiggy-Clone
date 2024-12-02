import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header.js";
import Body from "./src/components/Body/Body.js";
import Extras from "./src/components/Extras/Extras.js";
import Footer from "./src/components/Footer/Footer.js";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Body/>
            <Extras/>
            <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);