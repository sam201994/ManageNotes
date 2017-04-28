import store from '../../redux/store';
import axios from 'axios';

export function addNote (e) {
  
  e.preventDefault();
  const name = e.target.querySelector('[name="myNote"]').value;
  console.log("INSIDE ADD NOTE ACTIONS: ", name);
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
    console.log("notes: ", notes)
    store.dispatch({
      type: 'UPDATE_NOTELIST',
      payload: { notes }
    });
  })
  .catch("ERROR");
}
getNotes();


export function setError (err) {
    store.dispatch({
      type: 'UPDATE_ERROR',
      payload: { err }
    });
}
