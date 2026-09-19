import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster, toast } from 'sonner';
import { ClientInformation } from './08-use-suspense/ClientInformation';
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// import { MemoHook } from './06-memos/MemoHook'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TaskApp } from './05-useReducer/TaskApp'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'
// import App from './App.tsx'
// import { HooksApp } from './HooksApp.tsx'
// import { TrafficLight } from './01-useState/TrafficLight.tsx'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect.tsx'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook.tsx'
// import { PokemonPage } from './03-examples/PokemonPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster></Toaster>
    {/* <HooksApp></HooksApp> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWithEffect></TrafficLightWithEffect> */}
    {/* <TrafficLightWithHook></TrafficLightWithHook> */}
    {/* <PokemonPage></PokemonPage> */}
    {/* <FocusScreen></FocusScreen> */}
    {/* <TaskApp></TaskApp> */}
    {/* <ScrambleWords></ScrambleWords> */}
    {/* <MemoHook></MemoHook> */}
    {/* <MemoCounter></MemoCounter> */}
    {/* <InstagromApp></InstagromApp> */}
    <ClientInformation></ClientInformation>
  </StrictMode>,
)
