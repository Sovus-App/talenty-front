export const parsePhone = (phone: string) =>
	phone.trim().replace(/[()]|-| /g, '');
