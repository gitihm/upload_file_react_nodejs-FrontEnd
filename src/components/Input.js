import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Button,Alert  } from "antd";
const Input = () => {
  const [url, setUrl] = useState("");
  const [review , setreview] = useState("")
  const handleChange = e => {
    setreview(URL.createObjectURL(e.target.files[0]));
    setUrl(e.target.files[0]);
  };
  const clear = () => {
    setUrl("");
  };
  const upload = async () => {
    let formData = new FormData()
    formData.append("file", url);
    let res = await axios.post(
      "https://testcheckfiletype.herokuapp.com/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    
    alert(res.data.message)
  };
 
  return (
    <>
      <Row>
        <Col md={24}>
          <Row>
            <img src={review} width="300px" />
          </Row>
          <Row>
            {!url && (
              <input type="file" name="file" onChange={e => handleChange(e)} />
            )}
          </Row>
          <Row type="flex" justify="center">
            <Button type="primary" onClick={upload}>UPLOAD</Button>
            <Button style={{ marginLeft: 5 }} type="danger" onClick={clear}>
              CLEAR
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Input;
