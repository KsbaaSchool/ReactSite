import React from 'react'
import { useParams } from 'react-router'

export default function docentengek() {

const {id} = useParams();

  return (
    <div>

<h1>Zoek je deze docent?:</h1>
<p> {id} </p>

    </div>
  )
}
