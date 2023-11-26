import thankYouIcon from '../assets/illustration-thank-you.svg';
import React, {useState} from 'react'
import Card from './Card'
import './ThankYouCard.css'


const ThankYouCard = ({ selectedRating }) => {

 

    return (
        <Card>
    <div className='thankYouIcon-container'>
        <img src={thankYouIcon}></img>
    </div>
    <div className='you-selected'>
        <p>You selected {selectedRating} out of 5</p>
    </div>

    <h1 className='title2'>Thank you!</h1>
    <p className='paragraph'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </Card>
       
    )
}

export default ThankYouCard;