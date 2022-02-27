import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteItem from "./NoteItem";
import noteActions from "../redux/actions/noteActions";
import inputActions from "../redux/actions/inputActions";
import "./NotesSection.style.scss";

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  console.log(notes);
  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setId(item.id));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  };

  if (notes.length === 0) {
    dispatch(noteActions.loadNotes());
    return (
      <div className="NotesSection__container__empty">
        <p>Здесь будут ваши заметки, а пока что их нет...</p>
      </div>
    );
  }

  return (
    <div className="NotesSection__container">
      {notes.map((item, index) => {
        if (item) {
          return (
            <NoteItem
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;
