'use client';
import { FormEvent, useState } from 'react';
import { Button, Grid2 as Grid, InputAdornment } from '@mui/material';
import { AuthInput } from '@/components';

import classes from '@/assets/styles/components/app/(auth)/auth.module.scss';
import { signIn, SignInData } from '@/lib';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MailIcon } from '@/assets/icons';
import { useSnackbar } from 'notistack';

const SignInForm = () => {
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
			router.push('/profile/respondents');
		} else if (credentials?.message) {
			enqueueSnackbar(credentials?.message, { variant: 'error' });
		}
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
