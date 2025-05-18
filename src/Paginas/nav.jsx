import img_logo from "../assets/logoNova.png"
function Nav(){
    return(
        <nav className="Nav-Container">
            <img src={img_logo} className="Img-Logo-nav" alt="" />
            <div className="Div-Nav_Container">
                <label className="Nav-Text">Home</label>
                <label className="Nav-Text">Serviços</label>
                <label className="Nav-Text">Whattsapp</label>
                <label className="Nav-Text">Sobre nós</label>
                <label className="Nav-Text">Orçamento</label>
            </div>
            <div className="Client-Container">
            <i class="fas fa-user social-icon"></i>
                <label className="Nav-Text">Cliente</label>
            </div>
        </nav>
    )
}

export default Nav;
