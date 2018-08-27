import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SentimentSatisfiedSharp from '@material-ui/icons/SentimentSatisfiedSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';

const styles = {
  root: {
    position: 'fixed',
    width: '100%',
    bottom: '0',
    left: '0'
  },
};

class SimpleBottomNavigation extends React.Component {
  render() {
    const { classes, page, dispatch } = this.props;
    
    return (
      <BottomNavigation
        value={page}
        onChange={(e,v)=>dispatch({type:'NAVIGATE', payload:{page: v}})}
        className={classes.root}
      >
        <BottomNavigationAction icon={<SentimentSatisfiedSharp />} />
        <BottomNavigationAction icon={<FavoriteIcon />} />
        <BottomNavigationAction icon={<PeopleIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation = connect(
  (state) => ({
    page: state.page,
})
)(SimpleBottomNavigation)

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);