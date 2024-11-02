'use client';
import { useEffect, useState } from 'react';
import { OutlinedInput } from '@mui/material';
import { useDebounce } from '@/tools';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { OutlinedInputProps } from '@mui/material/OutlinedInput/OutlinedInput';
import { SearchIcon } from '@/assets/icons';

const SEARCH_INPUT_QUERY_KEY = 'search';

const SearchInput = ({
	size = 'small',
	onChange,
	query_key = SEARCH_INPUT_QUERY_KEY,
	...props
}: Omit<OutlinedInputProps, 'value'> & { query_key?: string }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const querySearchStr = searchParams.get(query_key);

	const [searchStr, setSearchStr] = useState(querySearchStr ?? '');
	const debouncedSearchStr = useDebounce(searchStr);

	useEffect(() => {
		const queryParams = new URLSearchParams(searchParams.toString());
		if (querySearchStr && !debouncedSearchStr) {
			queryParams.delete(SEARCH_INPUT_QUERY_KEY);
		} else if (debouncedSearchStr) {
			queryParams.set(SEARCH_INPUT_QUERY_KEY, debouncedSearchStr);
		}
		router.push(`${pathname}?${queryParams}`);
	}, [debouncedSearchStr]);

	return (
		<OutlinedInput
			{...props}
			startAdornment={<SearchIcon />}
			size={size}
			value={searchStr}
			onChange={(event) => {
				if (onChange) {
					onChange(event);
				}
				setSearchStr(event.target.value);
			}}
		/>
	);
};

export default SearchInput;
