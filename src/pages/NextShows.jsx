import React from 'react';
import Events from '../components/Events'

function NextShows() {
    let title = "Proximas Fechas"

    return (
        <main>
            <div className="pages nextShows">
                <h1>{title}</h1>
                <Events />
                <div className="wrapper"></div>
            </div>
        </main>
    );
}

export default NextShows;
