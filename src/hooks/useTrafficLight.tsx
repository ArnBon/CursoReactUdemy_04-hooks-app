import React, { useEffect, useState } from 'react'
import { useOnOff } from './useOnOff';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow:'bg-yellow-500 animate-pulse',
  green:'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
     const [light, setLight] = useState<TrafficLightColor>('red');
     const [countdown, setCountdown] = useState(5);
     const { isOn, toggle } = useOnOff(true); //inicialmente encendido

    // Efecto para el temporizador
      useEffect( () => {
             if(countdown === 0) return;       
             console.log({countdown});
     
             
             const intervalId = setInterval(() => {
                 console.log('setInterval llamado');
                 setCountdown((prev) => prev -1);
             }, 1000);
     
             return () => {
                 console.log('Cleanup effect');
                 clearInterval(intervalId);
             }
                 
          }, [countdown, isOn]);
     
    // Efecto para cambio de color de luces se agrega el on-off
               useEffect( () => {
     
                  if(!isOn || countdown > 0) return;
     
                 setCountdown(5);
     
                 if (light === 'red') {
                     setLight('green');
                     return;                
                 }
                 if (light === 'yellow') {
                   setLight('red');
                   return;  
                 }
                 if (light === 'green') {
                    setLight('yellow');
                    return;//con esto se detiene el contador o sea intervalId
                 }        
          }, [countdown, light, isOn]);

  return {
    //Props
    countdown,
    light,
    colors,
    isOn,

    //Methods
    toggle,

    //Calculos o Computed (Si está apagado, muestra todas las luces en gris)
    percentage:  isOn ? (countdown/5) * 100 : 0,
    redLight:    isOn && light === 'red'   ? colors.red    : 'bg-gray-500',
    greenLight:  isOn && light === 'green' ? colors.green  : 'bg-gray-500',
    yellowLight: isOn && light === 'yellow'? colors.yellow : 'bg-gray-500',
  }
}