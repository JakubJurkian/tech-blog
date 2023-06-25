export default function Post(props: {
  author: string;
  addedXAgo: string;
  title: string;
  img: string;
  text: string;
}) {
  window.scrollTo(0, 0);
  return (
    <div className="flex flex-col w-[98%] max-w-screen-lg bg-[#04031c6e] rounded-2xl shadow-lg overflow-hidden">
      <div className="flex justify-between">
        <span className="p-2 self-start text-sm xxs:text-base bg-[#5c37b0] rounded-b-md">Author: {props.author}</span>
        <span className="p-2 self-start text-sm xxs:text-base bg-[#5c37b0] rounded-b-md">Added: {props.addedXAgo}</span>
      </div>
      <h1 className="text-2xl s:text-3xl md:text-4xl self-center my-4">{props.title}</h1>
      <img src={props.img} />
      <p className="text-lg m-4">{props.text}</p>
    </div>
  );
}
