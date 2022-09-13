import React from 'react'
import PropTypes from 'prop-types'

function Card( {children, reverse}) {
  return (
    <div className={`card ${reverse && `reverse`}` }>
      {children}
    </div>

  )
}
Card.defaultProps={
    reverse: false
}
Card.propTypes ={
    children: PropTypes.node.isRequired,
    reverse : PropTypes.bool
}

// could also have( inside return )
// <div className="card"
// style={{  //if reverse then background color dark, else white 
//backgroundColor: reverse ? 'rgba(0,0,0,0.4)': '#fff', 
// if reverse then white, else black
// color: reverse ? '#fff' : '#000'
//}}

export default Card
