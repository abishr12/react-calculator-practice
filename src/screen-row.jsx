import React from 'react';

const ScreenRow = props => {

  return (
    <div>
      <input readOnly value={props.formula}/>
      <br />
      <input readOnly value={props.answer}/>
    </div>
  )
}

export default ScreenRow;