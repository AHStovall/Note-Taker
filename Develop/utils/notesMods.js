const fs = require('fs');
const { truncate } = require('fs/promises');
const path = require('path');

function createNewNote(body, notesArray) {
    const note=body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({notesArray}, null, 2)
    );
    return note;
}

function deleteNote(id, notes) {
    let notesArray = notes.filter(e => {
        if (e.id == id) {
            return false
        } else {
            return truncate
        }
    })

    let index = 0;
    notesArray.forEach(note => {
        note.id = index;
        index += 1;
    });

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notesArray}, null, 2)
    );
    return notesArray;
}

module.exports = {createNewNote, deleteNote};