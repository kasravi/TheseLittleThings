import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const SimpleCard = (props) => {
  const { classes, data, myId} = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Card className={classes.card}>
        <CardContent>
          {data.id !== myId ? 
          <Typography className={classes.title} color="textSecondary">
            {data.id}
          </Typography> : null}
          <Typography variant="body1" component="p">
            {data.thing}
          </Typography>
          {data.keys ? <Typography  className={classes.pos} color="textSecondary">
          {data.keys.split(',').join(", ")}
          {/* {bull} */}
          </Typography> : null}
        </CardContent>
      </Card>
  );
}

SimpleCard = connect(
  (state) => ({
    myId: state.id,
})
)(SimpleCard)

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
