import React from 'react'
import Header from './Header'
import Form from './Form'
import Card from './Card'
import SidebarHorizontal from './SidebarHorizontal';


const MainContent = () => {
  return (
    
          <main className="col px-md-4 offset-lg-3">
            <Header />
               <SidebarHorizontal /> 
            <Form />
            <Card />
          </main>

  )
}

export default MainContent