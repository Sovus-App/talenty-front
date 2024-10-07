'use client';
import { useEffect, useState } from 'react';
import { OutlinedInput } from '@mui/material';
import { useDebounce } from '@/tools';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { OutlinedInputProps } from '@mui/material/OutlinedInput/OutlinedInput';
import { SearchIcon } from '@/assets/icons';

const SEARCH_INPUT_QUERY_KEY = 'searchStr';

const SearchInput = ({
	size = 'small',
	onChange,
	...props
}: Omit<OutlinedInputProps, 'value'>) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const querySearchStr = searchParams.get(SEARCH_INPUT_QUERY_KEY);

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
