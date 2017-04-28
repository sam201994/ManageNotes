const defaults = {
  error:'', 
  notes:{}
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
  }
  return state;
};

//{...state} does'nt work. needs a loader;
