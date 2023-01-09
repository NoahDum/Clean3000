import React, { useState } from 'react'

function List({ item, buttonAction, number }) {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [area, setArea] = useState("")

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const [showForm, setShowForm] = useState(true)

    const openForm = () => {
        setShowForm(true);
    }
    const closeForm = () => {
        setShowForm(false);
    }
    return (
        <div className="Mes-avis">
            <span>
                <h2>Avis n°{number}</h2>
                <p>Nom entreprise/ou client : <br /><input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required></input></p>
                <p>Notre technicien est intervenu pour l'entretient de la vitrine le : <br /> <input type="date" id="start" value={date} onChange={(e) => setDate(e.target.value)} required /></p>
                <p>Observation : <br /> <textarea id="story" name="story" rows="5" cols="40" value={area} onChange={(e) => setArea(e.target.value)} required /></p>
                <p>Merci de votre confiance.</p>
                <div className="flexer">
                    <p>Signature du technicien: <input type="text" id="sign" name="sign" required></input></p>
                    <p>Signature du client: <input type="text" id="sign" name="sign" required></input></p>
                </div>
            </span>
            <div className="flexer">
                <button className="btnDetails" onClick={openModal}>
                    Voir le détail
                </button>
                {showModal && (
                    <div className="modal">
                        <p> L'intervention à été effectuée chez le client {name} en date du {date}. Le commentaire qu'a laissé le technicien est : {area}</p>
                        <button onClick={closeModal}> Fermer la fenetre </button>
                    </div>
                )
                }
                <button onClick={buttonAction} className="btnDelete">
                    Supprimer l'Avis
                </button>
            </div>

        </div>
    )
}

export default List
