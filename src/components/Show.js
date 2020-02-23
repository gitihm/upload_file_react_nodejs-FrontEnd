import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Row, Col,Modal } from "antd";
import { List, Typography } from "antd";

const Show = () => {
    const [ data , setData ] = useState([])
    const [visible , setvisible ] = useState(false)
    const [ nowUrl , setNowUrl] = useState('')
    useEffect(()=>{
        getListfile()
     },[])
     const getListfile = async () =>{
         let res = await axios.get('https://testcheckfiletype.herokuapp.com/list')
         setData(res.data.list)
     }
     const showImg = (url) =>{
        setNowUrl(url)
        showModal()
     }
     const showModal = () => {
        setvisible(true)
      };
    
      const handleOk = e => {
        setvisible(false)
      };
    
      const handleCancel = e => {
        setvisible(false)
      };
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
          <List
            header={<div>List Upload</div>} style={{backgroundColor:"white"}}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item onClick={(e)=>showImg(item.url)}>
                <Typography.Text mark>[ITEM]</Typography.Text> {item.name}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
export default Show;
