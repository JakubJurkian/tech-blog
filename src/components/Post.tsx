export default function Post(props: {
  author: string;
  title: string;
  img: string;
  text: string;
}) {
  return (
    <div>
      <div>{props.author}</div>
      <h1>{props.title}</h1>
      <img src={props.img} />
      <p>{props.text}</p>
    </div>
  );
}
