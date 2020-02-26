import React from "react";
import { Row, Col, Button } from "antd";
import { connect } from "react-redux";
import {
  upload_file,
  add_review,
  update_files,
  add_file
} from "../store/upload/actions";
const Input = props => {
  const { upload_file, add_review, add_file } = props;
  const { url_review, url_upload } = props.uploadStore;
  const handleChange = e => {
    add_review(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
    console.log(typeof e.target.files[0]);
    add_file(URL.createObjectURL(e.target.files[0]));
  };
  const clear = () => {
    add_file({});
    add_review("");
  };

  return (
    <>
      <div>
        <Row>
          <Col md={24}>
            <Row>
              <img src={url_review} width="400px" />
            </Row>
            <Row>
              
                <input
                  type="file"
                  name="file"
                  onChange={e => handleChange(e)}
                />
              
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: 10 }}>
              <Button type="primary" onClick={()=>upload_file(url_upload)}>
                UPLOAD
              </Button>
              <Button style={{ marginLeft: 5 }} type="danger" onClick={clear}>
                CLEAR
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    uploadStore: state.uploadStore
  };
};

export default connect(mapStateToProps, {
  upload_file,
  add_review,
  update_files,
  add_file
})(Input);
