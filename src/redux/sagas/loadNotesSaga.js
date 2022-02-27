import { call, put, takeLatest } from "redux-saga/effects";
import { getNotes } from "../../api";
import noteActions from "../actions/noteActions";
import actionTypes from "../actionTypes";

export function* loadNotesWatcher() {
  yield takeLatest(actionTypes.LOAD_NOTES, loadNotesFlow);
}

function* loadNotesFlow() {
  const notes = yield call(getNotes);
  yield put(noteActions.setNotes(notes));
}
