import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import TeamCart from '../TeamCart/TeamCart';
import './Selection.css';

const Selection = () => {
    const [developers, setDevelopers] = useState([]);
    const [devCart, setDevCart] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, [])

    const handleAddToCart = developer => {
        const newCart = [...devCart, developer];
        setDevCart(newCart);
    }

    return (
        <div className="selection-container">
            <div className="developer-container">
                {
                    developers.map(developer => <Developer
                        key={developer.id}
                        developer={developer}
                        handleAddToCart={handleAddToCart}
                    >
                    </Developer>)
                }
            </div>
            <div className="team-cart-container">
                <TeamCart devCart={devCart}></TeamCart>
            </div>
        </div>
    );
};

export default Selection;