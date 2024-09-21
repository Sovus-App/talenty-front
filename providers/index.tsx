import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

interface AppProvidersProps {
	children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</AppRouterCacheProvider>
	);
}

export default AppProviders;
