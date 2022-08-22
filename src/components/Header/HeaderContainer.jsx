import Header from './Header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		headerData: state.headerData,
	};
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
