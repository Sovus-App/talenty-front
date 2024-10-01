'use client';
import { FormEvent, useState } from 'react';
import { Button, Grid2 as Grid } from '@mui/material';
import { AuthInput } from '@/components';

import classes from '@/assets/styles/components/(auth)/auth.module.scss';

const SignInForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		// const response = await fetch('/api/submit', {
		// 	method: 'POST',
		// 	body: formData,
		// });

		// Handle response if necessary
		// const data = await response.json();
		// ...
	}
	return (
		<Grid
			container
			flexDirection="column"
			component="form"
			rowGap="48px"
			justifyContent="space-between"
			className={classes.auth_form}
			onSubmit={onSubmit}
		>
			<Grid flexDirection="column" container rowGap="30px">
				<AuthInput
					onChange={(event) =>
						setFormData({ ...formData, email: event.target.value })
					}
					name="email"
					value={formData.email}
					id="email"
					label="Введите почту"
					type="email"
				/>
				<AuthInput
					onChange={(event) =>
						setFormData({ ...formData, password: event.target.value })
					}
					value={formData.password}
					id="password"
					name="password"
					label="Введите пароль"
					type="password"
				/>
			</Grid>

			<Grid>
				<Button fullWidth variant="contained" type="submit" size="large">
					Войти
				</Button>
			</Grid>
		</Grid>
	);
};

export default SignInForm;
