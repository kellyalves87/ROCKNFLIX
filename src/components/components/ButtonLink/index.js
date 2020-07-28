import React from 'react'

const ButtonLink = (props) => {
    return (
      <a href={props.href} className={props.className}>
        Novo vídeo
      </a>
    );
  };
  
  export default ButtonLink;
