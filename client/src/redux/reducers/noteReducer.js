const defaults = {
  error:'', 
  notes:{},
  currentNote: '',
  currentDiscription: '',
  currentTag: ''
};

export default function authReducer(state = defaults, action) {
  switch(action.type) {
    case 'UPDATE_ERROR': {
    	const newState = Object.create(state);
    	newState.error = action.payload.err;
      return newState;
    }
     case 'UPDATE_NOTELIST': {
    	const newState = Object.create(state);
    	newState.notes 	= action.payload.notes;
      return newState;
    }
    case 'UPDATE_CURRENTNOTE' : {
      const newState = Object.create(state);
      let a = action.payload.currentNote;
      newState.currentNote = a;
      newState.currentDiscription = newState.notes[a].discription;
      return newState;
    }
    case 'UPDATE_DISCRIPTION' : {
      const newState = Object.create(state);
      newState.currentDiscription = action.payload.name
      return newState;
    }
    case 'UPDATE_CURRENTTAG' : {
      const newState = Object.create(state);
      newState.currentTag = action.payload.tag
      return newState;
    }
  }
  return state;
};

//{...state} does'nt work. needs a loader;
