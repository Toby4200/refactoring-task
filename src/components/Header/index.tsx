interface Props {
  title: string;
}

const styles = {
  header: {
    color: 'blue',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    padding: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
};

export default function Header({ title }: Props) {
  return (
    <div style={styles.header}>
      <span style={styles.title}>{title}</span>
    </div>
  );
}
