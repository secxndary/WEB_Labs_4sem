import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Notes } from './Notes.jsx';
import { StudentInfo } from './StudentInfo';

ReactDOM.render(
  <div>
    <StudentInfo />
    <Notes />
  </div>,
  document.getElementById('root')
);


reportWebVitals();
