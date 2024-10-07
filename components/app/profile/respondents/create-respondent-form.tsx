'use client';
import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid2 as Grid,
} from '@mui/material';
import { FormEvent, useState } from 'react';
import CreateRespondentInput from '@/components/input/create-respondent-input';
import { createRespondent } from '@/lib';

const CreateRespondentForm = () => {
	const [formData, setFormData] = useState({
		last_name: '',
		name: '',
		surname: '',
		gender: '',
		no_surname: false,
		date_of_birth: '',
		phone: '',
		email: '',
	});
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = {
			full_name: `${formData.name} ${formData.last_name} ${formData.surname}`,
			gender: formData.gender,
			phone: formData.phone,
			email: formData.email,
			date_of_birth: formData.date_of_birth,
		};
		await createRespondent(data);
	}
	return (
		<Grid
			container
			flexDirection="column"
			component="form"
			rowGap="80px"
			justifyContent="space-between"
			onSubmit={onSubmit}
		>
			<Grid flexDirection="column" container rowGap="20px">
				<CreateRespondentInput
					name="name"
					placeholder="Иван"
					id="name-field"
					label="Введите имя"
					onChange={(event) =>
						setFormData({ ...formData, name: event.target.value })
					}
					value={formData.name}
				/>
				<CreateRespondentInput
					name="last_name"
					placeholder="Иванов"
					id="last-name-field"
					label="Введите фамилию"
					onChange={(event) =>
						setFormData({ ...formData, last_name: event.target.value })
					}
					value={formData.last_name}
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
				/>
				<FormControlLabel
					required
					checked={formData.no_surname}
					htmlFor="no-surname-field"
					control={
						<Checkbox
							onChange={(event) =>
								setFormData({
									...formData,
									no_surname: event.target.checked,
								})
							}
							id="no-surname-field"
							name="no_surname"
						/>
					}
					label="Отчество отсутствует"
				/>
				<CreateRespondentInput
					name="date_of_birth"
					id="date-birth-field"
					label="Выберите дату рождения"
					type="date"
					onChange={(event) =>
						setFormData({ ...formData, date_of_birth: event.target.value })
					}
					value={formData.date_of_birth}
				/>
				<CreateRespondentInput
					name="phone"
					id="phone-field"
					label="Введите номер телефона"
					placeholder="+7"
					type="tel"
					onChange={(event) =>
						setFormData({ ...formData, phone: event.target.value })
					}
					value={formData.phone}
				/>
				<CreateRespondentInput
					name="email"
					id="email-field"
					label="Введите электронную почту"
					type="email"
					placeholder="example@examle.com"
					onChange={(event) =>
						setFormData({ ...formData, phone: event.target.value })
					}
					value={formData.phone}
				/>
			</Grid>
			<Grid container gap="16px">
				<Button size="small" type="submit" variant="contained">
					Создать респондента
				</Button>
				<Button size="small" variant="outlined">
					Отменить
				</Button>
			</Grid>
		</Grid>
	);
};

export default CreateRespondentForm;
