import React from 'react';

function About() {

    let dates = 'Proximas Fechas' // traer de la base de datos.
    let date0 = '24 de mayo, tetro coliseo'
    let date1 = '13 de mayo, La Plata'

    return (
        <main>
            <div className="pages about">
                <h1>{dates}</h1>
                <h2>{date0}</h2>
                <h2>{date1}</h2>
            </div>
        </main>
    );
}

export default About;