const router = require("express").Router();

//Root router
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;