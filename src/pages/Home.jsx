import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
    let title = "Pato Molina"
    let description0 = "Singer - Composer"
    let description1 = "Flutist - Writer"
    let description2 = "Orchestra director"
    let image = ""
    let video = "/images/video.mp4"

    return (
        <main>
            <HelmetProvider>
                <Helmet>
                    <meta name="author" content="Pato Molina" />
                    <title>{title}</title>
                    <meta name="description" content="{{description0 + '-' + description1 + '-' + description2 }}" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content="{{description0 + '-' + description1 + '-' + description2 }}" />
                    <meta property="og:image" content={image} />
                    <meta property="og:type" content="website" />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content="{{description0 + '-' + description1 + '-' + description2 }}" />
                    <meta name="viewport" content="width=device-width - initial-scale=1.0" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
                </Helmet>
                <h1>{title}</h1>
                <h2>{description0}</h2>
                <h2>{description1}</h2>
                <h2>{description2}</h2>
                <video autoPlay="autoplay" loop="loop" muted defaultmuted="true" playsInline preload="auto" id="video">
                    <source src={video} type="video/mp4"/>
                </video>
            </HelmetProvider>
        </main>
    );
}

export default Home;