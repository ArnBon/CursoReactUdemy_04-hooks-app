import { useState } from 'react'

export const useOnOff = (initialState: boolean = true) => {

    const [ isOn, setIsOn] = useState<boolean>(initialState);

    const toggle = () => {
      setIsOn( (prev) => !prev);
    };

  return {
    isOn,
    toggle,
  }
}
