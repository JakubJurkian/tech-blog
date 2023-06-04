import classes from './Home.module.css';

function HomePage() {
  return (
    <div className="flex flex-col relative">
      <div
        className={`${classes['bg-card']} flex py-4 px-3 xxs:px-5 xs:p-5 xxs:bottom-20 xs:bottom-28 sm:bottom-36 sm:px-8 md:w-3/5 max-w-lg m-auto rounded-xl shadow-md relative bottom-16`}
      >
        <img
          src="./me.jpg"
          alt=""
          width="148"
          height="148"
          className="rounded-lg mr-6 xxs:mr-8 xs:w-40 sm:w-44"
        />
        <div className="text-center w-full">
          <h2 className="text-xl xs:text-2xl ">Jakub Jurkian</h2>
          <a
            target="_blank"
            href="https://github.com/JakubJurkian"
            className="text-blue-500 font-medium align-middle"
          >
            GITHUB
          </a>
          <p>...description</p>
          {/* github etc icons and links */}
        </div>
      </div>
      <div>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default HomePage;
