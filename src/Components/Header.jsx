import React from "react";
import PropTypes from 'prop-types'



function Header({text, textColor}) {

    const headerStyles= {
        color: textColor,
    }

  return (
    <header style={headerStyles} >
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps= {
    text: 'Review UI',
    textColor: '#ff6a95',
}
Header.propTypes={
    text : PropTypes.string, 
   
    textColor: PropTypes.string
}

export default Header
