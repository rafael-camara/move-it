import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";

export function useCountDown() {
  const context = useContext(CountdownContext);

  return context;
}
