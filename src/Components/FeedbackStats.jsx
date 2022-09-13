import React from 'react'
//import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  )
    // let average = feedback.reduce((acc, cur)=> {
    //     return acc + cur.rating
    // }, 0) / feedback.length

    // average.toFixed(1).replace(/[.,]0$/, '')
    // Math.round(average)

  return (
    <div className='feedback-stats'>
      <h4> {feedback.length} Reviews</h4>
      <h4> Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
//using feedback context now
// FeedbackStats.propTypes ={
//     feedback : PropTypes.array.isRequired
// }

export default FeedbackStats
