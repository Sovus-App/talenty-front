import { ReactNode } from 'react';
import Header from './header';
import Main from './main';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
		</>
	);
};

export default Layout;
