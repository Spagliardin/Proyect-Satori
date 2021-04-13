import image from './shopping-bag.png'

const MainMenu = ({img}) => {
    return(
  <main className="content">
    <img src={img} alt="Logo" />
    <div className="shopping-bag">
      <img src={image} alt="bag" height="46px" />
      <span className="count">0</span>
    </div>
  </main>
  )
};

export default MainMenu;