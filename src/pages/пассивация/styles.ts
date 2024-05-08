import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-evenly",
    margin: '10px',
  },
  navItem: {
    display: 'flex', 
    justifyContent: 'space-evenly', 
    alignContent: 'center', 
    padding: '10px', 
    columnGap: '10px'
  }
})