import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useContext } from 'react'
import { buttontextContext } from '../Layouts/TestLayout'
import pineapple from '../assets/pineapple.webp'

export default function docentengek() {



  const tekstje = useContext(buttontextContext);

const [maakzichtbaar, setMaakzichtbaar] = useState("none");

  return (
    <div>

<h1>Zoek je deze docent?:</h1>
<p> <b>van de veen</b> </p>

<button onClick={() => maakzichtbaar == "none" ? setMaakzichtbaar("block") : setMaakzichtbaar("none")}>{tekstje}</button>
<img className = "imgananas" src={pineapple}
 alt = "kan geen webp inlade vgm" style={{display: maakzichtbaar}}></img>


    </div>
  )
}
