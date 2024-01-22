import Link from 'next/link';
import React from 'react';

export async function generateStaticParams() {
    const res = await fetch(`http://localhost:5000/post`);
    const posts = await res.json();
    const ids = posts.map(post =>{
        return {
            id: post.id + '',
        }
    })
    console.log(ids)
    return ids
  }

const PostDetails = async ({ params }) => {
    // console.log(params)
    const res = await fetch(`http://localhost:5000/post/${params.id}`);
    const post = await res.json();
    return (
        <div>
            <h2>This is Post Details</h2>
            <div className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <h2 className="card-title">Like: {post.count}</h2>
                    <div className="card-actions justify-end">
                        <Link href={`/post`}>
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostDetails;