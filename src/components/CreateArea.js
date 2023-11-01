import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';

function CreateArea(props) {
    const [expanded, setExpanded] = useState(false);
    function handelExpand(){
      setExpanded(true);
    }

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    }); 
    
    function handleChange(event){
        const { name, value } = event.target;

        setInputText( prevItems => {
            return { 
                ...prevItems,
                [name]: value
            };
        });
    }

    function handleAddNote(event){
        props.onAdd(inputText);
        setInputText({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        {expanded && <input autoFocus name="title" placeholder="Title" onChange={handleChange} value={inputText.title}/>}
        <textarea name="content"  onClick={handelExpand} placeholder="Take a note..." rows={expanded ? "3" : "1"} onChange={handleChange} value={inputText.content}/>
        <Zoom in={expanded}>
          <Fab onClick={handleAddNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
