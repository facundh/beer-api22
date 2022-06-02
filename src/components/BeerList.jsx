import { useBeer } from '../hooks/useBeer';
import Beer from './Beer';
import { Row } from 'react-bootstrap';


const BeerList = () => {
    const {beers} = useBeer();
    
    
    
  return (
 
    
    <Row className='mt-4'>
        {
            beers.map(beer => (
                <Beer key={beer.id} beer={beer}/>
            ))
        }
    </Row>

     


  )
}

export default BeerList