import './FullMenu.css'

const FullMenu = () => {
    return (
        <div className="full-menu">
            <nav id="menu" className="menu">
                <ul>
                    <li className="Home">Home</li>
                    <li className="ropa">Ropa</li>
                    <li className="contact">Contacto</li>
                </ul>
            </nav>
            {/* <div class="hamburguer" onClick={() => {
                document.querySelector('.full-menu').classList.toggle('active');
                document.querySelector(".hamburguer").classList.toggle("close-hamburguer");
            }}>
                <div className="lines line-top"></div>
                <div className="lines line-mid"></div>
                <div className="lines line-bottom"></div>
            </div> */}
        </div>
    )
}

export default FullMenu