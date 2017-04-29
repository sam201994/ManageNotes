import store from '../../redux/store';
import axios from 'axios';


export function searchNote(e) {

  const searchValue = e.target.value;
  console.log("searchValue: ", searchValue);
  store.dispatch({
    type: 'UPDATE_SEARCHVALUE',
    payload: {  searchValue }
  });

}
export function updateCurrentTag(e) {

  const tag = e.target.value;
    console.log("TAG INSIDE ACTION: ", tag)
  store.dispatch({
    type: 'UPDATE_CURRENTTAG',
    payload: {  tag }
  });
}

export function addTags(tag, id) {
  console.log("ADD TAG");
  console.log(tag, id);
  axios.put('/updateTag', {
    tag: tag,
    id: id
  })
  .then((res) => {
    if (res.data.success) {
      console.log("inside success after adding tag")
        getNotes();    
    } else {
      console.log("inside error after tagging");
        setError(res.data.error);
    }
  })
  .catch("ERROR");
}

export function deleteNote(id) {
  console.log("id client side: ", id)
  axios.delete('/deleteNote', {
     params: {
     id: id
  }
  })
  .then((res) => {
    console.log(res.data);
    if (res.data.success) {
      console.log("INSIED DELETE SUCCESS")
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
