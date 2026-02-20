import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/hello")
        .then(res => res.json())
        .then(data => console.log(data));
  },[]);
  return 0 (data);
}

export default App;
