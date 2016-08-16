import {
  ADD_TICKET,
  DELETE_TICKET,
  GET_TICKETS,
  LOAD_TICKETS,
  RX_TICKETS
} from '../constants/appConstants.js';

import Api from '../util/api.js';

export function addTicket(content) {
  return function(dispatch) {
    Api.addTicket(content, function(data) {
      dispatch(loadTickets());
    });
  };
}

// TODO: delete by Id - not content
export function deleteTicket(content) {
  return function(dispatch) {
    Api.deleteTicket(content, function(data) {
      dispatch(loadTickets());
    });
  }
}

export function getTickets() {
  return {
    type : GET_TICKETS
  }
}

export function loadTickets() {
  return function(dispatch) {
    dispatch(getTickets());
    Api.getTickets(function(tickets) {
      dispatch(recieveTickets(tickets));
    });
  };
}

export function recieveTickets(tickets) {
  return {
    type: RX_TICKETS,
    tickets: tickets
  };
}
