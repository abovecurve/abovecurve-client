import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
   state = {
      data: ''
   };
   componentDidMount = () => {
      console.log('started!');
      // TODO:
      // - CORS blocking request
      // - API Call based on env
      axios.get(`http://api.abovecurve.com/`).then(res => {
         console.log(res.data);
         const dataFromServer = res.data;
         this.setState({ data: dataFromServer });
      });
   };
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <p>{`This is deployed on the ${process.env.REACT_APP_ENV} envrionment. The API is saying:`}</p>
               <p>{this.state.data}</p>
            </header>
         </div>
      );
   }
}

export default App;
