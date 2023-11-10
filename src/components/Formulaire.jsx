import React, { useEffect, useState } from 'react';

export default function Formulaire({ context, dispatch }) {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [mail, setMail] = useState('');
    const [telephone, setTelephone] = useState('');


    useEffect(() => {
        setNom('');
        setPrenom('');
        setMail('');
        setTelephone('');
    }, [context.listeAdresses.length])


    const handleSubmit = (event) => {
        event.preventDefault();

        if (nom && prenom && mail && telephone) {

            const nouvelAdresse = {
                nom: nom,
                prenom: prenom,
                mail: mail,
                telephone: telephone
            };

            const ajoutNouvelleAdresse = [nouvelAdresse, ...context.listeAdresses];

            dispatch({ type: "setListeAdresses", payload: ajoutNouvelleAdresse });

            alert("Nouveau contact ajouté");


        } else { alert("Veuillez remplir tous les champs !") }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input type="text" className="form-control" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="mail" className="form-label">Mail</label>
                <input type="email" className="form-control" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Téléphone</label>
                <input type="tel" className="form-control" id="phone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
