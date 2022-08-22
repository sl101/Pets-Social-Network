import Avatar from './Avatar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		src: state.profileData.profileInfo.avatar.srcAvatar,
		alt: state.profileData.profileInfo.avatar.altAvatar,
	};
};

const AvatarContainer = connect(mapStateToProps)(Avatar);

export default AvatarContainer;
