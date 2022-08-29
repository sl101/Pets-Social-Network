import HeadPictureContainer from './HeadPicture/HeadPictureContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostEntryContainer from './PostEntry/PostEntryContainer';
import style from './Profile.module.css';
// import Preloader from './../../common/Preloader/Preloader';

// const Profile = (props) => {
const Profile = () => {
	// if (!props.profile) {
	// 	return <Preloader />;
	// }

	return (
		<div className={style.profile}>
			<HeadPictureContainer />
			<div className={style.content}>
				{/* <ProfileInfo profile={props.profile} /> */}
				<ProfileInfo />
				<PostEntryContainer />
				<MyPostsContainer />
			</div>
		</div>
	);
};

export default Profile;
