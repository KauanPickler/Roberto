import { useState } from "react";
import img_logo from "../assets/logoNova.png"
function footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="Container-Footer fade-in-section Div-Info">
            <div className="Div-Footer">
                <img src={img_logo} alt="" className="Img-Logo"/>
            <div className="Div-icones">
                <i class="fab fa-instagram social-icon"></i>
                <i class="fab fa-whatsapp social-icon"></i>
                <i class="fab fa-facebook social-icon"></i>
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