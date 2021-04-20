import { Link } from 'react-router-dom';



const FullMenu = () => {
    return (
        <div className="full-menu">
            <nav className="menu">
                <ul>
                    <Link exact to='/'>
                    <li className="home">Home</li>
                    </Link>
                    <Link exact to='/shirts'>
                    <li className="shirts">Camisas</li>
                    </Link>
                    <Link exact to='/tshirts'>
                    <li className="t-shirts">Remeras</li>
                    </Link>
                    <Link exact to='/pants'>
                    <li className="pants">Pantalones</li>
                    </Link>
                    <Link exact to='contact'>
                    <li className="contact">Contacto</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default FullMenu