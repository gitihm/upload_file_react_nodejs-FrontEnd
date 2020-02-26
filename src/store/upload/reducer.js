const stateUpload = {
  files: [],
  url_review: "",
  url_upload: {},
  status_success: false,
  status_error: false,
  message: {
    detail: "",
    text: ""
  }
};

export const uploadReducer = (state = stateUpload, action) => {
  switch (action.type) {
    case "UPDATE_FILES":
      return (state = { ...state, files: action.payload });
    case "UPLOAD_FILE":
      return state;
    case "ADD_FILE":
      return (state = { ...state, url_upload: action.payload });
    case "ADD_REVIEW":
      return (state = { ...state, url_review: action.payload });
    case "SET_SUCCESS":
      return (state = { ...state, status_success: action.payload });
    case "SET_ERROR":
      return (state = { ...state, status_error: action.payload });
    case "SET_MSG":
      return (state = { ...state, message: action.payload });
    default:
      return state;
  }
};
