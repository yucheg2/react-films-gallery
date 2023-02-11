import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation/navigation';
import './styles.css';

const MainPageLayouts = ({children, title}) => (
	<div className='main-layout'>
		<h1>{title}</h1>
		<Navigation/>
		{ children }
	</div>
);

MainPageLayouts.propTypes = {
	children: PropTypes.element,
	title: PropTypes.string.isRequired,
};

export default MainPageLayouts;
