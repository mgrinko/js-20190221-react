import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import PhonesPage from './components/PhonesPage';

ReactDOM.render(
  <BrowserRouter>
    <PhonesPage />
  </BrowserRouter>,

  document.getElementById('root')
);
