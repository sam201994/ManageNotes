import store from '../../redux/store';
import axios from 'axios';

export function updateDiscription(e) {
    
      //e.preventDefault();
      //console.log("here: ",name);
      // const discription = e.target.disp.value;
      const name = e.target.value;
      console.log("-----------------",e.target.value);

        // axios.post('/updateNote', {
        //     discription: discription,
        //     name: 
        // })
        // .then((res) => {
        //   if (res.data.success) {
        //       getNotes();    
        //   } else {
        //       setError(res.data.error);
        //   }
        // })
        // .catch("ERROR");
    store.dispatch({
      type: 'UPDATE_DISCRIPTION',
      payload: {  name }
    });

}
export function saveUpdated(disp, id,name) {

      console.log("-----------------",disp, "----",id);


        axios.put('/updateNote', {
            discription: disp,
            id: id
        })
        .then((res) => {
          if (res.data.success) {
              getNotes();    
              updateCurrentNote(name)
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
