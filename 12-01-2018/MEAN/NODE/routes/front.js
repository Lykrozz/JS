/*
Importer les composants de la route
 */
    // Class
    const express    = require('express');
    const router     = express.Router();
    const bodyParser = require('body-parser');

    // Middleware
    router.use(bodyParser.urlencoded({extended: true}));
    router.use(bodyParser.json());

/*
Créer une collection de données
 */
    const indexCollection = [
        {
            title : 'Nodejs',
            content : 'App server'
        },
        {
            title : 'Expressjs',
            content : 'App server'
        },
        {
            title : 'MongoDB',
            content : 'Base de données NOsql'
        },
        {
            title : 'Angular',
            content : 'One framework (to rule dem all)'
        }
    ];


/*
Définir la ou les routes
 */
    // Page home
    router.get( `/`, ( req, res ) => {
        res.render( `index`, { title : 'Titre de ta page' , content: indexCollection} );
    } );
/*
Exporter le module de la route
 */
    module.exports = router;