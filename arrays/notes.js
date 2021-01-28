const notes = [
  { title: "My next trip", body: "I would like to go to Spain" },
  { title: "Habits to work on", body: "Work out, eat well" },
  {
    title: "home renovation",
    body: "Replace carpeting and downstairs flooring",
  },
];

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };
// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};
console.log(findNotes(notes, "Work Out"));
// const note = findNote(notes, "Home renovation");
// console.log(note);

// console.log(notes.length);
// console.log(notes);
// // console.log(notes.indexOf({}));
// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === "My next trip";
// });
// console.log(index);
