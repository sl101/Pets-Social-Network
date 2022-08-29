import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import { setUserProfileAC } from '../../../redux/profile-reduser';
import Preloader from './../../common/Preloader/Preloader';

class ProfileContainer extends React.Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then((respons) => {
				this.props.setUserProfileAC(respons.data);
			});
	}

	render() {
		if (!this.props.profile) {
			return <Preloader />;
		}
		// return <Profile {...this.props} profile={this.props.profile} />;
		return <Profile />;
	}
}

let mapStateToProps = (state) => ({
	profile: state.profileData.profile,
});

export default connect(mapStateToProps, { setUserProfileAC })(ProfileContainer);
