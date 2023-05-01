import React from 'react'

type Texture = {
    textContainer: string
}

export  function NormalText(Props :Texture) {
  return (
    <div>{Props.textContainer}</div>
  )
}




type BoldTexts = {
    BtextContainer: string
}

export  function BoldText(Props:BoldTexts) {
  return (
    <div>{Props.BtextContainer}</div>
  )
}