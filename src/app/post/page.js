import Link from "next/link";


const PostPage = async() => {
    const res = await fetch("http://localhost:5000/post",{
      cache: "no-store"
    });
    const posts = await res.json();
    console.log(posts)
    return (
        <div className="w-full">
            <h1>This is a post page: {posts.length}</h1>
            {
                posts.map(post => <div key={post.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <h2 className="card-title">Like: {post.count}</h2>
                  <div className="card-actions justify-end">
                    <Link href={`post/${post.id}`}>
                    <button className="btn btn-primary">See more</button>
                    </Link>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default PostPage;