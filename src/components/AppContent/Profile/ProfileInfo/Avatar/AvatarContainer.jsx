import Avatar from './Avatar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		src: state.profileData.profile.photos.large,
		alt: state.profileData.profile.fullName + ' photo',
	};
};

export default connect(mapStateToProps)(Avatar);
