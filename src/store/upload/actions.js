import axios from "axios";

const getList = async() =>{
  let res = await axios.get("https://testcheckfiletype.herokuapp.com/list");
  return res.data.list
}

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
  
  
    if(res.data.message == "file uploaded"){
      // alert(res.data.message);
    }
    let data = await getList()

    dispatch({ type: "UPDATE_FILES", payload: data});
};

export const add_review = payload => dispatch => {
  dispatch({ type: "ADD_REVIEW", payload: payload });
};
export const update_files = () => async dispatch => {
  console.log("UPDATE");
let data = await getList()
  dispatch({ type: "UPDATE_FILES", payload: data });
};
export const add_file = payload => dispatch => {
  dispatch({ type: "ADD_FILE", payload: payload });
};
