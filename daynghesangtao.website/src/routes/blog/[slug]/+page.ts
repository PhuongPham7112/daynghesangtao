import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { _getPost } from '$lib/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const post = await _getPost(params.slug);
	if (post) return post;

	throw error(404, 'Not found');
}) satisfies PageLoad;