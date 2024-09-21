import Header from "./Header";
import Footer from "./Footer"
import Board from './Board'
import { store } from "../store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Board/>
      <Footer/>
    </Provider>
  )
}

export default App;
