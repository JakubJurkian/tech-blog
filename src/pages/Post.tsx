import { useParams } from 'react-router-dom';
import Post from '../components/Post';

function PostPage() {
  const { productId } = useParams();
  return (
    <div className='bg-slate-500 inline-block'>
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
