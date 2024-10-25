import fs from 'fs/promises';
import path from 'path';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
  const postsPath = path.resolve('src/posts');
  const files = await fs.readdir(postsPath);
	return files.map(file => ({
    slug: file.replace('.md', '')
  }));
};

export const prerender = true;
