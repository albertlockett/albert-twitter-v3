import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Ticket from './ticket';

import {
  loadTickets
} from '../actions/appActions.js';

function mapStateToProps(state) {
  return {
    tickets : state.tickets
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadTickets }, dispatch);
}

const TicketList = React.createClass({
  componentDidMount: function() {
    this.props.loadTickets();
  },
  render: function() {
    var tickets = this.props.tickets.map( (ticket, index) => {
      return <Ticket key={index} ticket={ticket} />
    });
    return (
      <div id="ticketList">
        {tickets}       
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
