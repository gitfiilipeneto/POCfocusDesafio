import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import pizza from './pizzas';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black',
 
    
  },
  gridList: {
    width: '100vw',
    height: 'auto',
    margin: '20px;',
    [theme.breakpoints.up('md')]: {
       
        width:'80vw'
      },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  text:{
      color: 'white'
  }
}));

export default function OurPizzas() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <h1 component="div" className={classes.text}>NOSSO CARÁPIO</h1>
        </GridListTile>
        {pizza.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.sabor} />
            <GridListTileBar
              title={tile.sabor}
              subtitle={<span>{tile.ingredientes}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.sabor}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}