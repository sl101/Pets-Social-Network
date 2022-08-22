import HeadPicture from './HeadPicture';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		src: state.profileData.profileHeader.src,
		alt: state.profileData.profileHeader.alt,
	};
};

const HeadPictureContainer = connect(mapStateToProps)(HeadPicture);

export default HeadPictureContainer;
