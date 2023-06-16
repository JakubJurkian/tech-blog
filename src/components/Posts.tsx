import PostPreview from './PostPreview';

interface MyObject {
  [key: string]: string;
}
type MyArray = MyObject[];

function Posts(props: { posts: MyArray}) {
  return (
    <section>
      <ul className='flex flex-col gap-5'>
        {props.posts.map((post) => {
          return (
            <PostPreview
              key={post.id}
              link={post.link}
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
