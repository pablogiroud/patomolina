import React from 'react';
import Cards from '../components/Cards'

function Teaching() {

    let title = 'Talleres'
    return (
        <main>
            <div className="pages teaching">
                <h1>{title}</h1>
                <Cards />
                <div className="wrapper"></div>
            </div>
        </main>
    );
}

export default Teaching;