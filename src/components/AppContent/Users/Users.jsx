import style from './Users.module.css';

const Users = (props) => {
	return (
		<section className={style.users}>
			<h2 className={`${style.title} ${'title'}`}>Users</h2>
			<ul className={style.list}>
				{props.users.map((u) => (
					<li className={style.item} key={u.id}>
						<div className={style.side}>
							<div className={style.picture}>
								<img className={style.img} src={u.src} />
							</div>
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
							<span className={style.name}>{u.fullName}</span>
							<span className={style.status}>{u.status}</span>
							<span className={style.city}>{u.location.city}</span>
							<span className={style.country}>{u.location.country}</span>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Users;
