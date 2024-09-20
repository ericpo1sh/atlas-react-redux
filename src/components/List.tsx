import React from 'react'
import DeleteListButton from "./DeleteListButton"
import Card from "./Card"
import NewCardForm from "./NewCardForm"


const List: React.FC = () => {
  return (
    <div>
      <div className="group/list h-full min-w-96 p-4">
        <DeleteListButton/>
        <h3>To Do</h3>
        <Card/>
        <Card/>
        <Card/>
        <NewCardForm/>
      </div>
    </div>
  )
}

export default List
