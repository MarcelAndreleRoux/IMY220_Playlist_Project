import React from "react";
import { Navbar } from "../components/Navbar";
import { getCookie, setCookie } from "../utils/utils";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="home container">
        <Navbar />
        <h1>This is my homepage</h1>
      </div>
    );
  }
}
