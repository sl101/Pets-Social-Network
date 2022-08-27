import * as axios from 'axios';
import React from 'react';
import Users from './Users';

import { connect } from 'react-redux';
import {
	followAC,
	setCurrentAC,
	setTotalUsersCountAC,
	setUsersAC,
} from '../../../redux/users-reduser';

class UsersContainer extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((respons) => {
				this.props.setUsers(respons.data.items);
				this.props.setTotalUsersCount(respons.data.totalCount);
			});
	}

	onPageChanged = (targetPage) => {
		this.props.setCurrentPage(targetPage);

		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${targetPage}&count=${this.props.pageSize}`
			)
			.then((respons) => {
				this.props.setUsers(respons.data.items);
			});
	};

	render() {
		if (this.props.totalUsersCount !== 0) {
			return (
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					toggleFollow={this.props.toggleFollow}
				/>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersData.users,
		pageSize: state.usersData.pageSize,
		totalUsersCount: state.usersData.totalUsersCount,
		currentPage: state.usersData.currentPage,
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
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentAC(pageNumber));
		},

		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
