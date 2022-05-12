import React from 'react'

import logo from '../assets/images/logo.png'

const HeaderComponent = () => {
  return (
    <div>
        <div class="header-content">
            <img src={logo} alt="" />
            <div>
                <span class="address-text">ADDRESS</span><br />
                <span class="address-text address-book">BOOK</span>
            </div>
        </div>
    </div>
  )
}

export default HeaderComponent