import Avatar from './Avatar/Avatar';
import PersonalSettings from './PesonalSettings/PersonalSettings';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div className={style.content}>
			<Avatar avatar={props.profileInfo.avatar} />
			<PersonalSettings personalData={props.profileInfo.personalData} />
		</div>
	);
};

export default ProfileInfo;
