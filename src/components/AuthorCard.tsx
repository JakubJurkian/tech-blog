function AuthorCard(props: {
  author: string;
  description: string;
  src: string;
  githubLink: string;
}) {
  return (
    <div className="bg-gray-900 flex flex-col p-3 mx-2 rounded-xl shadow-md max-w-lg relative bottom-16 xxs:bottom-20 xs:flex-row xs:p-4 xs:bottom-28 s:m-auto sm:bottom-36 sm:px-6 md:w-4/5 xl:max-w-xl">
      <img
        src={props.src}
        alt="author"
        width="148"
        className="self-center shadow-md rounded-lg my-2 xs:mr-6 s:w-40 xl:w-44"
      />
      <div className="text-center">
        <h2 className="text-2xl">{props.author}</h2>
        <a
          target="_blank"
          href={props.githubLink}
          className="text-blue-500 font-medium text-xs my-4"
        >
          <p className="inline-block text-sm hover:underline">GITHUB</p>
          <br />
          <img
            src="./github-logo.svg"
            alt="github logo"
            width="24"
            className="inline-block mb-2"
          />
        </a>
        <p className="xl:text-lg">{props.description}</p>
      </div>
    </div>
  );
}

export default AuthorCard;
