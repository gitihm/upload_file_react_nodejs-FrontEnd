import axios from "axios";

export const upload_file = payload => async dispatch => {
  console.log(payload);

  let formData = new FormData();
  
  formData.append("file", payload);
  console.log(formData);

  let res = await axios.post(
    "https://testcheckfiletype.herokuapp.com/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  alert(res.data.message);
  //   dispatch({ type: "UPLOAD_FILE", payload: payload });
};

export const add_review = payload => dispatch => {
  dispatch({ type: "ADD_REVIEW", payload: payload });
};
export const update_files = () => async dispatch => {
  let res = await axios.get("https://testcheckfiletype.herokuapp.com/list");
  dispatch({ type: "UPDATE_FILES", payload: res.data.list });
};
export const add_file = payload => dispatch => {
  dispatch({ type: "ADD_FILE", payload: payload });
};
