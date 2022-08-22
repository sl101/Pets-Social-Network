import PersonalSettings from './PersonalSettings';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		name: state.profileData.profileInfo.personalData.name,
		age: state.profileData.profileInfo.personalData.age,
	};
};

const PersonalSettingsContainer = connect(mapStateToProps)(PersonalSettings);

export default PersonalSettingsContainer;
