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
        <Modal.Header>
            {beer.name}
        </Modal.Header>
        <Modal.Body>
            {beer.description}
        </Modal.Body>
    </Modal>
  )
}

export default BeerModal;