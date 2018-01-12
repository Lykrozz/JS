/*
Importer les composants de la route
 */
    // Class
    const express = require('express');
    const router  = express.Router();
/*
Définir la ou les routes
 */
    // Page home
    router.get( `/`, ( req, res ) => {
        res.render( `index` );
    } );
/*
Exporter le module de la route
 */
    module.exports = router;