import React from 'react';
import './TeamCart.css';

const TeamCart = (props) => {
    const { devCart } = props;
    let total = 0;
    for (const developer of devCart) {
        total = total + developer.salary;
    }
    return (
        <div>
            <h3>Added Programer: {props.devCart.length}</h3>
            <h4>Total cost: ${total.toFixed(2)}</h4>
        </div>
    );
};

export default TeamCart;