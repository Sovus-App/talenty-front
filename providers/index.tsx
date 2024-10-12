import { ReactNode } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from '@/providers/auth';
import MUIXDatePickerProvider from './theme/mui-x-date-pickers';

import theme from './theme';

interface AppProvidersProps {
	children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
	return (
		<AuthProvider>
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					<MUIXDatePickerProvider>{children}</MUIXDatePickerProvider>
				</ThemeProvider>
			</AppRouterCacheProvider>
		</AuthProvider>
	);
}

export default AppProviders;
