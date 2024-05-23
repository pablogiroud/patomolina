import React from 'react';

function About() {

    // fetch from database.
    let title = 'Biografia:'
    let text0 = 'Nació en Tucumán. Desde muy pequeño tuvo su primer acercamiento a la música con la flauta traversa, instrumento que le permitió ejecutar los ritmos folklóricos del NOA en un ambiente familiar siempre ligado al folklore. Su abuela Josefina Chazarreta, hija de don Andrés Chazarreta, sembró en su casa de crianza el amor por la música y la danza.'
    let text1 = 'En el año 2007, ya en la ciudad de La Plata, fundó junto a su hermano Benjamín Los chaza, conjunto musical que reinterpreta las danzas nativas recopiladas por Chazarreta y con el que recorrió diversos escenarios de todo el país.  Con Los chaza grabó el disco Baile Nativo en el año 2009, recibiendo por este trabajo el premio Atahualpa.'
    let text2 = 'El compromiso por querer contar la realidad que vive su país y las causas sociales que le generan sentimientos de injusticia fue el primer impulso que lo llevan en el año 2013 a emprender su carrera como compositor y solista, grabando ese mismo año el disco Despertando y en el año 2017 el disco Melodía sin final. Ya en el año 2020 y con el apoyo del INAMU realiza la producción del disco Bajo el mismo sol con la dirección artística de Pablo Vignati, este material recibió el reconocimiento de dos premios Mercedes Sosa.'
    let text3 = 'En la actualidad se desempeña como profesor titular de la cátedra de Armonía para el folklore del Departamento de Folklore de la UNA junto a Agustín Conejeros Bianco, y junto a Sebastián Farías Gómez se desempaña como director artístico del Ensamble vocal popular de dicha institución, con la dirección del maestro Damián Sánchez.'

    return (
        <main>
            <div className="pages about">
                <h1>{title}</h1>
                <h2>{text0}</h2>
                <h2>{text1}</h2>
                <h2>{text2}</h2>
                <h2>{text3}</h2>
            </div>
        </main>
    );
}

export default About;