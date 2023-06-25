interface Post {
  id: number;
  author: string;
  title: string;
  addedXAgo: string;
  img: string;
  text: string;
  description: string;
}

export default function searchPosts(query: string, posts: Post[]): Post[] {
  const results: Post[] = [];

  for (const post of posts) {
    if (
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.author.toLowerCase().includes(query.toLowerCase())
    ) {
      results.push(post);
    }
  }

  return results;
}
