import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Post {
  author: string;
  date: string;
  description: string;
  img: string;
  text: string;
  title: string;
}

const NewPost = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const imgUrlRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  async function createPostHandler(post: Post) {
    const response = await fetch(
      'https://personal-tech-blog-development-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      descriptionRef.current?.value &&
      imgUrlRef.current?.value &&
      textRef.current?.value &&
      titleRef.current?.value
    ) {
      const post: Post = {
        author: 'Jakub Jurkian',
        date: new Date().toISOString(),
        description: descriptionRef.current?.value,
        img: imgUrlRef.current?.value,
        text: textRef.current?.value,
        title: titleRef.current?.value,
      };
      createPostHandler(post);
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col items-center relative bottom-16 xxs:bottom-20 xs:bottom-28 s:bottom-36 sm:bottom-48 md:bottom-60 mx-auto px-3 md:h-screen lg:py-0">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full xs:w-[430px]">
        <h1 className='text-2xl text-center'>Create a new post</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" id="title" className="form-input" ref={titleRef} />
          <label htmlFor="image" className="form-label smooth-transition-effect">
            ImageURL
          </label>
          <input
            type="text"
            id="image"
            className="form-input smooth-transition-effect"
            ref={imgUrlRef}
          />
          <label htmlFor="" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-input smooth-transition-effect"
            ref={descriptionRef}
          />
          <label htmlFor="" className="form-label">
            Text
          </label>
          <textarea id="text" className="form-input smooth-transition-effect" ref={textRef} />
          <button
            type="submit"
            className="w-full mt-5 text-white bg-blue-600 hover:bg-blue-500 smooth-transition-effect focus:ring-2 focus:outline-none focus:ring-[#1e40af] font-medium rounded-lg text-base px-5 py-2.5 text-center"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
