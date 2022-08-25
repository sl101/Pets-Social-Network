import React from 'react';
import style from './Users.module.css';
import dart from '../../../image/s-l500.jpg';
import * as axios from 'axios';

class Users extends React.Component {
	constructor(props) {
		super(props);
		if (this.props.users.length === 0) {
			axios
				.get('https://social-network.samuraijs.com/api/1.0/users')
				.then((respons) => {
					this.props.setUsers(respons.data.items);
				});
		}
	}

	render() {
		return (
			<section className={style.users}>
				<h2 className={`${style.title} ${'title'}`}>Users</h2>
				<ul className={style.list}>
					{this.props.users.map((u) => (
						<li className={style.item} key={u.id}>
							<div className={style.side}>
								<div className={style.picture}>
									<img
										className={style.img}
										src={u.photos.small ? u.photos.small : dart}
										alt={`${u.name} ${'avatar'}`}
									/>
								</div>
								<button
									className={style.button}
									onClick={() => {
										this.props.toggleFollow(u.id);
									}}
								>
									{u.followed ? 'Followed' : 'Unfollowed'}
								</button>
							</div>

							<div className={style.content}>
								<span className={style.name}>{u.name}</span>
								<span className={style.status}>
									{u.status ? u.photos : '...'}
								</span>
								<span className={style.city}>{'u.location.city'}</span>
								<span className={style.country}>{'u.location.country'}</span>
							</div>
						</li>
					))}
				</ul>
			</section>
		);
	}
}

export default Users;
