import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';

import {
  deleteTicket
} from '../actions/appActions.js';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTicket }, dispatch);
}

const Ticket = React.createClass({
  deleteTicket: function(event) {
    var deleteDiv = event.target;   
    var ticketContent = $(deleteDiv).parent().find(".ticketContent").html();
    this.props.deleteTicket(ticketContent);
  },
  render: function() {
    return (
      <div className="ticket">
        <div className="ticketContent">{this.props.ticket.content}</div>
        <div className="ticketDelete" onClick={this.deleteTicket}>Delete</div>
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
