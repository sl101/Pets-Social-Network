import logo from '../image/fr-buldog.svg';

const initialState = {
	src: logo,
	alt: 'logo',
};

const headerReduser = (state = initialState, action) => {
	return state;
};

export default headerReduser;
