import React from 'react'

const Footer = () => {
    const date = new Date().getDate();
  return (
    <React.Fragment>
        <p>Copyrights Reserved {date}</p>
    </React.Fragment>
  )
}

export default Footer