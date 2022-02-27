import { call, takeLatest } from "redux-saga/effects";
import { postNote } from "../../api";
import actionTypes from "../actionTypes";

export function* postNoteWatcher() {
  yield takeLatest(actionTypes.ADD_NOTE, postNoteFlow);
}

function* postNoteFlow(action) {
  yield call(postNote, action.note);
}
