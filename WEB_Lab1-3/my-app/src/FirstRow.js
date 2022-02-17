import React, { Component } from "react";

export class FirstRow extends Component 
{
  render() {
    return (
      <tr>
        <td className="border">{this.props.row}</td>
        <td className="black"></td>
        <td className="white"></td>
        <td className="black"></td>
        <td className="white"></td>
        <td className="black"></td>
        <td className="white"></td>
        <td className="black"></td>
        <td className="white"></td>
        <td className="border">{this.props.row}</td>
      </tr>
    );
  }
}