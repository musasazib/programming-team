import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Developer = (props) => {
    const { picture, name, position, salary, email, address } = props.developer;
    const devIcon = <FontAwesomeIcon className="dev-icon" icon={faUserPlus} />
//<i class="fas fa-user-plus"></i>
    return (
        <div className="developer">
            <div className="developer-img">
                <img src={picture} alt="" />
            </div>
            <div>
                <h3 className="developer-name">{name} </h3>
                <p>Position : {position}</p>
                <p>Salary : {salary}</p>
                <p>Email : {email}</p>
                <p>Address : {address}</p>
                <button
                    onClick={() => props.handleAddToCart(props.developer)}
                    className="btn-regular"
                >{devIcon}  Select Programmer</button>
            </div>
        </div>
    );
};

export default Developer;