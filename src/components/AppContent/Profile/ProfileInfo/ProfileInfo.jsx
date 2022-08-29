// import Avatar from './Avatar/Avatar';
import AvatarContainer from './Avatar/AvatarContainer';
import PersonalSettingsContainer from './PesonalSettings/PersonalSettingsContainer';
import style from './ProfileInfo.module.css';

// const ProfileInfo = (props) => {
const ProfileInfo = () => {
	return (
		<div className={style.content}>
			{/* <Avatar avatar={props.profile} /> */}
			<AvatarContainer />
			<PersonalSettingsContainer />
		</div>
	);
};

export default ProfileInfo;
