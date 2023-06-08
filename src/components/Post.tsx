import { Link } from 'react-router-dom';

function Post(props: {
  title: string;
  description: string;
  date: string;
  img: string;
  link: string;
}) {
  return (
    <Link to={props.link}>
      <div className="flex flex-col gap-5 p-6 bg-[#141b2b] rounded-xl shadow-lg">
        <header className="flex justify-between">
          <h2 className='text-xl'>{props.title}</h2>
          <small>{props.date}</small>
        </header>
        <img src={props.img} alt={props.title} />
        <p>{props.description}</p>
      </div>
    </Link>
  );
}

export default Post;
