import React from 'react';
import { Icon } from 'semantic-ui-react';
import './styles.sass';

const Footer = () => (
  <footer className="footer">
    <a href="mailto:dmitry@dergunov.net">
      <Icon name="mail" />
      Связаться с нами
    </a>
  </footer>
);

export default Footer;
