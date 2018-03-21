import React from 'react';

const Button = props => {

    const classType = (value) => {
        if (value === 'CLEAR') {
            return 'btn btn-danger'

        }

        if (value === 'EQUALS') {
            return 'btn btn-success'
        } else {
            return 'btn btn-primary'
        }
    }

    return (
        <button onClick={()=>props.calculate(props.value)} class={classType(props.value)} value={props.value}>{props.value}</button>
    )

}

export default Button;