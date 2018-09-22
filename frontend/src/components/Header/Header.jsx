import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import './styles.sass';

const menuItems = [
  [
    {
      title: 'Вход',
      url: '/login'
    },
    {
      title: 'Регистрация',
      url: '/registration'
    }
  ],
  [
    {
      title: 'Профиль',
      url: '/profile'
    },
    {
      click: () => {
        window.localStorage.removeItem('token');
        window.location.reload();
      },
      title: 'Выход',
      url: ''
    }
  ]
];

const Header = () => (
  <header>
    <Menu>
      <Link to="/" className="logo">
        GreenMap
      </Link>
      <Menu.Menu position="right">
        <Dropdown item icon="bars">
          <Dropdown.Menu>
            {menuItems[+!!window.localStorage.getItem('token')].map(item => (
              <Dropdown.Item key={item.title}>
                <Link to={item.url} onClick={item.click}>{item.title}</Link>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  </header>
);

export default Header;
