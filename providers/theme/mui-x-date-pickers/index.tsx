'use client';
import { PropsWithChildren } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

import 'moment/locale/ru';

const MUIXDatePickerProvider = (props: PropsWithChildren) => {
	return (
		<LocalizationProvider adapterLocale="ru" dateAdapter={AdapterMoment}>
			{props.children}
		</LocalizationProvider>
	);
};

export default MUIXDatePickerProvider;
