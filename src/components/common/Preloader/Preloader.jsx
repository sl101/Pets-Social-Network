import style from './Preloader.module.css';
import preloader from '../../../image/loading.gif';

const Preloader = () => {
	return (
		<div className={style.preloader}>
			<img className={style.preloaderImg} src={preloader} />
		</div>
	);
};
export default Preloader;
