import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { TaskApp } from './05-useReducer/TaskApp'
// import App from './App.tsx'
// import { HooksApp } from './HooksApp.tsx'
// import { TrafficLight } from './01-useState/TrafficLight.tsx'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect.tsx'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook.tsx'
// import { PokemonPage } from './03-examples/PokemonPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp></HooksApp> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWithEffect></TrafficLightWithEffect> */}
    {/* <TrafficLightWithHook></TrafficLightWithHook> */}
    {/* <PokemonPage></PokemonPage> */}
    {/* <FocusScreen></FocusScreen> */}
    <TaskApp></TaskApp>
  </StrictMode>,
)
