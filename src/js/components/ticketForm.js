import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';

import {
  addTicket 
} from '../actions/appActions.js';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTicket }, dispatch);
}

const TicketForm = React.createClass({
  addTicket: function(event) {
    var ticketContent = $("#ticketInput").val();
    this.props.addTicket(ticketContent);
    $("#ticketInput").val("");
  }, 
  render: function() {
    return (
      <div id="ticketForm">
        <div id="ticketInputContainer">
          <textarea id="ticketInput" maxLength="140"></textarea>
        </div>
        <div id="ticketButtonContainer">
          <button ref="ticketButton"
                  id="ticketButton" 
                  onClick={this.addTicket}>
            Submit
          </button>
        </div>
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
