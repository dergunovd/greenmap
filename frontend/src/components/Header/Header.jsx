import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';
import './styles.sass';

const Header = () => (
  <header>
    <Menu>
      <Link to="/" className="logo">НашГород</Link>
      <Menu.Menu position="right">
        <Dropdown item icon="bars">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/login">Войти</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/registration">Регистрация</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  </header>
);

export default Header;
