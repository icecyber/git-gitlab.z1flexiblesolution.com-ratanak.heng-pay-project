import React, { Component } from 'react';
import {Container,Form} from 'react-bootstrap'
import {LOGO_APP} from '../Data/fixdata';
import { Link, Redirect } from 'react-router-dom';
import {} from '@material-ui/core'
export default class sigup extends Component {
  constructor(props){
    super(props);
    this.state={
        new_user:false
    }
  }
  //CHECK NUMBER PHONE FORMAT
  Check_Phone_Number_Format=(got_number_phone)=>{
      var phone_number_format=/^0([126789][012456789]){1}?[0-9]{3}?[0-9]{3,4}$/;
      if((got_number_phone.value.match(phone_number_format))){
          this.props.userLoginSMS(phone_number_format.value);
    
      }
      else if((got_number_phone.value.match(!phone_number_format)||got_number_phone==="")){
        alert("No have input");
      }
      else alert("Not True");
  }
  render() {
    return (
            <div className="login_page_font">
               <Container style={{textAlign:'center'}}>
                    <a href='/'>Go Login</a>
                    <h1>Signup</h1>
               </Container>
            </div>
    );
  }
}
