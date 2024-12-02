const copyRespondentSurveyLink = (survey_uuid: string | null) =>
	navigator.clipboard.writeText(
		window.location.origin + `/survey/${survey_uuid}`,
	);

export default copyRespondentSurveyLink;
