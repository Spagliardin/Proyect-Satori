import './css/style-Header.css'

const FullMenu = () => {
    document.querySelector('.hamburguer').addEventListener('click', () => {
        document.querySelector('.full-menu').classList.toggle('active');
    })
    return (
        <div className="full-menu">
            <nav id="menu" className="menu">
                <ul>
                    <li className="Home">Home</li>
                    <li className="ropa">Ropa</li>
                    <li className="contact">Contacto</li>
                </ul>
            </nav>
            <div class="hamburguer">
                <div class="lines line-top"></div>
                <div class="lines line-mid"></div>
                <div class="lines line-bottom"></div>
            </div>
        </div>
    )
}

export default FullMenu