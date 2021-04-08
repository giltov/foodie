import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/main.scss';
import Header from "./components/header";

// markup
const IndexPage = () => {
  return (
    <div id="app">
      <div id="background">
        <Header/>
      </div>
    </div>
  );
}

export default IndexPage
