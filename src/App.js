import {Fragment, useEffect,useState} from 'react'
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Mycard from './Components/Mycard'
import getMatches from './api/Api'
import {Grid} from '@material-ui/core'

function App() {
  const [matches,setMatches] =useState([])

  useEffect(()=>{
     getMatches()
     .then((data)=>setMatches(data.matches)).catch(error => alert("could not load Data"));
  },[])
  return (
    <div className="App">
    <Navbar />
     <h1>Welcome to live score</h1>
    <Grid container>
      <Grid sm="2"></Grid>
      <Grid item sm="8">
      { matches.map((match)=>(
        <Fragment key={match.unique_id}>
        {match.type==="Twenty20" ?(
      <Mycard key={match.unique_id} match={match} />
        ):(
          ""
        )}
      </Fragment>
    ))};
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
