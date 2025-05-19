import { useState } from "react";
import img_logo from "../assets/logo.jpg"
function footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="Container-Footer fade-in-section Div-Info">
            <div className="Div-Footer">
                <img src={img_logo} alt="" className="Img-Logo"/>
            <div className="Div-icones">
                <a href="https://www.instagram.com/mustache_troop?igsh=MWM5Zmw2cWJ2bHQ5eQ==cff" className="social-icon" target="_blank" rel="noopener noreferrer"> 
                <i className="fab fa-instagram social-icon" ></i>
                </a>
                <a href="https://wa.me/5547999194341?text=Olá%2C%20eu%20gostaria%20de%20comprar%20um%20roberto!" className="social-icon" target="_blank" rel="noopener noreferrer"> 
                <i className="fab fa-whatsapp social-icon"></i>
                </a>
                <a href="https://wa.me/5547999194341?text=Olá%2C%20eu%20gostaria%20de%20comprar%20um%20roberto!" className="social-icon" target="_blank" rel="noopener noreferrer"> 
                <i className="fab fa-facebook social-icon-ult"></i>
                </a>
                </div>
                <div className="Div-Footer-sub">
                    <hr />
                    <div className="Div-Footer-sub-sub">
                        <label className="Text-Footer">©{anoAtual} A3P PROG</label>
                        <label className="Text-Footer">{anoAtual}</label>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default footer;