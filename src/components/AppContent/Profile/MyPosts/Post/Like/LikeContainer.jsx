import Like from './Like';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		src: state.profileData.postsData.emotionsIcons.srcLike,
		alt: state.profileData.postsData.emotionsIcons.altLike,
		likesCount: state.profileData.postsData.posts.likesCount,
	};
};

const LikeContainer = connect(mapStateToProps)(Like);

export default LikeContainer;
