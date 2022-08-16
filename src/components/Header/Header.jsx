import style from './Header.module.css';

const Header = (props) => {
	return (
		<header className={style.header}>
			<img
				className={style.logo}
				src={props.headerData.src}
				alt={props.headerData.alt}
			/>
		</header>
	);
};

export default Header;
