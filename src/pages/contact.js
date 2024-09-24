import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/card';
import './index.css';

const ContactPage = ({ data }) => {
  const cards = [
    {
      id: 1,
      title: 'Aprende React',
      description: 'React es una biblioteca de JavaScript para construir interfaces de usuario.',
      image: data.reactImage.childImageSharp.gatsbyImageData, // Usa los datos de la consulta
      link: 'https://es.react.dev/',
    },
    {
      id: 2,
      title: 'Explora Gatsby',
      description: 'Gatsby es un framework basado en React que permite crear sitios web rápidos y modernos.',
      image: data.gatsbyImage.childImageSharp.gatsbyImageData, // Usa los datos de la consulta
      link: 'https://www.gatsbyjs.com/',
    },
    {
      id: 3,
      title: 'Diseña con Figma',
      description: 'Figma es una herramienta de diseño colaborativo utilizada por diseñadores y desarrolladores.',
      image: data.figmaImage.childImageSharp.gatsbyImageData, // Usa los datos de la consulta
      link: 'https://www.figma.com/',
    },
    {
      id: 4,
      title: 'Consulta a tus datos con GraphQL',
      description: 'GraphQL es un lenguaje de consulta y manipulación de datos para APIs.',
      image: data.graphqlImage.childImageSharp.gatsbyImageData, // Usa los datos de la consulta
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
              image={card.image} // Pasa la imagen procesada
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
    reactImage: file(relativePath: { eq: "react.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    gatsbyImage: file(relativePath: { eq: "gatsby.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    figmaImage: file(relativePath: { eq: "figma.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    graphqlImage: file(relativePath: { eq: "graphql.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
  }
`;


export default ContactPage;
