
import React, { Component } from 'react';
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';
import { View } from 'react-native';
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
  onButtonPress(){
    const { name, phone, shift } = this.props;

    this.props.employeeCreate( { name, phone, shift: shift || 'Monday' })
  }
  render() {

    const styles = {
      container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
      }
    }
    return (
      <View style={styles.container}>
        <Card>
          <EmployeeForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
            Create
            </Button>
          </CardSection>
        </Card>
      </View>
    )

  }
}

const styles = { 
  pickerText: {
    fontSize: 20, 
    paddingLeft: 20
  }
}
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift }
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);