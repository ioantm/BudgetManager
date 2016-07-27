import React, { Component } from 'react';
import BoardElement from './BoardElement'

const Source = ({source, ...rest}) => {

  return (
    <BoardElement
      value={source.get('value')}
      viewPosition={source.get('viewPosition')}
      {...rest}/>
  )
}

export default Source;
