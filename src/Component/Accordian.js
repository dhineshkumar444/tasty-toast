import React from 'react'


import { ACCORDARRAY } from '../Utils/constants'
import AccordianCollapse from './AccordianCollapse'
import { useState } from 'react'

const Accordian = () => {

    const [showItem, setShowItem] = useState(2);

  return (
    <div>
    { ACCORDARRAY.map((item, index) => (
    <AccordianCollapse collapse={index===showItem?true:false}  item={index==showItem? ()=>setShowItem(" "):()=>setShowItem(index)}/>

    ))}
    </div>
  )
}

export default Accordian
