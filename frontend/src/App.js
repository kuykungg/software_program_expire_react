import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/hello")
        .than(res => res.json())
        .than(data => console.log(data));
  },[]);
  return <h1>hR</h1>
}

export default App;
