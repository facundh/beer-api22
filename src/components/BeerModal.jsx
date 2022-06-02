import {Modal, Image} from 'react-bootstrap';
import { useBeer } from '../hooks/useBeer';

const BeerModal = () => {
    const {  handleModalClick, beer, modal, cargando} = useBeer();

 

  return !cargando && (
    <Modal show={modal} onHide={handleModalClick}>
        <Image 
            src={beer.image_url}
            alt={`Imagen de ${beer.name}`}
        />
        <Modal.Header className='text-danger text-opacity-50'>
            {beer.name}
        </Modal.Header>
        <Modal.Body>
            {beer.description}
            <h2 className='mt-2 text-primary text-opacity-25'> Brewers Tips </h2>
            {beer.brewers_tips}
        </Modal.Body>
    </Modal>
  )
}

export default BeerModal;