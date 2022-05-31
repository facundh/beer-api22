import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BeerConsumer = createContext();

const BeerProvider = ({ children }) => {

  const [beers, setBeers] = useState([]);
  const [modal, setModal] = useState(false);
  const [beerId, setBeerId] = useState(null);
  const [beer, setBeer] = useState({});
  const [cargando, setCargando] = useState(false);

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleBebidaId = (id) => {
    setBeerId(id);
  };

  useEffect(() => {
    setCargando(true);

    const getBeer = async () => {
      if (!beerId) return;
      try {
        const url = `https://api.punkapi.com/v2/beers/${beerId}`;
        const { data } = await axios(url);
        console.log(data[0])
        setBeer(data[0])
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    };
    getBeer();
  }, [beerId]);

  const getBeers = async () => {
    try {
      const url = `https://api.punkapi.com/v2/beers`;

      const { data } = await axios(url);
      
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

 


  return (
    <BeerConsumer.Provider value={{ beers, handleModalClick, handleBebidaId, beer, setBeer, modal, cargando }}>
      {children}
    </BeerConsumer.Provider>
  );
};

export default BeerProvider;
