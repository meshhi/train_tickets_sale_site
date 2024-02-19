import React from 'react'
import Direction from '../Directions/Direction/Direction';
import { useSelector } from 'react-redux';

const Check = () => {

  const { direction } = useSelector(state => state.currentOrder);

  return (
    <>
      WE ARE CHECKING
      {
        direction
        ? <Direction direction={direction}></Direction>
        : false
      }
      
    </>
  )
}

export default Check