import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {

  },
  subheader: {
    width: '100%',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function SamplePortfolio(props) {
  const { classes } = props;

  return (
    <div className="container">
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={4}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={require("../../images/"+tile.img)} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

SamplePortfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SamplePortfolio);