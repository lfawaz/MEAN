import React from 'react'
import './box.css'
import PropTypes from 'prop-types'


const Box = props => {
  return(
    <div className="theBox" style={{backgroundColor: props.backgroundcolor}}></div>
  );
}

Box.propTypes = {
  backgroundcolor: PropTypes.string
}


export default Box
