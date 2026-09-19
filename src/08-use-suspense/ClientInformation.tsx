import React, { useEffect } from 'react'
import { getUserAction } from './api/get-user.action';

export const ClientInformation = async({ id }: {id: number }) => {


  // const user = await getUserAction(id)

  // useEffect(() => {
  //   getUserAction(id).then(console.log);
  // }, [id]);

  
  return (
     <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        Arnaldo José Bonillo Berrios
      </h2>

      <p className="text-white text-2xl">Ottawa, Canada</p>
      <p className="text-white text-xl">Un rol del usuario</p>
    </div>
  )
}
