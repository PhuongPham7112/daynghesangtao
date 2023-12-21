import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { client } from './sanity';

const builder = imageUrlBuilder(client);

export function urlFor(source: Image | string | undefined) {
	if (!source) return builder.image('').url();
	if (typeof source === 'string') return source;
	return builder.image(source).url();
}