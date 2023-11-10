import ListeAdresses from "./listeAdresses.jsx"
import Formulaire from "./Formulaire.jsx"
import { useTodoProvider } from "../util/Context.jsx";


export default function Home() {
    const [context, dispatch] = useTodoProvider();


    return (
        <div className="container">
            <h1>Mon carnet d'adresses !</h1>
            <ListeAdresses context={context} dispatch={dispatch} />
            <Formulaire context={context} dispatch={dispatch} />
        </div>
    );
}
