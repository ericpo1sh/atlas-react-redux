import React from 'react'
import DeleteCardButton from "./DeleteCardButton"

const Card: React.FC = () => {
  return (
    <div className="card group/card flex relative m-3 min-h-24 items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <div className="flex flex-col">
        <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
          <span>Lorem ipsum dolor</span>
        </h5>
        <p className="mt-0 text-left">
          Sed viverra, diam eu facilisis bibendum, ante orci placerat quam
        </p>
      </div>
      <div className="absolute top-4 right-4">
        <DeleteCardButton/>
      </div>
    </div>
  )
}

export default Card
