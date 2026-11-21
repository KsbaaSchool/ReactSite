import { useContext } from 'react'
import React from 'react'
import Button from '../Buttons/Button'
import Button2 from '../Buttons/Button2'
import { buttontextContext } from '../Layouts/TestLayout'


export default function studenten() {

const textjevanbutton = useContext(buttontextContext);


  return (
    <div>

<p>W berkay, W Rames, W boen, W Khalid</p>


<button> {textjevanbutton} </button>

    </div>
  )
}