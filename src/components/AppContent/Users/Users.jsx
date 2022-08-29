import React from 'react';
import style from './Users.module.css';
import dart from '../../../image/s-l500.jpg';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let index = 1; index <= pagesCount; index++) {
		pages.push(index);
	}

	return (
		<section className={style.users}>
			<h2 className={`${style.title} ${'title'}`}>Users</h2>
			<ul className={style.paginationCount}>
				{pages.map((p) => {
					return (
						<li
							className={`${style.pageNumber} ${
								props.currentPage === p && style.selected
							}`}
							key={p}
						>
							<button
								className={style.pageSelection}
								onClick={() => {
									props.onPageChanged(p);
								}}
							>
								{p}
							</button>
						</li>
					);
				})}
			</ul>
			<ul className={style.list}>
				{props.users.map((u) => (
					<li className={style.item} key={u.id}>
						<div className={style.side}>
							<NavLink to={'/profile/' + u.id} className={style.picture}>
								<img
									className={style.img}
									src={u.photos.small ? u.photos.small : dart}
									alt={`${u.name} ${'avatar'}`}
								/>
							</NavLink>
							<button
								className={style.button}
								onClick={() => {
									props.toggleFollow(u.id);
								}}
							>
								{u.followed ? 'Followed' : 'Unfollowed'}
							</button>
						</div>

						<div className={style.content}>
							<span className={style.name}>{u.name}</span>
							<span className={style.status}>
								{u.status ? u.status : '...'}
							</span>
							<span className={style.city}>{'u.location.city'}</span>
							<span className={style.country}>{'u.location.country'}</span>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Users;
