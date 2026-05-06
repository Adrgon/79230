import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

export function useContador() {
  const contador = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return {
    contador,
    incrementar: () => dispatch(increment()),
    decrementar: () => dispatch(decrement()),
    reiniciar: () => dispatch(reset()),
  };
}
