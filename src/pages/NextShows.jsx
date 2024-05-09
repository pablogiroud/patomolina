import React from 'react';

function NextShows() {
    let title = "Next Shows"
    let date0 = '24 de mayo, tetro coliseo'
    let date1 = '13 de mayo, La Plata'
    return (
        <main>
            <div className="pages nextShows">
                <h1>{title}</h1>
                <h2>{date0}</h2>
                <h2>{date1}</h2>
            </div>
        </main>
    );
}

export default NextShows;
