import * as axios from 'axios';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../../redux/profile-reduser';
import Preloader from './../../common/Preloader/Preloader';
import Profile from './Profile';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = 2;
		}
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then((respons) => {
				this.props.setUserProfileAC(respons.data);
			});
	}

	render() {
		if (!this.props.profile) {
			return <Preloader />;
		}
		return <Profile />;
	}
}

let mapStateToProps = (state) => ({
	profile: state.profileData.profile,
});

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}

	return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfileAC })(
	withRouter(ProfileContainer)
);
