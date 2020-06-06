import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import logo from "./assets/ac_logo_24.png";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: "10vh",
    padding: 0,
  },

}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation position="sticky" value={value} onChange={handleChange} className={classes.root} showLabels>
      {/* change href to be a relative link */}
      <BottomNavigationAction target="_blank" rel="noopener" href="https://www.abovecurve.com/" alt="Above Curve Homepage" icon={<img src={logo} alt="Above Curve" data-testid="ac-logo"></img>}>
      </BottomNavigationAction>
    </BottomNavigation>
  );
}