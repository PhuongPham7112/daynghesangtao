import { createClient } from "@sanity/client";
import type { ImageAsset, Slug } from '@sanity/types';
import type { PortableTextBlock } from '@portabletext/types';
import groq from 'groq';

export const client = createClient({
    projectId: "ijjsarhl",
    dataset: "production",
    apiVersion: "2023-12-18",
    useCdn: false
})

export async function _getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function _getPost(slug: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
		slug
	});
}

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}