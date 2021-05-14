const PostMessage = require('../models/postModel');
exports.addPost =async (req, res) => {

    console.log(req.user);

   
    try {
        const post = req.body;
        console.log(post.selectedFile);
        const newPostMessage = new PostMessage({
             ...post,
             name:req.user.name,
             created_by: req.user.id,
               createdAt: new Date().toISOString()
             })
     
       const data =await newPostMessage.save();
       console.log(data);

        res.status(201).json(data );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
exports.getPost=async (req, res) => { 
    try {
        const postMessages = await PostMessage.find().sort({createdAt:-1});
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
