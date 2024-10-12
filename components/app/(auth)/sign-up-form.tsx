'use client';
import { FormEvent, useState } from 'react';
import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid2 as Grid,
} from '@mui/material';
import { AuthInput } from '@/components';

import classes from '@/assets/styles/components/app/(auth)/auth.module.scss';
import { signUp, SignUpData } from '@/lib';
import { useRouter } from 'next/navigation';
import { parsePhone } from '@/tools';
import { PhoneInputMask, AuthInputProps } from '@/components/input';

const SignUpForm = () => {
	const router = useRouter();
	const [formData, setFormData] = useState<SignUpData>({
		full_name: '',
		phone: '',
		email: '',
		password: '',
		approve_policy: false,
	});

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const credentials = await signUp({
			...formData,
			phone: parsePhone(formData.phone),
		});
		if (credentials?.access_token) {
			router.push('/profile/respondents');
		}
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
						setFormData({ ...formData, full_name: event.target.value })
					}
					value={formData.full_name}
					id="name"
					name="name"
					required
					label="Введите ФИО"
					type="text"
				/>

				<PhoneInputMask<AuthInputProps>
					value={formData.phone}
					onChange={(event) => {
						setFormData({ ...formData, phone: event.target.value });
					}}
					id="phone"
				>
					{(inputProps) => <AuthInput {...inputProps} label="Введите номер" />}
				</PhoneInputMask>

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
