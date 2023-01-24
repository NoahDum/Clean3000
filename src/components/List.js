import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function List({ item, buttonAction, number }) {
    const navigate = useNavigate();


    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [area, setArea] = useState("")

    const [form, setForm] = useState([])

    const addForm = () => {
        const newForm = {
          id: Date.now(),
          name,
          date,
          area
        };
        const copyForms = [...form];
        copyForms.push(newForm);
    
        setForm([copyForms]);
      }

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const onSubmit =
        (event)=>{
            event.preventDefault();
            localStorage.setForm('value')
        }
    return (
        <div className="Mes-avis">
            <span>
                <h2>Avis n°{number}</h2>
                <p>Nom entreprise/ou client : <br /><input type="text" id="name" name="name" className="form" value={name} onChange={(e) =>setName(e.target.value)} required></input></p>
                <p>Notre technicien est intervenu pour l'entretient de la vitrine le : <br /> <input type="date" id="start" className="form" value={date} onChange={(e) => setDate(e.target.value)} required /></p>
                <p>Observation : <br /> <textarea id="story" name="story" rows="5" cols="40" className="form" value={area} onChange={(e) => setArea(e.target.value)} required /></p>
                <p>Merci de votre confiance.</p>
                <p>Signature du technicien: <br /><input type="text" id="sign" name="sign" className="form" required></input></p>
                <p>Signature du client: <br /><input type="text" id="sign" name="sign" className="form" required></input></p>
                <div className="flexer">
                    <button className="btnDetails" onClick={openModal}>
                        Voir le détail
                    </button>
                    {showModal && (
                        <div className="modal">
                            <p> L'intervention à été effectuée chez le client {name} en date du {date}. Le commentaire qu'a laissé le technicien est : {area}</p>
                            <br /><button className="btnModal" onClick={closeModal}> Fermer la fenetre </button>
                        </div>
                    )
                    }
                    <button onClick={buttonAction} className="btnDelete">
                        Supprimer l'Avis
                    </button>
                </div>
                <button onClick={onSubmit} >submit</button>
            </span>
            <button onClick={() => navigate('/newAvis')}>voir les avis</button>
        </div>
    )
}

export default List
