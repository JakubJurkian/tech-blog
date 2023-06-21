import { useCallback, useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import Posts from '../components/Posts';
import SearchInput from '../components/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getPosts } from '../store/postsSlice';

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

  const fetchMoviesHandler = useCallback(async () => {
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
          date: data[key].date,
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
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no posts.</p>;

  if (posts.length > 0) {
    content = <Posts posts={posts} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = 
    <div role="status" className="flex justify-center mt-3">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
    ;
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
