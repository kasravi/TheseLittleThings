import React, { Component } from 'react';
import '../App.css';
import BottomNavigations from './BottomNavigations';
import List from './List';
import Dialog from './Dialog';
import ActionButton from './ActionButton';

export default class Page extends React.Component {
    constructor (props) {
      super(props)
      this.state = { data: 'test' }
    }
    render () {
      return (
        <div className="Page">
            <List/>
            <Dialog/>
            <ActionButton/>
            <BottomNavigations/>
        </div>
      )
    }
    onUpdate (data) { this.setState({ data }) }
  }

//   export default withStyles(styles)(InsetList);