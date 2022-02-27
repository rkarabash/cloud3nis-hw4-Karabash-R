import actionTypes from "../actionTypes";

const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE: {
      const notes = [...state.notes];
      if (notes.length < 1) {
        notes.push({
          id: notes.length,
          ...action.note,
        });
      } else {
        notes.push({
          id: notes[notes.length - 1].id + 1,
          ...action.note,
        });
      }
      return {
        notes,
      };
    }
    case actionTypes.UPDATE_NOTE: {
      const { index, note } = action;
      const notes = [...state.notes];
      notes[index] = note;
      return {
        notes,
      };
    }
    case actionTypes.DELETE_NOTE: {
      const { index, id } = action;
      const notes = [];
      state.notes.forEach((note, i) => {
        if (index !== i) {
          notes.push(note);
        }
      });
      return {
        notes,
      };
    }
    case actionTypes.SET_NOTES: {
      const notes = action.notes;
      return {
        notes,
      };
    }
    default:
      return state;
  }
};
