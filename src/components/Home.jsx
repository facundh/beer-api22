import React from 'react'
import { Container } from 'react-bootstrap';
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
      </Container>
    </>
   
    
  )
}

export default Home