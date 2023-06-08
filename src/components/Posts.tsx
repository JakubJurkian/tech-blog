import SearchInput from "./SearchInput";

function Posts() {
  return <main className="max-w-3xl mx-2 md:m-auto">
    <section>
        <div className="flex justify-between">
            <code>Posts</code>
            <code>{2} posts</code>
        </div>
        <SearchInput />
    </section>
  </main>
}

export default Posts;
