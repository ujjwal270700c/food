import React, { useReducer } from "react";
import PostContext from "./PostContext";
import PostReducer from "./PostReducer";
import axios from "axios";
import { ADD_POST, GET_POST ,FILTER_POST,CLEAR_FILTER_POST} from "../Constants/userConstants";
const PostState = (props) => {
  const initialState = {
    posts: [],

    filtered: null,
  };
  const [state, dispatch] = useReducer(PostReducer, initialState);

  const AddPost = async (post) => {
    const config = {
      headers: {
        "Conten-Type": "application/json",
      },
    };
    try {
      await axios.post("http://localhost:5001/api/post", post, config);
      dispatch({
        type: ADD_POST,
        payload: post,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const GetPost = async () => {
    const config = {
      headers: {
        "Conten-Type": "application/json",
      },
    };
    try {
      const res = await axios.get("http://localhost:5001/api/post", config);
      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filterPost = (text) => {
      console.log(text);
    dispatch({ type: FILTER_POST, payload: text });
  };
  const clearFilter = (text) => {
    dispatch({ type: CLEAR_FILTER_POST, payload: text });
  };
  return (
    <PostContext.Provider
      value={{
        posts: state.posts,

        filtered: state.filtered,
        AddPost,
        GetPost,

        filterPost,
        clearFilter,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
