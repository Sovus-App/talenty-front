import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from '@/providers/auth';

interface AppProvidersProps {
	children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
	return (
		<AuthProvider>
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</AppRouterCacheProvider>
		</AuthProvider>
	);
}

export default AppProviders;
