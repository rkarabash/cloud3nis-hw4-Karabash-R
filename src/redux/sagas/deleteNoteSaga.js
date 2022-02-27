import { call, takeLatest } from "redux-saga/effects";
import { deleteNote } from "../../api";
import actionTypes from "../actionTypes";

export function* deleteNoteWatcher() {
  yield takeLatest(actionTypes.DELETE_NOTE, deleteNoteFlow);
}

function* deleteNoteFlow(action) {
  yield call(deleteNote, action.id);
}
