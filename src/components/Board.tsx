import List from './List'

const Board = () => {
  return (
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center flex flex-">
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Board
