import React, { useState } from "react";
import { Row, Col, Spin  } from "antd";
import { connect } from "react-redux";
import {
  upload_file,
  add_review,
  update_files,
  add_file,
  set_msg
} from "../store/upload/actions";
const Input = props => {
  const { upload_file, add_review, add_file, set_msg } = props;
  const { url_review, url_upload } = props.uploadStore;
  const [isLoadding, setIsLoadding] = useState(false);
  const handleChange = e => {
    add_review(URL.createObjectURL(e.target.files[0]));
    add_file(e.target.files[0]);
  };
  const clear = () => {
    add_file({});
    add_review("");
  };
  if (isLoadding) {
    return(
      <>
        <div>
          <Row>
            <Col md={24}>
              <Row type="flex" justify="center">
              <Spin size="large" />
              </Row>
            </Col>
          </Row>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <Row>
            <Col md={24}>
              <Row>
                <img src={url_review} width="500px" />
              </Row>
              <Row>
                {!url_review && (
                  <input
                    type="file"
                    name="file"
                    onChange={e => handleChange(e)}
                  />
                )}
              </Row>
              <Row
                type="flex"
                justify="center"
                style={{ marginTop: 10, marginBottom: 20 }}
              >
                <button
                  className="btn-ok"
                  onClick={async () => {
                    setIsLoadding(true);
                    await upload_file(url_upload);
                    setIsLoadding(false);
                  }}
                >
                  UPLOAD
                </button>
                <button
                  style={{ marginLeft: 5 }}
                  className="btn-clear"
                  onClick={clear}
                >
                  CLEAR
                </button>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
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
  add_file,
  set_msg
})(Input);
