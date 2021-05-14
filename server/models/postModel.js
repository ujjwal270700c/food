const mongoose=require('mongoose')


const postSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        dish_name: {
            type: String,
            required: true,
        },
        list_of_ind: [{
                ind_name:{
                    type: String,
                    required: true,
                   
                  
                },
                ind_quantity:{
                    type: Number,
                    required: true,
                 
                } ,
                ind_unit:{
                    type: String,
                    required: true,
                 
                }      
        }],
           
        
       step_of_cook: {
            type: String,
            required: true,
        },
       url: {
            type: String,
            required: true,
        },
       created_by:{
        type: String,
        required: true,
       }
    },
    {
        timestamps: true,
    }
)



const Post = mongoose.model('Post', postSchema)

module.exports=Post
