import React from 'react'
import Header from '../Header/Header'


const Layout = ({childlen}) => {
    return (
        <div>
          <Header/>
          {childlen}
        </div>
    )
}

export default Layout
