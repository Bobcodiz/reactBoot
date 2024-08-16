import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CounterHook from './counterHook.jsx'
import ObjectHook from "./ObjectHook.jsx";
import {ArrayHooking} from "./ArrayHooking.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App/>*/}
      {/*<CounterHook/>*/}
    {/*<ObjectHook/>*/}
    <ArrayHooking/>
  </StrictMode>,
)
