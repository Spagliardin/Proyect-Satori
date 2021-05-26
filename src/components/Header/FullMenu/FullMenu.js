import { Link } from "react-router-dom";

export const FullMenu = () => {

  const style = {
    textDecoration: 'none',
    color: 'white'
  }
  
  return (
      <div className="full-menu">
        <nav className="menu">
          <ul>
            <li className="home">
              <Link to={`/`} style={style}>
                Home
              </Link>
            </li>
            <li className="shirts">
              <Link to={`/shirts`} style={style}>Camisas</Link>
            </li>
            <li className="t-shirts">
              <Link to={`/t-shirts`} style={style}>Remeras</Link>
            </li>
            <li className="pants">
              <Link to={`/pants`} style={style}>Pantalones</Link>
            </li>
            <li className="contact">
              <Link to={`/contact`} style={style}>Contacto</Link>
            </li>
          </ul>
        </nav>
        </div>
  );
};
