import React, {useContext, useEffect,useRef} from "react";
import {Link, useHistory} from "react-router-dom";
import {
    AppBar,
    Typography,
    Toolbar,
    Avatar,
    Button
} from "@material-ui/core";
import PostContext from '../../Context/Post/PostContext'
import useStyles from "./style";

import AuthContext from "../../Context/Auth/AuthContext"

const Header = () => {
    const classNamees = useStyles();
    const history = useHistory();
    const text = useRef("");
    const postContext = useContext(PostContext);
    const { filterPost, clearFilter, filtered } = postContext;
    const authContext = useContext(AuthContext);
    const {user, isAuthenticated, logout} = authContext;
    console.log(user,isAuthenticated);
    
    useEffect(() => {
        if (filtered === null) {
            console.log(text);
          text.current.value = "";
        }
      });
    
      const onChange = (e) => {
         
        console.log(text.current.value);
        if (text.current.value !== "" && text.current.value) {
          filterPost(e.target.value);
        } else {
          clearFilter();
        }
      };
    
    let flag = null;
    if (localStorage.token) {
        flag = true;
    } else {
        flag = false;
    }
    const Exit = () => {
        logout(history);
    };
    return flag ? (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Recipie App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/add-post'>Add Post</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="#">About</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input onChange={onChange}
              ref={text} className="form-control me-sm-2" type="text" placeholder="Search" />
        <button onClick={Exit} className="btn btn-secondary my-2 my-sm-0" type="submit">LogOut</button>
      </form>
    </div>
  </div>
</nav>
        </> 
    ):(<>
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Recipie App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/add-post'>Add Post</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="#">About</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input onChange={onChange}
              ref={text} className="form-control me-sm-2" type="text" placeholder="Search by dish name" />
        <Link to='/auth' className="btn btn-secondary my-2 my-sm-0" type="submit">SignIn</Link>
      </form>
    </div>
  </div>
</nav>
    </>)
}

export default Header
{/* 
  <AppBar classNameName={
                    classNamees.appBar
                }
                position="static"
                color="inherit">
                <div classNameName={
                    classNamees.brandContainer
                }>
                    <Typography component={Link}
                        to="/"
                        classNameName={
                            classNamees.heading
                        }
                        variant="h2"
                        align="center">
                        Social{" "} </Typography>
                    </div>
  

                <Toolbar classNameName={
                    classNamees.toolbar
                }>

                    {
                    flag ? (
                        <>
                            <div classNameName={
                                classNamees.profile
                            }>
                               
                                  
                              

                                <Typography classNameName={
                                        classNamees.userName
                                    }
                                    variant="h6">
                                    {
                                    localStorage.name
                                } </Typography>
                          <Button classNameName={
                                        classNamees.button
                                    }component={Link}
                            to="/add-post"
                            variant="contained"
                            color="primary">
                            Add Dish
                        </Button>

                                <Button variant="contained"
                                    classNameName={
                                        classNamees.logout
                                    }
                                    color="secondary"
                                    onClick={Exit}>
                                    Logout
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                        <Button component={Link}
                            to="/add-post"
                            variant="contained"
                            color="primary">
                            Add Dish
                        </Button>
                        <Button component={Link}
                            to="/auth"
                            variant="contained"
                            color="primary">
                            Sign In
                        </Button>
                        </>
                    )
                } </Toolbar>
            </AppBar> */}