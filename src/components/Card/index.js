import React,{useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import { Container ,Label} from './styles';


function Card({data}) {

  const ref = useRef();

 const [{isDragging}, dragRef] = useDrag({
   type:"CARD",
   collect:monitor => ({
     isDragging:monitor.isDragging(),
   }),
 })
 const [, dropRef] = useDrop({
  accept:"CARD",
  hover(){
    console.log(data.id);
  }
 })

 dragRef(dropRef(ref));

  return (
  <Container ref={ref} isDragging={isDragging}>
  <header>
    {data.labels.map(label=> <Label key={label} color={label}/>)}
   
    </header>  
    <p>{data.content}</p>
    {data.user  && <img src={data.user} alt=""/>}
  </Container>);
}

export default Card;