import "./styles.css";
import { notifySuccess } from "./teamsjs";
import {useState, useEffect} from 'react';

export default function App() {
  const [green, setGreen] = useState(false);
  useEffect(()=> {
    setTimeout(()=>{
      setGreen(true);
      notifySuccess();
    }, 20000);
  }, []);
  if (green) {
      return (<div className="App Green">
        <h1>Hello TeamsJS</h1>
      </div>)
  } else {
    return (
      <div className="App">
        <h1>Hello TeamsJS</h1>
      </div>
    );
  }
  
}
