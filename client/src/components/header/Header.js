import React from 'react'
import "./Header.css"

export const Header = (props) => {
  return (
    <div className="header-container">
        { props.header }
    </div>
  )
}
