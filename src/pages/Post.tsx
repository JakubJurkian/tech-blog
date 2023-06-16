import { useParams } from 'react-router-dom';

function PostPage() {
  const { productId } = useParams();
  return (
    <>
      <h1>Post Page</h1>
    </>
  );
}

export default PostPage;
