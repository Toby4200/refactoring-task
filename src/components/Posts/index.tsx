import PostCard from '../PostCard';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: PostProps[];
}

const styles = {
  container: {
    position: 'relative' as const,
    minHeight: '200px',
  },
};

export default function PostsList({ posts }: Props) {
  if (posts.length === 0) {
    return <h3>No posts found</h3>;
  }

  return (
    <div style={styles.container}>
      {posts?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
