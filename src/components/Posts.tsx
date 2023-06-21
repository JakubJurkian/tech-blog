import { useDispatch } from 'react-redux';
import PostPreview from './PostPreview';
import { howManyPosts } from '../store/postsSlice';
import { useEffect } from 'react';

interface Post {
  id: string;
  author: string;
  date: string;
  description: string;
  img: string;
  text: string;
  title: string;
}
type PostsArray = Post[];

function Posts(props: { posts: PostsArray}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(howManyPosts(props.posts.length));
  }, [dispatch, props.posts.length]);
  

  return (
    <section>
      <ul className='flex flex-col gap-5'>
        {props.posts.map((post) => {
          return (
            <PostPreview
              key={post.id}
              link={post.id}
              title={post.title}
              description={post.description}
              img={post.img}
              date={post.date}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Posts;
