import {useDispatch} from "react-redux";
import {postAction} from "../../redux";

const Post = ({post}) => {

    const {id, title, body} = post;
    const dispatch = useDispatch()

 return (
  <div>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div>body: {body}</div>
      <button onClick={()=>dispatch(postAction.setSelectedPost(post))}>select</button>
      <button onClick={()=>dispatch(postAction.getById({id}))}>apiSelect</button>
  </div>
 );
};


export {Post};