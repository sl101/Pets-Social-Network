import AvatarContainer from './Avatar/AvatarContainer';
import PersonalSettingsContainer from './PesonalSettings/PersonalSettingsContainer';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div className={style.content}>
			<AvatarContainer />
			<PersonalSettingsContainer />
		</div>
	);
};

export default ProfileInfo;
