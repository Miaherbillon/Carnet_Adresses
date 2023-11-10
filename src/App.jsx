import Adresses from "./components/Adresses.jsx"
import { TodoProvider } from "./util/Context.jsx";


export default function App() {

  return <TodoProvider>
    <Adresses />
  </TodoProvider>

}