import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Game1 } from '../../actions/profile';

// import React from 'react';
import './App.css';
import Game from '../../components/TicTacToe/Game';

function Game1() {
    return (
        <Game />
    );
}


export default connect(null, { Game1 })(withRouter(Game1));

