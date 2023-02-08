import {Cars, Form} from "./components";
import {useSelector} from "react-redux";

const App = () => {

    const {loading} = useSelector(state => state.cars)

 return (
  <div>
       <Form/>
       <hr/>
      {loading && <h3>loading</h3>}
       <Cars/>
  </div>
 );
};

export {App};