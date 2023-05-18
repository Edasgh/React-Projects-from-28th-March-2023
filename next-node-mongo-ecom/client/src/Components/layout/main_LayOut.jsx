import React from 'react'
import HeaderComponent from '../Header/Header'
import FooterComponent from '../Footer/Footer'
const mainLayOut = ({children}) => {
  return (
    <>
      <HeaderComponent/>
        {children}
      <FooterComponent/>
    </>
  )
}

export default mainLayOut
