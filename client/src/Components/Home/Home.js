import React, { useContext,useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import {  CircularProgress } from '@material-ui/core';
import PostContext from '../../Context/Post/PostContext'
import useStyles from './Homestyle'
import PostItem from '../post'
const Home = () => {
  const postContext=useContext(PostContext)
  const {GetPost,posts,filtered}=postContext
  console.log(filtered);
  const classes = useStyles();
  useEffect(() => {
    GetPost()
    
  }, [])
  if(posts.length===0 || !posts.length ){
    return  <CircularProgress />
  }
  return filtered != null ? (
   <>
     <div className={classes.heading}>
      <i class="bi bi-three-dots"></i>
      <h1>
        <big> Latest Recipes</big>
      </h1>
      </div>
     
          <Col>
            {filtered && filtered.map((post) => (
              <Row key={post._id} >
                <PostItem post={post} />
              </Row>
            ))}
          </Col>
        </>
   
  ):(
    <>
    <>
     <div className={classes.heading}>
      <i class="bi bi-three-dots"></i>
      <h1>
        <big> Latest Recipes</big>
      </h1>
      </div>
     
          <Col>
            {posts && posts.map((post) => (
              <Row key={post._id} >
                <PostItem post={post} />
              </Row>
            ))}
          </Col>
        </>
    </>
  )
}

export default Home
