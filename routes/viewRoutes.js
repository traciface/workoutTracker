const router = require("express")
	.Router();
const path = require("path");

// renders home page
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"))
});

//renders workout page
router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

//renders statistics page
router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;