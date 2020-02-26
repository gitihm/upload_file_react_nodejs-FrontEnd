import React from "react";

import "antd/dist/antd.css";
import "./App.css";
import Input from "./components/Input";
import Show from "./components/Show";
import { Row, Col, Alert } from "antd";
import { connect } from "react-redux";
import {
  set_show_alert_success,
  set_show_alert_error
} from "./store/upload/actions";
function App(props) {
  const { set_show_alert_success, set_show_alert_error } = props;
  const { status_success, status_error,message } = props.uploadStore;
  return (
    <div className="App">
      <div className="alert-box">
        {status_success && (
          <Alert
            message={message.text}
            className="alert-success"
            description={message.detail}
            type="success"
            showIcon
          />
        )}
        {status_error && (
          <Alert
            message={message.text}
            className="alert-error"
            description={message.detail}
            type="error"
            showIcon
          />
        )}
      </div>
      <header className="App-header">
        <Row>
          <Col md={24}>
            <div className="title">
              UPLOAD FILE
              <hr />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <Input />
          </Col>
        </Row>
        <Row>
          <Col md={24}>
            <Show />
          </Col>
        </Row>
      </header>
      <a href="https://github.com/gitihm/upload_file_react_nodejs-FrontEnd">
        <h2>GITHUB</h2>
      </a>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    uploadStore: state.uploadStore
  };
};

export default connect(mapStateToProps, {
  set_show_alert_success,
  set_show_alert_error
})(App);
