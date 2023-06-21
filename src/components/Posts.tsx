import { useDispatch } from 'react-redux';
import PostPreview from './PostPreview';
import { howManyPosts } from '../store/postsSlice';

interface MyObject {
  [key: string]: string;
}
type MyArray = MyObject[];

function Posts(props: { posts: MyArray}) {
  const dispatch = useDispatch();
  dispatch(howManyPosts(props.posts.length))

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
