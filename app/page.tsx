import { Card } from '@mui/material';
import { getPosts } from '@/lib/auth/getPosts';

export default async function Home() {
	const posts = await getPosts();

	return (
		<div>
			{posts.map(post => (
				<Card key={post.id}>
					<h1>{post.title}</h1>
				</Card>
			))}
		</div>
	);
}
