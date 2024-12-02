'use client';
import { FormEvent, useState } from 'react';
import { signUp, SignUpData } from '@/lib';
import { useRouter } from 'next/navigation';
import { parsePhone } from '@/tools';
import { useSnackbar } from 'notistack';

import {
	Button,
	FormControl,
	FormControlLabel,
	Grid2 as Grid,
	InputAdornment,
	Typography,
} from '@mui/material';
import { AuthInput, Checkbox } from '@/components';
import { PhoneInputMask, AuthInputProps } from '@/components/input';
import { MailIcon } from '@/assets/icons';
import Link from 'next/link';

import classes from '@/assets/styles/app/(auth)/auth.module.scss';

const SignUpForm = () => {
	const [formErrors, setFormErrors] = useState<
		{ field: string; message: string }[]
	>([]);
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();
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
		} else if (credentials?.message) {
			enqueueSnackbar(credentials?.message, {
				variant: 'error',
				anchorOrigin: {
					horizontal: 'center',
					vertical: 'bottom',
				},
			});
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
			className={classes.auth_form}
			justifyContent="space-between"
			onSubmit={onSubmit}
		>
			<Grid flexDirection="column" container rowGap="40px">
				<h1>Регистрация</h1>
				<AuthInput
					placeholder="Иванов Иван Иванович"
					onChange={(event) =>
						setFormData({ ...formData, full_name: event.target.value })
					}
					value={formData.full_name}
					id="name"
					name="name"
					required
					label="Введите ФИО"
					type="text"
					{...getErrorInput('name')}
				/>

				<PhoneInputMask<AuthInputProps>
					value={formData.phone}
					onChange={(event) => {
						setFormData({ ...formData, phone: event.target.value });
					}}
					id="phone"
				>
					{(inputProps) => (
						<AuthInput
							{...inputProps}
							label="Введите номер"
							{...getErrorInput('phone')}
						/>
					)}
				</PhoneInputMask>

				<AuthInput
					onChange={(event) =>
						setFormData({ ...formData, email: event.target.value })
					}
					value={formData.email}
					id="email"
					name="email"
					label="Введите почту"
					placeholder="example@example.com"
					type="email"
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<MailIcon />
								</InputAdornment>
							),
						},
					}}
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
					placeholder="*********"
					type="password"
					{...getErrorInput('password')}
				/>
				<FormControl>
					<FormControlLabel
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
								required
								id="approve_policy"
								sx={{ paddingTop: 0 }}
								name="approve_policy"
							/>
						}
						label={
							<Typography
								variant="body1"
								component="span"
								sx={{ '& a': { color: 'var(--primary-color)' } }}
							>
								Я согласен(а) с <Link href={''}>условиями</Link> обработки
								персональных данных
							</Typography>
						}
					/>
				</FormControl>
			</Grid>

			<Grid>
				<Button fullWidth variant="contained" type="submit" size="large">
					Зарегистрироваться
				</Button>
				<Grid className={classes.auth_form_link}>
					<p>
						Уже есть аккаунт? <Link href="/sign-in">Войдите</Link>
					</p>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SignUpForm;
