'use client';
import { FormEvent, useState } from 'react';
import { createRespondent } from '@/lib';
import { useRouter } from 'next/navigation';
import { parsePhone } from '@/tools';
import { useSnackbar } from 'notistack';
import moment from 'moment';

import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid2 as Grid,
	Radio,
	RadioGroup,
} from '@mui/material';
import {
	CreateRespondentInput,
	PhoneInputMask,
	CreateRespondentInputProps,
} from '@/components/input';
import { DatePicker } from '@/components';

const CreateRespondentForm = () => {
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();
	const [formErrors, setFormErrors] = useState<
		{
			field: string;
			message: string;
		}[]
	>([]);
	const [formData, setFormData] = useState({
		last_name: '',
		name: '',
		surname: '',
		gender: 'male',
		date_of_birth: '',
		phone: '',
		email: '',
	});
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = {
			full_name: `${formData.name} ${formData.last_name} ${formData.surname}`,
			gender: formData.gender,
			phone: parsePhone(formData.phone),
			email: formData.email,
			date_of_birth: formData.date_of_birth,
		};
		const respondent = await createRespondent(data);
		if (respondent?.uuid) {
			setFormErrors([]);
			router.push(`/survey/create?respondent_uuid=${respondent?.uuid}`);
		} else if (respondent?.message) {
			enqueueSnackbar(respondent.message, { variant: 'error' });
			if (respondent?.errors) {
				setFormErrors(respondent?.errors);
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
			rowGap="80px"
			justifyContent="space-between"
			onSubmit={onSubmit}
		>
			<Grid container gap="24px">
				<Grid size={5} container rowGap="24px" flexDirection="column">
					<CreateRespondentInput
						required
						name="name"
						placeholder="Иван"
						id="name-field"
						label="Введите имя"
						onChange={(event) =>
							setFormData({ ...formData, name: event.target.value })
						}
						value={formData.name}
						{...getErrorInput('name')}
					/>
					<CreateRespondentInput
						name="surname"
						placeholder="Иванович"
						id="surname-field"
						label="Введите отчество"
						onChange={(event) =>
							setFormData({ ...formData, surname: event.target.value })
						}
						value={formData.surname}
						{...getErrorInput('surname')}
					/>
					<FormControl required {...getErrorInput('gender')}>
						<FormLabel id="gender-radio-buttons-group-label">Пол</FormLabel>
						<RadioGroup
							aria-labelledby="gender-radio-buttons-group-label"
							defaultValue="male"
						>
							<FormControlLabel
								value="male"
								htmlFor="gender-male-field"
								control={
									<Radio
										onClick={() =>
											setFormData({
												...formData,
												gender: 'male',
											})
										}
										id="gender-male-field"
									/>
								}
								label="Мужчина"
							/>
							<FormControlLabel
								value="female"
								htmlFor="gender-female-field"
								control={
									<Radio
										onClick={() =>
											setFormData({
												...formData,
												gender: 'female',
											})
										}
										id="gender-female-field"
									/>
								}
								label="Женщина"
							/>
						</RadioGroup>
					</FormControl>
					<CreateRespondentInput
						name="email"
						id="email-field"
						label="Введите электронную почту"
						type="email"
						placeholder="example@examle.com"
						onChange={(event) =>
							setFormData({ ...formData, email: event.target.value })
						}
						value={formData.email}
						{...getErrorInput('email')}
					/>
				</Grid>
				<Grid size={5} container rowGap="24px" flexDirection="column">
					<CreateRespondentInput
						required
						name="last_name"
						placeholder="Иванов"
						id="last-name-field"
						label="Введите фамилию"
						onChange={(event) =>
							setFormData({ ...formData, last_name: event.target.value })
						}
						value={formData.last_name}
						{...getErrorInput('last_name')}
					/>
					<DatePicker
						required
						id="date-birth-field"
						label="Выберите дату рождения"
						onChange={(date) =>
							setFormData({
								...formData,
								date_of_birth: date?.format('YYYY-MM-DD') || '',
							})
						}
						value={
							formData.date_of_birth
								? moment(formData.date_of_birth)
								: undefined
						}
						{...getErrorInput('date_of_birth')}
					/>
					<PhoneInputMask<CreateRespondentInputProps>
						value={formData.phone}
						onChange={(event) =>
							setFormData({ ...formData, phone: event.target.value })
						}
					>
						{(inputProps) => (
							<CreateRespondentInput
								{...inputProps}
								id="phone-field"
								label="Введите номер телефона"
								{...getErrorInput('phone')}
							/>
						)}
					</PhoneInputMask>
				</Grid>
			</Grid>
			<Grid container gap="16px">
				<Button type="submit" variant="contained">
					Создать тестирование
				</Button>
				<Button
					onClick={() => router.push('/profile/respondents')}
					variant="outlined"
				>
					Отменить
				</Button>
			</Grid>
		</Grid>
	);
};

export default CreateRespondentForm;
