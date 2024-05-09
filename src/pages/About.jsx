import React from 'react';

function About() {

    // fetch from database.
    let title = 'About me'
    let text0 = "I'm Pato Molina Chazarreta, musician artist, song writer interpreter that comes from a family of tradition in Folcore Argentino"
    let text1 = 'I hope you enjoy my material, there are a part of my hart, history, family and passion.'
    let text2 = 'with love, Pato.'

    return (
        <main>
            <div className="pages about">
                <h1>{title}</h1>
                <h2>{text0}</h2>
                <h2>{text1}</h2>
                <h2>{text2}</h2>
            </div>
        </main>
    );
}

export default About;