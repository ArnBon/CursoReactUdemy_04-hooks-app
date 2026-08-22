import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = () => {
  const {countdown, percentage, redLight, greenLight, yellowLight, isOn, toggle } = useTrafficLight();



  return (
    <div className = "min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className = "flex flex-col items-center space-y-8">

        <h1 className = 'text-white text-3xl font-thin'>Semáforo con UseEffect</h1>
        <h2 className = 'text-white text-xl'>Countdown: { isOn ? countdown: "Apagado" }</h2>
        <h3 className = 'text-white text-xl'>Hook Personalizado</h3>

        <div className = "w-64 bg-gray-700 rounded-full h-2">
          <div
            className = "bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* BOTÓN ON/OFF */}
        <button onClick = { toggle } className={`px-6 py-2 rounded-full font-bold text-white transition-colors duration-300 ${
            isOn 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-green-600 hover:bg-green-700'
          }`}>
            {isOn ? 'Apagar (OFF)' : 'Encender (ON)'}
        </button>

        <div className = {`w-32 h-32 ${ redLight } rounded-full`}></div>
        <div className = {`w-32 h-32 ${ greenLight } rounded-full`}></div>
        <div className = {`w-32 h-32 ${ yellowLight } rounded-full`}></div>
      </div>
    </div>
  )
}
