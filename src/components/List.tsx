import React from 'react'
import DeleteListButton from "./DeleteListButton"
import Card from "./Card"
import NewCardForm from "./NewCardForm"


const List: React.FC = () => {
  return (

      <div className="group/list h-full min-w-44 p-4 z-0">
        <DeleteListButton/>
        <h3>To Do</h3>
        <Card/>
        <Card/>
        <Card/>
        <NewCardForm/>
      </div>

  )
}

export default List
