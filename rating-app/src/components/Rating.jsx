import React, {useState} from 'react';
import starIcon from '../assets/icon-star.svg'
import './Rating.css'

import Card from './Card'

const Rating = (props) => {

    const [rating, setRating] = useState(0)
    const [clickedId, setClickedId] = useState(0)

    const [selectedRating, setSelectedRating] = useState(0)

    const handleRatingClick = (number) => {
        setSelectedRating(number);
    };


    const handleSubmit = () => {
        if (selectedRating === 0) {
            alert('Please select a rating!');
        } else {
            props.onNext(selectedRating); // Pass the selected rating to the parent component when submit is clicked
        }
    };

   
     
    return (
        <Card>
            <div className='starIcon-container'>
                <img src={starIcon}></img>
            </div>
            <h1 className='title1'>How did we do?</h1>
            <p classname='paragraph'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='rating'>
                <div className={clickedId >= 1 ? "active" : "rating-container"} onClick={() => handleRatingClick(1)}>1</div>
                <div className={clickedId >= 2 ? "active" : "rating-container"} onClick={() => handleRatingClick(2)}>2</div>
                <div className={clickedId >= 3 ? "active" : "rating-container"} onClick={() => handleRatingClick(3)}>3</div>
                <div className={clickedId >= 4 ? "active" : "rating-container"} onClick={() => handleRatingClick(4)}>4</div>
                <div className={clickedId >= 5 ? "active" : "rating-container"} onClick={() => handleRatingClick(5)}>5</div>
            </div>
            <div onClick={handleSubmit} className='submit-button'>SUBMIT</div>
        </Card>
    )
}

export default Rating

