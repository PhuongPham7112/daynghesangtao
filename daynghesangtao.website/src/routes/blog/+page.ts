import { _getPosts } from '$lib/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const posts = await _getPosts();

	if (posts) {
		return {
			posts
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;