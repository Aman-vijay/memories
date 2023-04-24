import React ,{useEffect,useState} from 'react';
import { Container,AppBar,Typography,Grow,Grid } from '@mui/material';
import './App.css';
import memories from './Images/memories.png'
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux'; //Hook1
import {getPosts} from './actions/posts'
function App() {
  const [currentId,setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);
  return (
   <Container maxWidth= "lg">
    <AppBar className =   {classes.appBar} position='static' color='inherit'>
      <Typography  className={classes.heading} variant='h2' align='center'>Memories</Typography>
      <img className = {classes.image } src = {memories} alt = "memory" height="30"/>
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify = "space-between " alignItems="strech" spacing ={3} >
           <Grid item xs = {12} sm = {6}>
            <Posts/>
           </Grid>
           <Grid item xs = {12} sm = {4}>
            <Form currentId={currentId}/>
           </Grid>
        </Grid>
      </Container>
    </Grow>
   </Container>
  );
}

export default App;
