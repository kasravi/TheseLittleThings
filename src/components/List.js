import React from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import chrono from 'chrono-node'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from './Card';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  
});

class InsetList extends React.Component {
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type:'LOAD_THINGS', payload: {date:'yesterday'}});
  }

  render() {
    const {classes, things, myId, page, dispatch} = this.props;
    return (
      <div className={classes.root}>
      <div className={classNames(classes.margin, classes.textField)}>
        <TextField 
          id="date"
          onChange={()=>dispatch({type:'FILTER_CHANGED'})}
          fullWidth
          label={getLabel(page)}
          />
        </div>
        <List component="nav">
          {things.filter(getFilter(myId,page)).map(l=>
            <ListItem button>
              <Card data = {l}/>
            </ListItem>
            )
          }
        </List>
        </div>
    )
  }
}

const getFilter = function(id,page) {
  if(page === 0) {
    return (t) => t.id === id && t.isaThing 
  } else if (page === 1) {
    return (t) => t.isaDream
  } else {
    return (t) => t.id !== id
  }
}

const getLabel = function (page){
   if(page === 0){
     return "When?";
   } else if (page === 1){
    return "What?";
  } else {
    return "Who?";
  } 
}

InsetList = connect(
  (state) => ({
    date: state.date,
    things: state.things,
    myId: state.id,
    page: state.page
})
)(InsetList)

export default withStyles(styles)(InsetList);