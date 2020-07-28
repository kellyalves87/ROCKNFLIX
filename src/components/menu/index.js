import React from "react";
import Logo from "../../assets/img/rocknflix.png";
import "./Menu.css";
import Button from '../../components/Button/index'

const Menu = () => {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='Divafilix logo' />
      </a>
      <Button as='a' className='ButtonLink' href='/'>
        Novo vídeo
      </Button>
    </nav>
  );
};

export default Menu;
