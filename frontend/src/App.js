import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Imports Axios to define DB depending on enviroment
import axiosClient from './config/axios';

// Imports components
import Patients from './components/Patients';
import NewRecord from './components/NewRecord';
import Record from './components/Record';




function App() {
  // Sets states for the app
  const [records, saveRecords] = useState([]);
  const [refresh, saveRefresh] = useState(true);

  
  // Defines what to do when a React component is reloaded
  useEffect(() => {
    if (refresh) {
      const apiInit = () => {
        axiosClient.get('/patients')
        .then(res => {
          // set response as state
          saveRecords(res.data);
          // Disabes refresh state
          saveRefresh(false);
        }
        ).catch(error => {
          console.log(error);
        })
      }
      apiInit();
    } 
  }, [refresh] );

  return (
    <Router>
      <Switch>

        <Route exact path="/" component={() => <Patients records={records}/>}/>

        <Route exact path="/new" component={() => <NewRecord saveRefresh={saveRefresh}/>}/>

        <Route exact 
               path="/records/:id" 
               render={(props) => {
                 const record = records.filter(record => record._id === props.match.params.id)
                 return (
                   <Record
                      record = {record[0]}
                      saveRefresh={saveRefresh}
                   />
                 )
               }}/>
        
      </Switch>
    </Router>
  );
}

export default App;
