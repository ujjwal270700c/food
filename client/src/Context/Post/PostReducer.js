import {
    ADD_POST,
    GET_POST,
    FILTER_POST,CLEAR_FILTER_POST
  } from "../Constants/userConstants";
  export default (state, action) => {
    switch (action.type) {
      case ADD_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload],
          loading: false,
        };
        case GET_POST:
            {
            return{
                ...state,
                posts:action.payload,
                loading:false
            }
        }
        case FILTER_POST:
            return{
              ...state,
              filtered:state.posts.filter(post => {
                const regex=new RegExp(`${action.payload}`, `gi`);
                return post.name.match(regex) || post.dish_name.match(regex)
              
              })
            }
            
            case CLEAR_FILTER_POST:
              return{
                ...state,
                filtered:null
              }
     
      default:
        return state;
    }
  };