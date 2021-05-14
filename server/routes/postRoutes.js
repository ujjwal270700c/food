const express =require('express')
const router = express.Router();
const auth =require ('../Middleware/auth.js')
const { addPost, getPost }=require('../controllers/postController')

router.post("/",auth, addPost);
router.get("/", getPost)

module.exports =router;