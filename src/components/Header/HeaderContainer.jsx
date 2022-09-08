import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import { setAuthUserDataAc } from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
				withCredentials: true,
			})
			.then((respons) => {
				if (respons.data.resultCode === 0) {
					let { id, email, login } = respons.data.data;
					this.props.setAuthUserDataAc(id, email, login);
				}
			});
	}
	render() {
		// debugger;
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return {
		headerData: state.headerData,
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	};
};

const mapDispatchToProps = {
	setAuthUserDataAc,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
