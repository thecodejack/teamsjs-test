import "./styles.css";
import { notifySuccess } from "./teamsjs";
import {useState, useEffect} from 'react';

export default function App() {
  const [green, setGreen] = useState(false);
  useEffect(()=> {
    setTimeout(()=>{
      setGreen(true);
      notifySuccess();
    }, 10000);
  }, []);
  if (green) {
      return (<div className="Green">
        <h1>NotifySuccess</h1>
      </div>)
  } else {
    return (
      <div className="App">
        <h1>Loading..</h1>
      </div>
    );
  }
  
}
