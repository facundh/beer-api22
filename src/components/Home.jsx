import React from 'react'
import { Button, Container } from 'react-bootstrap';
import BeerList from './BeerList';
import BeerModal from './BeerModal';


import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <Container className='mt-5' >
          <BeerList />
        <BeerModal />
        <Button 
        variant='success'
        value='Siguiente'
        onClick={}
        
        />
      </Container>
    </>
   
    
  )
}

export default Home