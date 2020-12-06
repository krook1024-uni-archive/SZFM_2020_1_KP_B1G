import React from "react";
import NavBar from "../components/client/NavBar";



export default class Profile extends React.Component {
   state = {
      loading: true
}

   async componentDidMount() {
   const url = "localhost:3000/";
   const response = await fetch (url);
   const data = await response.json();
   console.log(data);
}

render() {
   return (
   <>
   <NavBar/>
      <div>
      {this.state.loading ? <div>loading...</div> : <div> person..</div>}
      </div>
   </>
);


}
}
