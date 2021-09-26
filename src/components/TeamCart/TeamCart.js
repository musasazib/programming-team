import React from 'react';
import './TeamCart.css';

const TeamCart = (props) => {
    const { devCart } = props;
    let total = 0;

    for (const developer of devCart) {
        total = total + developer.salary;
    }
    return (
        <div className="cart-container">
            <h3>Added Programer: {props.devCart.length}</h3>
            <h4>Total cost: ${total.toFixed(2)}</h4>
            {
                devCart.map(cart => <div className="cart-info">
                    <div className="cart-dev">
                        <h4>{cart.name}</h4>
                        <img src={cart.picture} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default TeamCart;