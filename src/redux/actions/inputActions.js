import actionTypes from "../actionTypes";

export default {
  setInputTitle: (title) => ({
    type: actionTypes.SET_INPUT_TITLE,
    title,
  }),
  setInputContent: (content) => ({
    type: actionTypes.SET_INPUT_CONTENT,
    content,
  }),
  setId: (uid) => ({
    type: actionTypes.SET_ID,
    uid,
  }),
  setInputId: (id) => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  }),
};
