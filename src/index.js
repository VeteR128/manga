import React from "react";
import * as ReactDOMClient from "react-dom/client";
import axios from "axios";
import Addcard from "./components/addCard";
import FormSubmit from "./components/formSubmit";
import Header from "./components/header";
import options from "./utils/constants";
import "./pages/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showResult = this.showResult.bind(this);
    this.state = {
      item: [],
    };
  }

  render() {
    return (
      <div className="page">
        <Header />
        <FormSubmit onAdd={this.showResult} />

        <Addcard item={this.state.item} />
      </div>
    );
  }
  async showResult(link) {
    options.params.url = link.url;

    try {
      const response = await axios.request(options);
      console.log(response.data.result);
      this.setState({ item: response.data.result });
    } catch (error) {
      console.error(error);
    }
  }
}

const app = ReactDOMClient.createRoot(document.getElementById("App"));
app.render(<App />);
