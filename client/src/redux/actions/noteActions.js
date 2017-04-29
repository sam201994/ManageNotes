import store from '../../redux/store';
import axios from 'axios';

export function deleteNote(id) {

  axios.delete('/deleteNote', {
    id: id
  })
  .then((res) => {
    console.log(res.data);
    if (res.data.success) {
        getNotes();    
    } else {
        setError(res.data.error);
    }
  })
  .catch("ERROR");
}

export function updateDiscription(e) {

  const name = e.target.value;
  store.dispatch({
    type: 'UPDATE_DISCRIPTION',
    payload: {  name }
  });
}

export function saveUpdated(disp, id,name) {

  axios.put('/updateNote', {
    discription: disp,
    id: id
  })
  .then((res) => {
    if (res.data.success) {
        getNotes();    
    } else {
        setError(res.data.error);
    }
  })
  .catch("ERROR");
}

export function updateCurrentNote(currentNote) {

  store.dispatch({
    type: 'UPDATE_CURRENTNOTE',
    payload: { currentNote : currentNote }
  });
}

export function addNote (e) {
  
  e.preventDefault();
  const name = e.target.querySelector('[name="myNote"]').value;
  axios.post('/createNote', {
      name: name,
  })
  .then((res) => {
    if (res.data.success) {
        getNotes();    
    } else {
        setError(res.data.error);
    }
  })
  .catch("ERROR");
}

export function getNotes () {
 
  axios.get('/getNotes')
  .then((res) => {
    const notes = res.data.notes;
    store.dispatch({
      type: 'UPDATE_NOTELIST',
      payload: { notes }
    });
  })
  .catch("ERROR");
}

export function setError (err) {
  store.dispatch({
    type: 'UPDATE_ERROR',
    payload: { err }
  });
}
