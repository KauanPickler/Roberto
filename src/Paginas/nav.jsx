import img_logo from "../assets/logo.jpg";
import SobreNos from "./SobreNos";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [mostrarSobreNos, setMostrarSobreNos] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="Nav-Container">
            <img src={img_logo} className="Img-Logo-nav" alt="Logo" />
            <div className="Div-Nav_Container">
            <label className="Nav-Text" onClick={() => window.location.href = '/Roberto/'}>Home</label>

                <label className="Nav-Text">Serviços</label>
                <label className="Nav-Text">WhatsApp</label>
                <label className="Nav-Text" onClick={() => window.location.href = '/Roberto/sobre'}>Sobre nós</label>
                <label className="Nav-Text">Orçamento</label>
            </div>
            <div className="Client-Container">
                <i className="fas fa-user social-icon"></i>
                <label className="Nav-Text">Cliente</label>
                {mostrarSobreNos && <SobreNos />}
            </div>
        </nav>
    )
}

export default Nav;
