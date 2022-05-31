import { useContext } from "react";
import { BeerConsumer } from "../context/BeerProvider";

export const useBeer = () => {
    return useContext(BeerConsumer);
}
