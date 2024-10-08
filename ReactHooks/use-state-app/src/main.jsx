import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CounterHook from './counterHook.jsx'
import ObjectHook from "./ObjectHook.jsx";
import {ArrayHooking} from "./ArrayHooking.jsx";
import {ColourChangeWithHooks} from "./ColourChangeWithHooks.jsx";
import {Counter} from "./problems/Counter.jsx";
import {DynamicFields} from "./problems/DynamicFields.jsx";
import {DynamicShopListings} from "./problems/DynamicShopListings.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App/>*/}
      {/*<CounterHook/>*/}
    {/*<ObjectHook/>*/}
   {/* <ArrayHooking/>*/}
      {/*<ColourChangeWithHooks/>*/}
     {/* <Counter/>*/}
     {/* <DynamicFields/>*/}
      <DynamicShopListings/>
  </StrictMode>,
)
