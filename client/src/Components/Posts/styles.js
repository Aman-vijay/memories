// import  {makeStyles}  from '@material-ui/styles';

// export default makeStyles(() => ({
//   mainContainer: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   // smMargin: {
//   //   margin: theme.spacing(1),
//   // },
//   actionDiv: {
//     textAlign: 'center',
//   },
// }));
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
