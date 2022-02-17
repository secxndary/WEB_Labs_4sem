import React, { Component } from "react";
import { Header } from "./Header";
import { TrTd } from "./TrTd";
import { Footer } from "./Footer";
import "./style.css";

export class Checkmate extends Component 
{
  render() {
    return (
      <table cellPadding={0} cellSpacing={0}>
        <Header />
        <TrTd />
        <Footer />
      </table>
    );
  }
}