const { Outlet } = require('react-router-dom');
const { default: BasicFooter } = require('./Footer/Footer');
const { default: BasicHeader } = require('./Header/Header');

function Layout() {
	return (
		<>
			<BasicHeader />
			<Outlet />
			<BasicFooter />
		</>
	);
}

export default Layout;
