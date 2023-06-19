export default function Post(props: {
  author: string;
  title: string;
  img: string;
  text: string;
}) {
  return (
    <div className="flex flex-col w-11/12 max-w-screen-lg bg-[#04031c2e] rounded-2xl shadow-lg">
      <div className="p-2 self-start text-lg bg-[#5c37b0] mb-3 rounded-b-md">Author: {props.author}</div>
      <h1 className="text-2xl s:text-3xl md:text-4xl self-center mb-3">{props.title}</h1>
      <img src={props.img} />
      <p className="text-lg m-4">{props.text}</p>
    </div>
  );
}
