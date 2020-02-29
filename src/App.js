import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import DogsView from "./components/dogs-view.component";
import DogsList from "./components/dogs-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={DogsView} />
        <Route path="/list" exact component={DogsList} />
      </div>
    </Router>
  );
}

export default App;
