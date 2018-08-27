import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import AddPerson from '@material-ui/icons/PersonAdd';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 8,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
  },
});

class ActionButton extends React.Component {
  
  render() {
    const { classes, page, theme, dispatch } = this.props;
    
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <AddIcon />,
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <AddIcon />,
      },
      {
        color: 'primary',
        className: classNames(classes.fab),
        icon: <AddPerson />,
      },
    ];

    

    return (
      <div>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={page === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${page === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Button variant="fab" onClick={()=>dispatch({type:'OPEN_DIALOG'})} className={fab.className} color={fab.color}>
              {fab.icon}
            </Button>
          </Zoom>
        ))}
      </div>
    );
  }
}

ActionButton = connect(
  (state) => ({
    page: state.page,
})
)(ActionButton)

ActionButton.contextTypes = {
  store: PropTypes.object,
}

export default withStyles(styles, { withTheme: true })(ActionButton);