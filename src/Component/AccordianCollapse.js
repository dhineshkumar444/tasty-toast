import React from 'react'
import { useState } from 'react'
import AccordianItem from './AccordianItem'


const AccordianCollapse = ({collapse, item}) => {
    
  return (
    <div  className='text-slate-400 shadow-lg p-8'>
        <h1 onClick={()=>item()}>
        Accordian
            </h1>
           { collapse? <AccordianItem />: ""}

    </div>
  )
}

export default AccordianCollapse