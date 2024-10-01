export interface GetRespondentsSchema {
	id: number;
	fullName: string;
	gender: 'male' | 'female' | string;
	age: number;
	testing_date: string;
	status: { id: number; name: string };
}

export async function getRespondents() {
	// const postsData = await fetch('https://api.vercel.app/blog', {
	// 	cache: 'no-store',
	// });
	// const posts = await postsData.json();
	return Promise.resolve(
		[...new Array(25)].map((_, index) => ({
			id: index,
			fullName: `Фамилия Имя Отчество_${index}`,
			gender: index % 2 === 0 ? 'male' : 'female',
			age: index + 30,
			testing_date: '01.02.2023',
			status: {
				id: index % 2 === 0 ? 0 : 1,
				name: index % 2 === 0 ? 'пройдено' : 'не пройдено',
			},
		})),
	);
}
