import FullMenu from "./FullMenu";

const Header = () => {
    document.querySelector('.hamburguer').addEventListener('click', () => {
        document.querySelector('.full-menu').classList.toggle('active');
    })
    return (
        <div className="contianerHeader">
            <FullMenu></FullMenu>
        </div>
    )
}

export default Header; 