import React, {useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote(newNote){
    setNotes( prevItems => {
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id){
    setNotes( prevNotes => {
     return prevNotes.filter( (note, index) => {
        return index !== id;      
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map( (note, index) =>{
        return ( 
          <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
          );
      })}
      <Footer />
    </>
  );
}

export default App;