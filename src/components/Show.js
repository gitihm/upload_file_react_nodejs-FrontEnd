import React, { useEffect, useState } from "react";
import { Row, Col, Modal } from "antd";
import { Card } from "antd";

import { connect } from "react-redux";
import {
  upload_file,
  add_review,
  update_files,
  add_file
} from "../store/upload/actions";
const Show = props => {
  const { update_files } = props;
  const { files } = props.uploadStore;
  const [visible, setvisible] = useState(false);
  const [nowUrl, setNowUrl] = useState("");
  const { Meta } = Card;
  useEffect(() => {
    update_files();
  }, []);
  const showImg = url => {
    setNowUrl(url);
    showModal();
  };
  const showModal = () => {
    setvisible(true);
  };

  const handleOk = e => {
    setvisible(false);
  };

  const handleCancel = e => {
    setvisible(false);
  };
  const filetoHTML = () =>
    files.map(item => (
      <Col md={4}>
        <div  className="card">
        <Card
          hoverable
          style={{ margin:4}}
         
          cover={
            <img
              alt={item.name}
              src={item.url}
              height="200px"
            />
          }
        >
          <Meta title={item.name}  />
        </Card></div>
      </Col>
    ));
  return (
    <>
      <Row>
        <Modal
          title="Basic Modal"
          width="40%"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <img src={nowUrl} width="100%" />
        </Modal>
        <Col md={24}>
          <div className="showlist">
            List Upload
            <hr />
            <Row type='flex' justify='center' className="card-position">
              {filetoHTML()}
            </Row>
          </div>
          {/* <List
            header={<div>List Upload</div>}
            style={{ backgroundColor: "white" }}
            bordered
            dataSource={files}
            renderItem={item => (
              <List.Item onClick={e => showImg(item.url)}>
                <Typography.Text mark></Typography.Text> {item.name}
              </List.Item>
            )}
          /> */}
        </Col>
      </Row>
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
})(Show);
