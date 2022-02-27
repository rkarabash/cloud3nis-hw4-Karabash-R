import actionTypes from "../actionTypes";

export default {
  addNote: (note) => ({
    type: actionTypes.ADD_NOTE,
    note,
  }),
  updateNote: (index, note) => ({
    type: actionTypes.UPDATE_NOTE,
    index,
    note,
  }),
  deleteNote: (index, id) => ({
    type: actionTypes.DELETE_NOTE,
    index,
    id,
  }),
  setNotes: (notes) => ({
    type: actionTypes.SET_NOTES,
    notes,
  }),
  loadNotes: () => ({
    type: actionTypes.LOAD_NOTES,
  }),
};
