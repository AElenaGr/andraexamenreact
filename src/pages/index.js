import React from 'react';
import { Link } from 'gatsby';
import './index.css';
import { GatsbyImage } from "gatsby-plugin-image"; //importar gatsby images para ver foto en json

const Index = () => {
  return (
    <div>
      <header>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Bienvenido a la web de Andra E. G. </h1>
        <p>Este es un sitio  hecho con Gatsby y React haciendo uso de GraphQl.</p>
      </main>
    </div>
  );
};

export default Index;
