import { FormControlLabel, Grid2 as Grid } from '@mui/material';
import { Checkbox, Chip, List } from '@/components';
import { ChangeEvent } from 'react';

interface CreateSurveyListItemProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	survey_name: string;
	survey_status: string;
}

const CreateSurveyListItem = ({
	onChange,
	survey_name,
	survey_status,
}: CreateSurveyListItemProps) => {
	return (
		<List.Item>
			<FormControlLabel
				disableTypography
				control={<Checkbox onChange={onChange} />}
				label={
					<Grid
						width="100%"
						justifyContent="space-between"
						alignItems="center"
						container
					>
						<span>Тест {survey_name}</span>
						<Chip
							size="small"
							rounded
							variant="secondary"
							label={{ text: survey_status }}
						/>
					</Grid>
				}
			/>
		</List.Item>
	);
};

export default CreateSurveyListItem;
