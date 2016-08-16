import {
  GET_TICKETS,
  LOAD_TICKETS,
  RX_TICKETS
} from '../constants/appConstants.js';

const initialState = {
  tickets: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case RX_TICKETS:
      return Object.assign({}, state, { tickets: action.tickets });
    case LOAD_TICKETS:
    case GET_TICKETS:
    default:
      return state;
  }
}
