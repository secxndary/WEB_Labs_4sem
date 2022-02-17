import React, { Component } from "react";
import { SecondRow } from "./SecondRow";
import { FirstRow } from "./FirstRow";

export class TrTd extends Component 
{
  render() {
    const rows = [];
    for (let i = 1; i < 9; ++i) 
    {
      if (i % 2 === 0) rows.push(<SecondRow row={i} />);
      else rows.push(<FirstRow row={i} />);
    }
    return rows;
  }
}