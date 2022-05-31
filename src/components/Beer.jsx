import { Col, Card, Button } from "react-bootstrap";
import { useBeer } from "../hooks/useBeer";

const Beer = ({ beer }) => {
  const { handleModalClick, handleBebidaId } = useBeer();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={beer.image_url}
          alt={`Imagen de ${beer.image_url}`}
        />
      </Card>
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Button
          className="w-100 text-uppercase mt-2 bold"
          variant="warning"
          onClick={() => {
            handleModalClick();
            handleBebidaId(beer.id);

          }}
        >
          {" "}
          Descripción
        </Button>
      </Card.Body>
    </Col>
  );
};

export default Beer;
