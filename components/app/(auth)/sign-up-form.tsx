'use client';
import { FormEvent, useState } from 'react';
import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid2 as Grid,
} from '@mui/material';
import { AuthInput } from '@/components';

import classes from '@/assets/styles/components/(auth)/auth.module.scss';

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		password: '',
		approve_policy: false,
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
			className={classes.auth_form}
			justifyContent="space-between"
			onSubmit={onSubmit}
		>
			<Grid flexDirection="column" container rowGap="30px">
				<AuthInput
					onChange={(event) =>
						setFormData({ ...formData, name: event.target.value })
					}
					value={formData.name}
					id="name"
					name="name"
					required
					label="Введите ФИО"
					type="text"
				/>

				<AuthInput
					onChange={(event) =>
						setFormData({ ...formData, phone: event.target.value })
					}
					value={formData.phone}
					id="phone"
					name="phone"
					label="Введите номер"
					type="tel"
				/>
				<AuthInput
					onChange={(event) =>
						setFormData({ ...formData, email: event.target.value })
					}
					value={formData.email}
					id="email"
					name="email"
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
				<FormControlLabel
					required
					checked={formData.approve_policy}
					htmlFor="approve_policy"
					control={
						<Checkbox
							onChange={(event) =>
								setFormData({
									...formData,
									approve_policy: event.target.checked,
								})
							}
							id="approve_policy"
							sx={{ paddingTop: 0 }}
							name="approve_policy"
						/>
					}
					label="Я согласен(а) с условиями обработки персональных данных"
				/>
			</Grid>

			<Grid>
				<Button fullWidth variant="contained" type="submit" size="large">
					Зарегистрироваться
				</Button>
			</Grid>
		</Grid>
	);
};

export default SignUpForm;
