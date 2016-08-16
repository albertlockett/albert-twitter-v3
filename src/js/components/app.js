import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Api from '../util/api.js';

import Header from './header.js';
import TicketForm from './ticketForm.js';
import TicketList from './ticketList.js';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="appBody">
          <TicketForm />
          <TicketList />
        </div>
      </div>
    );
  }
});

export default App;
