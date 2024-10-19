'use client';

import { ReactNode } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from '@/providers/auth';
import MUIXDatePickerProvider from './theme/mui-x-date-pickers';

import theme from './theme';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { SWRConfig } from 'swr';

interface AppProvidersProps {
	children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
	const { enqueueSnackbar } = useSnackbar();
	return (
		<AuthProvider>
			<SWRConfig value={{ onError: (error) => enqueueSnackbar(error.message) }}>
				<SnackbarProvider dense maxSnack={5} hideIconVariant>
					<AppRouterCacheProvider>
						<MUIXDatePickerProvider>
							<ThemeProvider theme={theme}>{children}</ThemeProvider>
						</MUIXDatePickerProvider>
					</AppRouterCacheProvider>
				</SnackbarProvider>
			</SWRConfig>
		</AuthProvider>
	);
}

export default AppProviders;
