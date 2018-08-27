import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import actionTypes from '../reducers/constants'
import chrono from 'chrono-node'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowForward from '@material-ui/icons/ArrowForward';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      position: 'fixed',
    bottom: '60px',
    right: '20px',
    },
  });

const FormDialog = ({open, page, id, newThing, dispatch}) => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={()=>dispatch({type:actionTypes.CLOSE_CLEAR_DIALOG})}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{getTitle(id, page)}</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              multiline
              rows={page===2?"1":"4"}
              id="thing"
              type="text"
              value={newThing.thing}
              onChange = {(e)=>dispatch({type:actionTypes.DIALOG_THING_CHANGE, payload: e.target.value})}
              fullWidth
            />
            {page===2 && id?null:<TextField
              margin="dense"
              id="data"
              placeholder={getDataPlaceHolder(page)}
              value={newThing.data}
              onChange = {(e)=>dispatch({type:actionTypes.DIALOG_DATA_CHANGE, payload: e.target.value})}
              type={!id?"password":"text"}
              fullWidth
            />}
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button> */}
            <Button onClick={()=>dispatch({type:id?actionTypes.CLOSE_DIALOG:actionTypes.CHANGE_ID})} color="primary">
              <ArrowForward/>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

function getDataPlaceHolder(page) {
  if(page === 0) {
    return 'Yesterday';
  }
  if(page===1) {
    return 'Food, Hobby';
  } else {
    return 'Password';
  }
}
  function getTitle(id, page) {
    if(!id){
      return "Register";
    }
    if(page === 0){
      return "One More Little Thing";
    } else if (page === 1) {
      return "Things For The Future";
    } else {
      return "Name Of A Loved One"
    }
  }

  FormDialog = connect(
    (state) => ({
      open: state.dialog,
      newThing: state.newThing,
      page: state.page,
      id: state.id
  })
  )(FormDialog)

export default withStyles(styles)(FormDialog);