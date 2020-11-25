import React from 'react';
import './card.styles.css';


export const Card = props => (
    <div className='card-container'>
        <h1 > {props.monster.name}</h1>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
    </div>
)