import { capitalizeFirstLetter } from '../../utils/string';

interface PostProps {
  title: string;
  body: string;
}

const styles = {
  padding: '10px',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  listStyle: 'none',
  marginBottom: '10px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textTransform: 'none' as const,
  },
};

export default function PostCard({ title, body }: PostProps) {
  return (
    <div style={styles}>
      <h3 style={styles.title}>{capitalizeFirstLetter(title)}</h3>

      <p>{body}</p>
    </div>
  );
}
