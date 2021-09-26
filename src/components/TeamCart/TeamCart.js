import React from 'react';
import './TeamCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faCodeBranch, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const TeamCart = (props) => {
    const { devCart } = props;
    let total = 0;

    for (const developer of devCart) {
        total = total + developer.salary;
    }
    const element = <FontAwesomeIcon className="element" icon={faPlusCircle} />
    const programmerIcon = <FontAwesomeIcon className="programmer-icon" icon={faCodeBranch} />
    const costIcon = <FontAwesomeIcon className="programmer-icon" icon={faDollarSign} />
    return (
        <div className="cart-container">
            <h3>{programmerIcon} Added Programer: {props.devCart.length}</h3>
            <h4>{costIcon} Total cost: ${total.toFixed(2)}</h4>
            {
                devCart.map(cart => <div className="cart-info">
                    <div className="cart-dev">
                        <h4>{element} {cart.name}</h4>
                        <img src={cart.picture} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default TeamCart;