'use client';
import { FormEvent, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { signIn, SignInData } from '@/lib';

import { Button, Grid2 as Grid, InputAdornment } from '@mui/material';
import { AuthInput } from '@/components';
import { MailIcon } from '@/assets/icons';
import Link from 'next/link';

import classes from '@/assets/styles/components/app/(auth)/auth.module.scss';

const SignInForm = () => {
	const [formErrors, setFormErrors] = useState<
		{
			field: string;
			message: string;
		}[]
	>([]);
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();
	const [formData, setFormData] = useState<SignInData>({
		email: '',
		password: '',
	});

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const credentials = await signIn(formData);
		if (credentials?.access_token) {
			setFormErrors([]);
			router.push('/profile/respondents');
		} else if (credentials?.message) {
			enqueueSnackbar(credentials?.message, { variant: 'error' });
			if (credentials?.errors) {
				setFormErrors(credentials?.errors);
			}
		}
	}

	const getErrorInput = (field: string) => {
		const error = formErrors.find((error) => error.field === field);
		return { error: !!error, helperText: error?.message };
	};
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
				<h1>Вход</h1>
				<AuthInput
					onChange={(event) =>
						setFormData({ ...formData, email: event.target.value })
					}
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<MailIcon />
								</InputAdornment>
							),
						},
					}}
					name="email"
					placeholder="example@example.com"
					value={formData.email}
					id="email"
					label="Введите почту"
					type="email"
					{...getErrorInput('email')}
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
					placeholder="**********"
					{...getErrorInput('password')}
				/>
			</Grid>

			<Grid>
				<Button fullWidth variant="contained" type="submit" size="large">
					Войти
				</Button>
				<Grid className={classes.auth_form_link}>
					<p>
						Нет аккаунта? <Link href="/sign-up">Зарегистрируйтесь</Link>
					</p>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SignInForm;
