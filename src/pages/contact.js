import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/card';
import './index.css'; 

import { GatsbyImage } from "gatsby-plugin-image"; 

const ContactPage = ({ data }) => {
  const cards = [
    {
      id: 1,
      title: 'Aprende React',
      description: 'React es una biblioteca de JavaScript para construir interfaces de usuario.',
      image: '../images/react.jpg',
      link: 'https://es.react.dev/',
    },
    {
      id: 2,
      title: 'Explora Gatsby',
      description: 'Gatsby es un framework basado en React que permite crear sitios web rápidos y modernos.',
      image: '../images/gatsby.jpg',
      link: 'https://www.gatsbyjs.com/',
    },
    {
      id: 3,
      title: 'Diseña con Figma',
      description: 'Figma es una herramienta de diseño colaborativo utilizada por diseñadores y desarrolladores.',
      image: '../images/figma.jpg',
      link: 'https://www.figma.com/',
    },
    {
      id: 4,
      title: 'Consulta a tus datos con GraphQL',
      description: 'GraphQL es un lenguaje de consulta y manipulación de datos para APIs.',
      image: '../images/react.jpg',
      link: 'https://graphql.org/',
    },
  ];

  return (
    <div>
      <header>
        <nav className="menu">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Página de contacto</h1>
        <div className="cards-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};


export const query = graphql`
  query {
    reactImage: file(relativePath: { eq: "images/react.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    gatsbyImage: file(relativePath: { eq: "images/gatsby.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    figmaImage: file(relativePath: { eq: "images/figma.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    graphqlImage: file(relativePath: { eq: "images/graphql.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
  }
`;

export default ContactPage;
