import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <div><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></div>
        <div><NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink></div>
        <div>
            <button onClick = {startLogout}>
                Logout
            </button>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);