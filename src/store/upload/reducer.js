const stateUpload = {
  files: [],
  url_review: "",
  url_upload:{}
};

export const uploadReducer = (state = stateUpload, action) => {
  switch (action.type) {
    case "UPDATE_FILES":
      return (state = { ...state, files: action.payload });
    case "UPLOAD_FILE":
      return state;
    case "ADD_FILE":
        console.log( action.payload);
        return (state = { ...state, url_upload: action.payload });
      // state.url_upload.append("file", action.payload);
      console.log(state);
      
      return state
    case "ADD_REVIEW":
      return (state = { ...state, url_review: action.payload });
    default:
      return state;
  }
};
