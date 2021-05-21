import React from "react";
import logo from "./satori-Logo.png";

export const Footer = () => {
  return (
    <footer>
      <aside>
        <ul>
          <li><strong>Nosotros</strong></li>
          <hr />
          <li><a href="#">Sobre Satori</a></li>
          <li><a href="#">Terminos y condiciones</a></li>
          <li><a href="#">Locales</a></li>
        </ul>
      </aside>
      <aside>
      <ul>
          <li><strong>Ayuda</strong></li>
          <hr />
          <li><a href="#">Preguntas Frecuentes</a></li>
          <li><a href="#">Envíos y Retiros</a></li>
          <li><a href="#">Cambios y devoluciones</a></li>
        </ul>
      </aside>
      <aside>
      <ul>
          <li><strong>Destacados</strong></li>
          <hr />
          <li><a href="#">New In</a></li>
          <li><a href="#">Pantalones</a></li>
          <li><a href="#">Otras Temporadas</a></li>
        </ul>
      </aside>
      <aside>
      <ul>
          <li><img src={logo} alt="Aca va el Logo" /></li>
        </ul>
      </aside>
    </footer>
  );
};
