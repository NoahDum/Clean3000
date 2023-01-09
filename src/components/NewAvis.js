import React from 'react'

const NewAvis = () => {
    let nom = localStorage.getItem('value');
    return (
        <div>
            <p>le nom du client est {nom} </p>
        </div>
    )
}

export default NewAvis
