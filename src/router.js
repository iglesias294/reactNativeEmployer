import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


export default class RouterComponent extends React.Component {
  render() 
  {return (    <Router>
      <Scene key="root">
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main"> 
          <Scene 
          rightTitle="Add"
          onRight={ () => Actions.employeeCreate() }
          key="employeeList" 
          component={EmployeeList} 
          title="Employees"
          initial 
          />

           
        </Scene>
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" ></Scene>   
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" ></Scene> 
      </Scene>
    </Router>
  
  )}

  
};
