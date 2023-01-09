import React from 'react'

const List = ({ item, buttonAction }) => {
    return (
        <div className="Mes-avis">
            <span>
                <h2>Avis n° {item.key}</h2>
                <p>Nom entreprise/ou client : <input type="text" id="name" name="name" required></input></p>
                <p>Notre technicien est intervenu pour l'entretient de la vitrine le : <input type="date" id="start" required></input></p>
                <p>Observation : <textarea id="story" name="story" required />
                </p>
                <p>Merci de votre confiance.</p>
                <p>Signature du technicien: <input type="text" id="sign" name="sign" required></input></p>
                <p>Signature du client: <input type="text" id="sign" name="sign" required></input></p>
            </span>
            <button>
                Voir le détail
            </button>
            <button onClick={buttonAction}>
                Supprimer la tâche
            </button>
        </div>
    )
}

export default List
