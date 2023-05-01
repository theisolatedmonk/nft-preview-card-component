import React from 'react'

type Texture = {
    textContainer: string
    className: string
}

export  function NormalText(Props :Texture) {
  return (
    <div className={Props.className}>{Props.textContainer}</div>
  )
}




