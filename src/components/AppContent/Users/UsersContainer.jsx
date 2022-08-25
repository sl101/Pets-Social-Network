import Users from './Users';
import { connect } from 'react-redux';
import { setUsersAC, followAC } from '../../../redux/users-reduser';

const mapStateToProps = (state) => {
	return {
		users: state.usersData.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		toggleFollow: (userId) => {
			dispatch(followAC(userId));
		},
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
