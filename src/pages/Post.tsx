import { useParams } from 'react-router-dom';
import Post from '../components/Post';

function PostPage() {
  const { postId } = useParams();
  return (
    <div className='flex justify-center relative bottom-20 xxs:bottom-24 xs:bottom-32 s:bottom-40 sm:bottom-48 md:bottom-56'>
      <Post
        title="A new technology"
        img="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
        text="This text is about a new technology"
        author="Jakub Jurkian"
      />
    </div>
  );
}

export default PostPage;
