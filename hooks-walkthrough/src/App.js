import { createContext } from "react";
import "./App.css";
import ComponentC from "./hooks/useContext/ComponentC";
import CounterOne from "./hooks/useReducer/CounterOne";
import CounterTwo from "./hooks/useReducer/CounterTwo";
import CounterThree from "./hooks/useReducer/CounterThree";


export const ThemeContext = createContext(null);

//install axios
function App() {
  return (
    <div>
      <CounterThree/>
    </div>
  );
}

export default App;