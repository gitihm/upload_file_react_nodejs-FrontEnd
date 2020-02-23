import React from 'react';

import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import Show from './components/Show'
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col md={24}>
          </Col>
        </Row>
        <Row>
        <Col md={8}>
<Show/>
          </Col>
          <Col md={16}>
       <Input/>
          </Col>
        </Row>
       
      </header>
    </div>
  );
}

export default App;
