import './App.css';
import React, { useState, useEffect } from 'react';
import Traininglist from './components/Traininglist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Customerlist from './components/Customerlist';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import PortraitIcon from '@material-ui/icons/Portrait';
import DateRangeIcon from '@material-ui/icons/DateRange';
import IconButton from '@material-ui/core/IconButton';
import BarChartIcon from '@material-ui/icons/BarChart';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { BrowserRouter as Router, Switch, Route, Link }
  from "react-router-dom";
import Calendar from './components/Calendar';
import Statistics from './components/Statistics';


function App() {

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  const [state, setState] = React.useState(false)

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();



  const list = () => (
    <div>
      <Link className="text-link" to="/customerlist">
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<PortraitIcon />}
        > Customers
    </Button>
      </Link>{' '}
      <br />
      <Link className="text-link" to="/traininglist">
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<SportsKabaddiIcon />}
        > Trainings
    </Button>
      </Link>{' '}
      <br />
      <Link className="text-link" to="/calendar">
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<DateRangeIcon />}
        > Calendar
    </Button>{' '}
      </Link>
      <br />
      <Link className="text-link" to="/Statistics">
        <Button
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<BarChartIcon />}
        > Statistics
    </Button>{' '}
        <br />
      </Link>
    </div>







  )

  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <FormatListBulletedIcon />
            </IconButton>
            <Drawer
              anchor={'left'}
              open={state}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
            <Typography variant="h6">
              PersonalTrainer
          </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" render={() => <h2>This is Personal Trainer app!</h2>} />
          <Route path="/customerlist" component={Customerlist} />
          <Route path="/traininglist" component={Traininglist} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/Statistics" component={Statistics} />
          <Route path="*" render={() => <h2>Error! Page not  found!</h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
