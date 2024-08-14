import { createContext } from "react";
import "./App.css";
import ComponentC from "./hooks/useContext/ComponentC";
import CounterOne from "./hooks/useReducer/CounterOne";


export const ThemeContext = createContext(null);

//install axios
function App() {
  return (
    <div>
      <CounterOne/>
    </div>
  );
}

export default App;