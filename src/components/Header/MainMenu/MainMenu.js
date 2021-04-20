import image from './shopping-bag.png'
import logo from './logoSatori1.png'

const MainMenu = () => {
    return(
  <main className="content">
    <div></div>
    <img src={logo} alt="Logo" />
    <div className="shopping-bag">
      <img src={image} alt="bag" height="46px" />
      <span className="count">0</span>
    </div>
  </main>
  )
};

export default MainMenu;