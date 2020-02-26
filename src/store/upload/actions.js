import axios from "axios";
import React from "react";
import { Alert } from "antd";
const getList = async () => {
  let res = await axios.get("https://testcheckfiletype.herokuapp.com/list");
  return res.data.list;
};

export const upload_file = payload => async dispatch => {
  console.log("REDUX UPLOAD");

  let formData = new FormData();

  await formData.append("file", payload);
  //  console.log(payload);

  let res = await axios.post(
    "https://testcheckfiletype.herokuapp.com/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
  console.log(res.data);

  let data = await getList();

  dispatch({ type: "UPDATE_FILES", payload: data });
  if (res.data.message == "file uploaded") {
    dispatch({ type: "SET_MSG", payload: { detail: res.data.url, text: res.data.message } });
    // set_msg({ detail: res.data.url, text: res.data.message });
    dispatch({ type: "SET_SUCCESS", payload: true });
    setTimeout(()=>{
      dispatch({ type: "SET_SUCCESS", payload: false });
    },2000)
  } else {
    // set_msg({ detail: res.data.detail, text: res.data.message });
    dispatch({ type: "SET_MSG", payload: { detail: res.data.detail, text: res.data.message } });
    dispatch({ type: "SET_ERROR", payload: true });
    setTimeout(()=>{
      dispatch({ type: "SET_ERROR", payload: false });
    },2000)
  }
  dispatch({ type: "ADD_REVIEW", payload: "" });
};

export const add_review = payload => dispatch => {
  dispatch({ type: "ADD_REVIEW", payload: payload });
};
export const update_files = () => async dispatch => {
  console.log("UPDATE");
  let data = await getList();
  dispatch({ type: "UPDATE_FILES", payload: data });
};
export const add_file = payload => dispatch => {
  dispatch({ type: "ADD_FILE", payload: payload });
};
export const set_show_alert_success = payload => dispatch => {
  console.log("set_show_alert_success");
  
  dispatch({ type: "SET_SUCCESS", payload: payload });
};
export const set_show_alert_error = payload => dispatch => {
  console.log("set_show_alert_error");
  
  dispatch({ type: "SET_ERROR", payload: payload });
};
export const set_msg = payload => dispatch => {
  console.log("set_msg");
  
  dispatch({ type: "SET_MSG", payload: payload });
};
