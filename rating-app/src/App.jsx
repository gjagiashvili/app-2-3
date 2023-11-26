import React, {useState} from 'react';
import Rating from './components/Rating'
import ThankYou from './components/ThankYouCard'
import './App.css'

function App() {
  const [activeState, setActiveState] = useState(1)
  const [selectedRating, setSelectedRating] = useState(0);

  const nextPageHandler = (rating) => {
    setSelectedRating(rating); 
    setActiveState(activeState + 1); 
};
  return (
    <>
    {activeState === 1 && <Rating onNext={nextPageHandler}/>}
    {activeState === 2 && <ThankYou selectedRating={selectedRating}/>}
    </>
  )
}

export default App
