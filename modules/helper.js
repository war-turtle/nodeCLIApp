var fs = require('fs');

var fetchData = () => {
  try{
    var notes = fs.readFileSync('notes.json');
    var notes = JSON.parse(notes);
  } catch(e) {
    var notes = [];
  }

  return notes;
};

var saveData = (notes, note) => {

  var notesString = JSON.stringify(notes);

  fs.writeFileSync('notes.json',notesString);
  
};

module.exports.addNote = (title, body) => {

  var notes = fetchData();

  var note = {title, body};

  var notes = notes.filter((note) => {
    if(note.title !== title){
      return true;
    } else {
      return false;
    }
  });

  notes.push(note);

  saveData(notes);

};

module.exports.listNote = () => {
  var notes = fetchData();
  notes = JSON.stringify(notes);
  console.log(notes);
}

module.exports.removeNote = (title) => {
  var notes = fetchData();

  notes = notes.filter((note) => {
    return title !== note.title;
  });

  saveData(notes);
}
