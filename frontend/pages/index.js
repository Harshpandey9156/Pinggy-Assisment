import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default function Home() {
    return (
        <div>
            <h1>Post Submission</h1>
            <PostForm />
            <h2>Posts</h2>
            <PostList />
        </div>
    );
}
