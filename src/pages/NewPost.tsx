import NewPost from "../components/NewPost";

function NewPostPage() {
  const handleSave = (content: string) => {
    console.log(content);
  }

  return (
    <>
      <NewPost onSave={handleSave} />
    </>
  );
}

export default NewPostPage;
