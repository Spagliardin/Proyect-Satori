const Hamburguer = () => {
    return(
  <div
    class="hamburguer"
    onClick={() => {
      document.querySelector(".full-menu").classList.toggle("active");
      document
        .querySelector(".hamburguer")
        .classList.toggle("close-hamburguer");
    }}
  >
    <div className="lines line-top"></div>
    <div className="lines line-mid"></div>
    <div className="lines line-bottom"></div>
  </div>
  )
};

export default Hamburguer
