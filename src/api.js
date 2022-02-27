export const getNotes = async () => {
  return fetch("http://localhost:3000/notes").then((res) => res.json());
};

export const postNote = async (note) => {
  return fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(note),
  }).then((res) => res.json);
};

export const updateNote = async (note) => {
  console.log(note);
  return fetch("http://localhost:3000/notes/" + note.uid, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(note),
  }).then((res) => res.json);
};

export const deleteNote = async (index) => {
  return fetch("http://localhost:3000/notes/" + index, {
    method: "DELETE",
  }).then((res) => res.json);
};
