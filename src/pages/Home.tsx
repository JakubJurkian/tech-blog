import { useCallback, useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import Posts from '../components/Posts';
import SearchInput from '../components/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getPosts } from '../store/postsSlice';
import timeAgo from '../util/timeAgo';
import Spinner from '../components/spinner';

const authorInfo: string[] = [
  'Jakub Jurkian',
  "Welcome to my blog post! If you are into tech-related topics, you couldn't find a better place.",
  './me.jpg',
  'https://github.com/JakubJurkian',
];

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const postsAmount = useSelector((state: RootState) => state.posts.postsAmount);
  
  let quantity;
  if (postsAmount === 1) {
    quantity = <code>{postsAmount} post</code>
  } else {
    quantity = <code>{postsAmount} posts</code>
  }


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://tech-blog-posts-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedPosts = [];
      for (const key in data) {
        loadedPosts.push({
          id: key,
          author: data[key].author,
          date: timeAgo(data[key].date),
          img: data[key].img,
          text: data[key].text,
          title: data[key].title,
          description: data[key].description
        });
      }
    
      dispatch(getPosts(loadedPosts));
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchPostsHandler();
  }, []);

  let content = <p>Found no posts.</p>;

  if (posts.length > 0) {
    content = <Posts posts={posts} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Spinner />
  }

  return (
    <div className="flex flex-col relative">
      <AuthorCard
        author={authorInfo[0]}
        description={authorInfo[1]}
        src={authorInfo[2]}
        githubLink={authorInfo[3]}
      />
      <div className="relative bottom-12 xxs:bottom-14 xs:bottom-20 sm:bottom-28">
        <main className="max-w-3xl mx-2 md:m-auto lg:max-w-4xl">
          <section>
            <div className="flex justify-between">
              <code>Posts</code>
              {quantity}
            </div>
            <SearchInput />
          </section>
          {content}
        </main>
      </div>
    </div>
  );
}

export default HomePage;
