export async function getPosts() {
	const postsData = await fetch('https://api.vercel.app/blog', {
		cache: 'no-store',
	});
	const posts = await postsData.json();
	return posts;
}
