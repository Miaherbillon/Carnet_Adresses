export default function listAdress({ context }) {

    return <section className="containerListe" >
        {context.listeAdresses.map((elem, index) => {
            return <div className="Liste" key={index}>
                <p>{elem.nom}</p>
                <p>{elem.prenom}</p>
                <p>{elem.mail}</p>
                <p>{elem.telephone}</p>
            </div>
        })}

    </section>
}