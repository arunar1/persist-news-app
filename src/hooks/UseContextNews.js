import { useState } from 'react'
import React from 'react'

export const newsContext= React.createContext()

export function UseContextNews(props) {

    const [selectedNews,setSelectedNews]=useState()


    

  return (
   <newsContext.Provider value={{selectedNews,setSelectedNews}}>
     {props.children}
   </newsContext.Provider>
  )
}
