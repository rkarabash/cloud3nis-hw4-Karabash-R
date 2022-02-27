import { call, takeLatest } from "redux-saga/effects";
import { updateNote } from "../../api";
import actionTypes from "../actionTypes";

export function* updateNoteWatcher() {
  yield takeLatest(actionTypes.UPDATE_NOTE, updateNoteFlow);
}

function* updateNoteFlow(action) {
  yield call(updateNote, action.note);
}
