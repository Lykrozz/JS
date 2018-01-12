/*
Importer composants serveurs
 */
    // Class
    const express = require('express');
    const ejs     = require('ejs');
    const path    = require('path');

    // Modules
    const frontRoute = require('./routes/front');
/*
Configurer serveur
 */
    const app = express();

    // Définir le dossier static pour les vues client
    app.set( `views`, __dirname + '/www' );
    app.use( express.static( path.join( __dirname, 'www') ) );

    // Moteur de rendu
    app.set( `view engine`, `ejs` );

    //Routes
    app.use(`/`, frontRoute);
/*
Ecouter serveur
 */
    // 3000 -> num de port
    const server = app.listen( 3000, () => {
        console.log('Le serveur est lancé');
    });
