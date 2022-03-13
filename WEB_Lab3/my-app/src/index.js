import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PhoneInput from './PhoneInput';
import SortTable from './SortTable';


ReactDOM.render(
  <PhoneInput />,
  document.getElementById('root')
);

ReactDOM.render(
  <SortTable />,
  document.getElementById('root1')
);

reportWebVitals();
