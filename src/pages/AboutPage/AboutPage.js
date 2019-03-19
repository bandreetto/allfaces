import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Quem somos?</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Somos uma banda multi-estilos, tocamos em eventos como churrascos, festas e afins.
            </p>
            <h4>Integrantes:</h4>
            <ul>
              <li>Voz <span role='img' aria-label='microfone'>🎤</span> Lorena</li>
              <li>Guitarra <span role='img' aria-label='guitarra'>🎸</span> Padu</li>
              <li>Baixo <span role='img' aria-label='baixo'>🎸</span> Bruno</li>
              <li>Bateria <span role='img' aria-label='bateria'>🥁</span> Levi</li>
            </ul>
            <p>
              Nosso canal no <span className="highlight">Youtube</span>: {'<link-pro-canal>'}
            </p>
            <p>
              Nossa página no <span className="highlight">Facebook</span>: {'<link-pro-face>'}
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
