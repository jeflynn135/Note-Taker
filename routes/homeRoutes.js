const router = require("express").Router();
const path = require("path")
console.log("made it to home routes")

router.get("/", async (req, res)=> {
    console.log("homeRoutes")
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get("/notes", async (req,res) => {
    console.log("notesRoutes")
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// router.post("*", async (req,res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })


module.exports = router;