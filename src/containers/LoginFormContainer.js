import { connect } from "react-redux";
import LoginFormComponent from "../Screen/login"
import {userLoginSMS,userLogin} from "../modules/user/reducer"
import {appWillRefresh} from '../modules/app/reducer'
const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = {
  userLoginSMS,userLogin,appWillRefresh
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
