import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {LOGO_SMALL_APP,ICON_SEARCH} from '../Data/fixdata';
import {Row,Col,Button,InputGroup,Navbar,Nav,NavDropdown,Form} from 'react-bootstrap';
import {CardTravel,Search} from '@material-ui/icons'
import {Input,IconButton,FormControl,InputLabel,InputAdornment,OutlinedInput} from '@material-ui/core'
import { Link } from 'react-router-dom';
import {DefualSlide} from '../Data/Data'
import { APP_REFRESH, APP_WILL_REFRESH } from '../modules/app/reducer';
import {store} from '../store'
import '../Style/font.css';
import '../Style/Component/Navigation.css';
export default class MainNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        if (window.performance) {
          if (performance.navigation.type == 1) {
            store.dispatch({ type: APP_REFRESH });
          }
        }
      }
      componentDidMount(){
        window.onbeforeunload = function() {
          store.dispatch({ type: APP_WILL_REFRESH })
          return ;
        }
      }

render(){
    return(
        <div className="navigation_font">
            <Navbar  expand="md" fixed="top" style={{textAlign:'center'}} className="backgroun_navigation">
                <Navbar.Brand href="/">
                    <img src={LOGO_SMALL_APP} id="image_logo_small"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="btn_menu"/>
                <Navbar.Collapse id="basic-navbar-nav" className="md-auto" >    
                <FormControl id="input_search_navigation">
                        <InputLabel>ស្វែងរកទំនិញ</InputLabel>
                        <Input style={{width:'100%'}}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <Search/>
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                <Nav className="mr-auto">
                    <Link to={'/AddToCart'}>
                        <button id="btn_Cart_navigation">
                            កន្ត្រកទំនិញ​​<CardTravel id="iconCart"/>
                        </button>
                     </Link>
                </Nav>      
                <Nav className="ml-auto">
                <Link to="/">
                    <button id="btn_login_user">
                        <img src="https://i.ibb.co/RCjg4KR/icon-Login.png" id="icon_loing_in_nav"/>
                        <br/>
                        <label id="lbl_show_name_user">Rith</label>
                    </button>
                </Link></Nav> 
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}




    // render() {
    //     return (
    //         <div>
    //             <div>
    //             <Navbar expand="lg" fixed="top"  style={{padding:0}}>
    //             <Row className="Navbar">
                    
    //                 <Col sm={3} className="imgLogo">
    //                     <Link to={'/'}><img src={DefualSlide.LogoWebsite}></img></Link>
                        
    //                 </Col>
    //                 <Col sm={6} className="search">
    //                     <InputGroup className="mb-3 backSearch">
    //                         <FormControl id="txtSearch" placeholder="ស្វែងរកទំនិញ"/>
    //                         <InputGroup.Append >
                            
    //                             <Button id="btnSearch" >
    //                                 <SearchOutlined id="iconSearch"/>
    //                             </Button>
                            
    //                         </InputGroup.Append>
    //                     </InputGroup>
    //                 </Col>
    //                 <Col sm={3} className="cart">
    //                 <Link to={'/AddToCart'}>
    //                     <Button id="btnCart">
    //                         <h3>កន្ត្រកទំនិញ​ <CardTravel className="iconCart"/>​</h3>
    //                     </Button>
    //                 </Link>
                    
    //                 </Col>
    //             </Row>            
    //             </Navbar>
    //             </div>
                
    //             {/*NavBar the same */}
    //             <div>
    //             <Navbar expand="lg" style={{padding:0}}>
    //             <Row className="Navbar">
    //                 <Col sm={3} className="imgLogo">
    //                     <img src={DefualSlide.LogoWebsite}></img>
    //                 </Col>
    //                 <Col sm={6} className="search">
    //                     <InputGroup className="mb-3 backSearch">
    //                         <FormControl id="txtSearch" placeholder="ស្វែងរកទំនិញ"/>
    //                         <InputGroup.Append >
    //                         <InputGroup.Text >
    //                             <Button id="btnSearch" >
    //                                 <SearchOutlined className="iconSearch"/>
    //                             </Button>
    //                         </InputGroup.Text>
    //                         </InputGroup.Append>
    //                     </InputGroup>
    //                 </Col>
    //                 <Col sm={3} className="cart">
    //                 <Button id="btnCart">
    //                     <h3>កន្ត្រកទំនិញ​ <CardTravel className="iconCart"/>​</h3>
    //                 </Button>
    //                 </Col>
    //             </Row>            
    //             </Navbar>
    //             </div>
    //         </div>    
    //     )
    // }
}


export class Nav_not_fixed extends Component{
    render() {
        return (
            <div className="navigation_font">
            <Navbar  expand="md" style={{textAlign:'center'}} className="backgroun_navigation">
                <Navbar.Brand href="/">
                    <img src={LOGO_SMALL_APP} id="image_logo_small"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="btn_menu"/>
                <Navbar.Collapse id="basic-navbar-nav" className="md-auto" >    
                <FormControl id="input_search_navigation">
                        <InputLabel>ស្វែងរកទំនិញ</InputLabel>
                        <Input style={{width:'100%'}}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <Search/>
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                <Nav className="mr-auto">
                    <Link to={'/AddToCart'}>
                        <button id="btn_Cart_navigation">
                            កន្ត្រកទំនិញ​​<CardTravel id="iconCart"/>
                        </button>
                     </Link>
                </Nav>      
                <Nav className="ml-auto">
                <Link to="/">
                    <button id="btn_login_user">
                        <img src="https://i.ibb.co/RCjg4KR/icon-Login.png" id="icon_loing_in_nav"/>
                        <br/>
                        <label id="lbl_show_name_user">Rith</label>
                    </button>
                </Link></Nav> 
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}
     