const manageQuotes = (state = {quotes: []}, action)=> {

  switch (action.type) {
    case 'ADD_QUOTE':
      return {...state, quotes: [action.quote]}; 

    case 'REMOVE_QUOTE':

      return {};

    case 'UPVOTE_QUOTE':

      return {};

    case 'DOWNVOTE_QUOTE':
      
      return {};
  
    default:
      return state;
  } 
}

