import { fork } from "redux-saga/effects";
import { deleteNoteWatcher } from "./deleteNoteSaga";
import { loadNotesWatcher } from "./loadNotesSaga";
import { postNoteWatcher } from "./postNoteSaga";
import { updateNoteWatcher } from "./updateNoteSaga";
export function* rootSaga() {
  yield fork(loadNotesWatcher);
  yield fork(postNoteWatcher);
  yield fork(updateNoteWatcher);
  yield fork(deleteNoteWatcher);
}
