import { createContext } from "react";
import "./App.css";
import ComponentC from "./hooks/useContext/ComponentC";
import CounterOne from "./hooks/useReducer/CounterOne";
import CounterTwo from "./hooks/useReducer/CounterTwo";


export const ThemeContext = createContext(null);

//install axios
function App() {
  return (
    <div>
      <CounterTwo/>
    </div>
  );
}

export default App;