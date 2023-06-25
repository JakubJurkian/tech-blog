import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function PostPage() {
  const { postId } = useParams();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const post = posts.filter(post => post.id === postId);
  console.log(post);
  return (
    <div className="flex justify-center relative bottom-20 xxs:bottom-24 xs:bottom-32 s:bottom-40 sm:bottom-48 md:bottom-56">
      <Post
        author={post[0].author}
        addedXAgo={post[0].addedXAgo}
        title={post[0].title}
        img={post[0].img}
        text={post[0].text}
      />
    </div>
  );
}

export default PostPage;
