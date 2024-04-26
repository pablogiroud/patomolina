import React from 'react';
import { Helmet } from "react-helmet";

function Home() {
    let title = "Pato Molina"
    let description = "Singer - Composer - Flutist - Writer - Orchestra director"
    let image = ""
    let video = "/images/video.mp4"

    return (
        <main>
            <Helmet>
                <meta name="author" content="Pato Molina" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta name="viewport" content="width=device-width - initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
            </Helmet>
            <video autoPlay loop controls id="video">
                <source src={video} type="video/mp4" />
            </video>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </main>
    );
}

export default Home;