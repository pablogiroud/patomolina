import React from 'react';

function Teaching() {

    // fetch from database.
    let title = 'Talleres'
    let text0 = ''
    let text1 = ''
    let text2 = ''
    let text3 = ''

    return (
        <main>
            <div className="pages teaching">
                <h1>{title}</h1>
                <h2>{text0}</h2>
                <h2>{text1}</h2>
                <h2>{text2}</h2>
                <h2>{text3}</h2>
            </div>
        </main>
    );
}

export default Teaching;