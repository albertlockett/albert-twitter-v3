import $ from 'jquery';

const config = {
  protocol: "http",
  host: "localhost",
  port: 3000
}

function getUrl(path) {
  return `${config.protocol}://${config.host}:${config.port}/${path}`;
}


export function addTicket(content, callback) {
  $.ajax({
    url: getUrl("addTicket"),
    type: "POST",
    data: { content: content }
  }).done(callback);
}

export function deleteTicket(content, callback) {
  $.ajax({
    url: getUrl("deleteTicket"),
    type: "POST",
    data: { content, content}
  }).done(callback);    
} 

export function getTickets(callback) {
  $.ajax({
    url:  getUrl("tickets"),
    type: "GET"
  }).done(callback);
}


export default {
  addTicket,
  deleteTicket,
  getTickets
}
