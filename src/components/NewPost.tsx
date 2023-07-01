const NewPost = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

  };

  return (
    <div className="flex flex-col items-center relative bottom-16 xxs:bottom-20 xs:bottom-28 s:bottom-36 sm:bottom-48 md:bottom-60 mx-auto px-3 md:h-screen lg:py-0">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full xs:w-[430px]">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" id="title" className="form-input" />
          <label htmlFor="image" className="form-label">ImageURL</label>
          <input type="text" id="image" className="form-input" />
          <label htmlFor="" className="form-label">Description</label>
          <textarea id="description" className="form-input" />
          <label htmlFor="" className="form-label">Text</label>
          <textarea id="text" className="form-input"/>
          <button
              type="submit"
              className="w-full mt-3 text-white bg-[#2057cd] hover:bg-[#1d4ed8] focus:ring-2 focus:outline-none focus:ring-[#1e40af] font-medium rounded-lg text-base px-5 py-2.5 text-center"
            >
              Create
            </button>
            {/* modify new post design */}
        </form>
        </div>
    </div>
  );
};

export default NewPost;
