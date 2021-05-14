import React,{useContext, useState} from 'react'
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./style";
import PostContext from '../../Context/Post/PostContext'

var IndArray=[];
const Ind =()=>{
    const [ind, setind] = useState({
        ind_name:"",
        ind_quantity:"",
        ind_unit:""

    })
    const classes = useStyles();
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        IndArray.push(ind);
        console.log(IndArray);
        setind({   ind_name:"",
        ind_quantity:"",
        ind_unit:"" });
      };
      const clear=()=>{
          setind({ ind_name:"",
          ind_quantity:"",
          ind_unit:""})
      }
    return(
        <>
          <form  className={`${classes.root} ${classes.form}`}   >
        <TextField
        name="ind_name"
        variant="outlined"
        label="Ingredient Name"
        halfWidth
        value={ind.ind_name}
          onChange={(e) => setind({ ...ind, ind_name: e.target.value })}
      />
       <TextField
        name="ind_quantity"
        variant="outlined"
        label="Quantity in number"
        halfWidth
        value={ind.ind_quantity}
          onChange={(e) => setind({ ...ind, ind_quantity: e.target.value })}
      />
       <TextField
        name="ind_unit"
        variant="outlined"
        label="Unit"
        halfWidth
        value={ind.ind_unit}
          onChange={(e) => setind({ ...ind, ind_unit: e.target.value })}
      />
        <Button
        onClick={handleSubmit}
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          halfWidth
        >
        Add Ingredient
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="medium"
         onClick={clear}
          halfWidth
        >
          Clear
        </Button>
       </form>
       <ul>
          {IndArray && IndArray.map((contact) => 
           <li>{`Name: ${contact.ind_name}  Quantity: ${contact.ind_quantity}  Unit: ${contact.ind_unit}`}</li>
          )}
        </ul>
      </>
    )
}
const Form = (props) => {
    const postContext =useContext(PostContext)
    const {AddPost} =postContext
    const [form, setform] = useState({
        dish_name:"",
        step_of_cook:"",
        list_of_ind:"",
        url:""

    })
    const onsubmit=(e)=>{
e.preventDefault();
form.list_of_ind=IndArray;
console.log(form);
AddPost(form)
props.history.push('/')
    }
    const classes = useStyles();
    return (
        <>
          <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        
      >
        <Typography variant="h6">
         Cretea a New Recipe
        </Typography>
        <TextField
          name="dish_name"
          variant="outlined"
          label="Dish Name"
          fullWidth
          value={form.dish_name}
          onChange={(e) => setform({ ...form, dish_name: e.target.value })}
        />
        <Ind />
        <TextField
          name="step_of_cook"
          variant="outlined"
          label="Steps For Cooking"
          fullWidth
          multiline
          rows={8}
          value={form.step_of_cook}
          onChange={(e) => setform({ ...form, step_of_cook: e.target.value })}
          
        />
        <TextField
          name="url"
          variant="outlined"
          label="Image Url"
          fullWidth
        
          value={form.url}
          onChange={(e) => setform({ ...form, url: e.target.value })}
        />
        
        
        <Button
         onClick={onsubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
        Add post
        </Button>
       
      </form>
    </Paper>  
        </>
    )
}

export default Form
