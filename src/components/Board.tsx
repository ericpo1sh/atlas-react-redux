import List from './List'

const Board = () => {
  return (
    <div className="m-auto h-screen w-screen text-center flex overflow-x-scroll">
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Board
