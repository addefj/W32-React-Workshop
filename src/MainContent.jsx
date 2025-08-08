import React from 'react'
import Header from './Header'
import Form from './Form'
import Card from './Card'
import SidebarHorizontal from './SidebarHorizontal';


const MainContent = () => {
  return (
    
          <main className="col px-md-4 offset-lg-2">
            <Header />
               <SidebarHorizontal /> {/* 👈 Place horizontal icon bar here for md and below */}
            <Form />
            <Card />
          </main>

  )
}

export default MainContent