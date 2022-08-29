import PersonalSettings from './PersonalSettings';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		name: state.profileData.profile.fullName,
		aboutMe: state.profileData.profile.aboutMe,
	};
};

const PersonalSettingsContainer = connect(mapStateToProps)(PersonalSettings);

export default PersonalSettingsContainer;
