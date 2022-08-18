import HeadPicture from './HeadPicture/HeadPicture';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import PostEntry from './PostEntry/PostEntry';

const Profile = (props) => {
	return (
		<div className={style.profile}>
			<HeadPicture profileHeader={props.profileData.profileHeader} />
			<div className={style.content}>
				<ProfileInfo profileInfo={props.profileData.profileInfo} />
				<PostEntry />
				<MyPosts postsData={props.profileData.postsData} />
			</div>
		</div>
	);
};

export default Profile;
