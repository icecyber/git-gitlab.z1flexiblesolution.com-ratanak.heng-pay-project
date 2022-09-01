import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap'
import logo from '../assets/media.png'
import ios from '../assets/ios.png'
import phoneA from '../assets/phoneA.png'
import pay1 from '../assets/pay1.png'
import pay3 from '../assets/pay3.png'
import appStore from '../assets/n5.png'
import playStore from '../assets/n6.png'

import i from '../fontawesom/css/all.min.css'

import { Link, Redirect } from 'react-router-dom';
import { } from '@material-ui/core'
import '../styles/notfound.css';


export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_user: false
    }
  }
  //CHECK NUMBER PHONE FORMAT
  Check_Phone_Number_Format = (got_number_phone) => {
    var phone_number_format = /^0([126789][012456789]){1}?[0-9]{3}?[0-9]{3,4}$/;
    if ((got_number_phone.value.match(phone_number_format))) {
      this.props.userLoginSMS(phone_number_format.value);

    }
    else if ((got_number_phone.value.match(!phone_number_format) || got_number_phone === "")) {
      alert("No have input");
    }
    else alert("Not True");
  }
  render() {
    return (

      <div class="container-fulid">
        <div class="leader">


          <div class="box1">

            <img class="img" src={ios} alt="Girl in a jacket" />
          </div>
          <div class="box2">
            <div class="box-b">
              <img src={pay1} alt="Girl in a jacket" width="270" height="70" />
              <div class="text">

                <h1>Welcome to Pay Already</h1>
                <p> Make your payment more easy
                  and convenient
                </p>

              </div>
              <div class="pic">
                <a href="https://testflight.apple.com/join/BbTdkLrF">
                  <img class="appStore " src={appStore} alt="Girl in a jacket" width="50%" />
                </a>
                <a href="https://amatakpayapi.amatak.net/app/download/payalready.apk" target="_blank">
                  <img class="pay" src={playStore} alt="Girl in a jacket" width="50%" />
                </a>

              </div>
            </div>






          </div>






        </div>
        <div class="leader">


          <div class="box1">

            {/* <img class="img" src={ios} alt="Girl in a jacket" /> */}
            <img class="img" src={phoneA} alt="Girl in a jacket" width="330" height="580" />
          </div>
          <div class="box2">
            <div class="box-b">
              <img src={pay3} alt="Girl in a jacket" width="270" height="70" />
              <div class="text">

                <h1>Welcome to Pay Already</h1>
                <p> Make your payment more easy
                  and convenient
                </p>

              </div>
              <div class="pic">
                <a href="https://testflight.apple.com/join/BbTdkLrF">
                  <img class="appStore " src={appStore} alt="Girl in a jacket" width="50%" />
                </a>
                <a href="https://amatakpayapi.amatak.net/app/download/payalready.apk" target="_blank">
                  <img class="pay" src={playStore} alt="Girl in a jacket" width="50%" />
                </a>

              </div>
            </div>






          </div>






        </div>
      </div>



    );
  }
}

