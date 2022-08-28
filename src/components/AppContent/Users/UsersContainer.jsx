import * as axios from 'axios';
import React from 'react';
import Users from './Users';

import { connect } from 'react-redux';
import {
	followAC,
	setCurrentAC,
	setTotalUsersCountAC,
	setUsersAC,
	toggleIsFetchingAC,
} from '../../../redux/users-reduser';
import Preloader from '../../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetchingAC(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((respons) => {
				this.props.toggleIsFetchingAC(false);
				this.props.setUsersAC(respons.data.items);
				this.props.setTotalUsersCountAC(respons.data.totalCount);
			});
	}

	onPageChanged = (targetPage) => {
		this.props.setCurrentAC(targetPage);
		this.props.toggleIsFetchingAC(true);

		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${targetPage}&count=${this.props.pageSize}`
			)
			.then((respons) => {
				this.props.toggleIsFetchingAC(false);
				this.props.setUsersAC(respons.data.items);
			});
	};

	render() {
		if (this.props.totalUsersCount !== 0) {
			return (
				<>
					{this.props.isFetching ? <Preloader /> : null}
					<Users
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						onPageChanged={this.onPageChanged}
						users={this.props.users}
						toggleFollow={this.props.followAC}
					/>
				</>
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
		isFetching: state.usersData.isFetching,
	};
};

const mapDispatchToProps = {
	setUsersAC,
	followAC,
	setCurrentAC,
	setTotalUsersCountAC,
	toggleIsFetchingAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
