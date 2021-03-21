import React from 'react';

import { Container ,Label} from './styles';
import euImg from '../../assets/eu.jpg'
function Card() {
  return (
  <Container>
  <header>
    <Label color="#7159c1"></Label>
    </header>  
    <p>Fazer a migração completa de servidor</p>
    <img src={euImg}/>
  </Container>);
}

export default Card;