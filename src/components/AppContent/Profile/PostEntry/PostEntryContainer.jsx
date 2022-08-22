import PostEntry from './PostEntry';
import { connect } from 'react-redux';
import {
	addPostActionCreator,
	updatePostActionCreator,
} from '../../../../redux/profile-reduser';

const mapStateToProps = (state) => {
	return {
		updatePost: state.profileData.updatePost,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateArea: (e) => {
			const text = e.target.value;
			dispatch(updatePostActionCreator(text));
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		},
	};
};

const PostEntryContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostEntry);

export default PostEntryContainer;
