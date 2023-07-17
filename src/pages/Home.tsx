import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Posts from '../components/Posts';
import AuthorCard from '../components/AuthorCard';
import SearchInput from '../components/SearchInput';

import { RootState } from '../store/store';
import { getPosts, howManyPosts } from '../store/postsSlice';

import { date } from '../util/date';
import timeAgo from '../util/timeAgo';
import SkeletonLoading from '../components/SkeletonLoading';

const authorInfo: string[] = [
  'Jakub Jurkian',
  "Welcome to my blog post! If you are into tech-related topics, you couldn't find a better place.",
  './me.jpg',
  'https://github.com/JakubJurkian',
];

function HomePage() {
  const [transition] = useAutoAnimate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const posts = useSelector((state: RootState) => state.posts.posts);
  const postsAmount = useSelector(
    (state: RootState) => state.posts.postsAmount
  );

  let quantity;
  if (postsAmount === 1) {
    quantity = `${postsAmount} post`;
  } else {
    quantity = `${postsAmount} posts`;
  }

  const fetchPostsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://personal-tech-blog-development-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
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
          addedXAgo: date(data[key].date),
          img: data[key].img,
          text: data[key].text,
          title: data[key].title,
          description: data[key].description,
        });
      }

      dispatch(getPosts(loadedPosts));
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [dispatch]);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    fetchPostsHandler();
    dispatch(howManyPosts(filteredPosts.length));
  }, [fetchPostsHandler, dispatch, filteredPosts.length]);

  useEffect(() => {
    dispatch(howManyPosts(filteredPosts.length));
  }, [dispatch, filteredPosts.length]);

  let content = <p className="text-center text-lg">Found no posts :&#40;</p>;

  if (filteredPosts.length > 0) {
    content = <Posts posts={filteredPosts} />;
  }

  if (error) {
    content = <p className="text-center text-lg">{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className='flex flex-col gap-5'>
        <SkeletonLoading />
        <SkeletonLoading />
      </div>
    );
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
              <code>{quantity}</code>
            </div>
            <SearchInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </section>
          <div ref={transition}>{content}</div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
