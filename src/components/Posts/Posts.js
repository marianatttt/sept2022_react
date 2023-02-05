import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {postAction} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {

   const dispatch = useDispatch()
   const {posts, errors, loading} = useSelector(state => state.posts)

    useEffect(()=>{
        dispatch(postAction.getAll())
    }, [])


 return (
  <div>
      {errors && JSON.stringify(errors)}
      {loading && <h2>loading</h2> }
      {posts.map(post=><Post key={post.id} post={post}/>)}
  </div>
 );
};


export {Posts};