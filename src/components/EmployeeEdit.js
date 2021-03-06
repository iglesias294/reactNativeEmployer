import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'
import _ from 'lodash'
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm'
import { connect } from 'react-redux'
import {View} from 'react-native'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'



class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount(){
    _.each(this.props.employee, (value, prop ) => {
      this.props.employeeUpdate( {prop, value });
    });
  }
  onButtonPress(){
    const{ name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid})
  }
  onTextPress(){
    const { phone, shift} = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
    
  }
  onAccept(){

    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });

  }
  onDecline(){
    this.setState({ showModal: !this.state.showModal })
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
      <Card>
        <EmployeeForm />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}> Text Schedule</Button>
          </CardSection>
          <CardSection>

            <Button onPress={() => this.setState({ showModal: !this.state.showModal})}>Terminate</Button>

          </CardSection>

          <Confirm 
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to terminate this? 
          </Confirm>

      </Card>
      
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);