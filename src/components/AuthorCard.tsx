import classes from './AuthorCard.module.css';

function AuthorCard(props: { author: string; description: string, src: string }) {
  return (
    <div
      className={`${classes['bg-card']} flex py-4 px-3 xxs:px-5 xs:p-5 xxs:bottom-20 xs:bottom-28 sm:bottom-36 sm:px-8 md:w-4/5 max-w-lg m-auto rounded-xl shadow-md relative bottom-16`}
    >
      <img
        src={props.src}
        alt="author"
        width="148"
        className="rounded-lg mr-6 xxs:mr-8 xs:w-40 sm:w-44"
      />
      <div className="text-center w-full">
        <h2 className="text-xl xs:text-2xl ">{props.author}</h2>
        <a
          target="_blank"
          href="https://github.com/JakubJurkian"
          className="text-blue-500 font-medium text-xs hover:underline my-4 align-middle"
        >
          <p className="inline-block text-sm">GITHUB</p>
          <br />
          <img
            src="./github-logo.svg"
            alt="github logo"
            width="24"
            className="inline-block mb-1"
          />
        </a>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default AuthorCard;
