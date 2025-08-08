import React from 'react'
import Header from './Header'
import Form from './Form'
import Card from './Card'

const MainContent = () => {
  return (
    
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 offset-md-2">
            <Header />
            <Form />
            <Card />
          </main>

  )
}

export default MainContent