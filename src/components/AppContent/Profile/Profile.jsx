import HeadPictureContainer from './HeadPicture/HeadPictureContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostEntryContainer from './PostEntry/PostEntryContainer';
import style from './Profile.module.css';

const Profile = (props) => {
	return (
		<div className={style.profile}>
			<HeadPictureContainer />
			<div className={style.content}>
				<ProfileInfo profileInfo={props.profileData.profileInfo} />
				<PostEntryContainer />
				<MyPostsContainer />
			</div>
		</div>
	);
};

export default Profile;
