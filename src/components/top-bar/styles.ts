import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    'display': 'flex', 
    'justifyContent': 'space-between'
  },
  navItem: {
    '&:hover': {
      'cursor': 'pointer',
      'alignItems': 'center',
    }
  }
})