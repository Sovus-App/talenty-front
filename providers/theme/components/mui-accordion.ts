import { MUIComponentsType } from './';
import { accordionClasses } from '@mui/material';

const muiAccordion: MUIComponentsType = {
	MuiPaper: {
		styleOverrides: {
			root: {
				[`& .${accordionClasses.root}`]: {
					margin: 0,
				},
			},
		},
	},
	MuiAccordionDetails: {
		styleOverrides: {
			root: {
				padding: 8,
			},
		},
	},
	MuiAccordion: {
		styleOverrides: {
			root: {
				margin: '0 !important',
				boxShadow: 'none !important',
			},
		},
	},
	MuiAccordionSummary: {
		styleOverrides: {
			content: {
				fontWeight: 500,
				margin: 0,
				padding: '8px 0',
				[`&.${accordionClasses.expanded}`]: {
					margin: 0,
					padding: '8px 0',
				},
			},
			root: {
				minHeight: 'auto',
				padding: '0 8px',
				[`&.${accordionClasses.expanded}`]: {
					minHeight: 'auto',
				},
			},
			expandIconWrapper: {
				[`&.${accordionClasses.expanded}`]: {
					transform: 'rotate(90deg)',
				},
			},
		},
	},
};

export default muiAccordion;
