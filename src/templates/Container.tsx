import Header from '../components/Header';

interface Props {
  children: React.ReactNode;
}

const styles = {
  container: {
    position: 'relative' as const,
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default function Container({ children }: Props) {
  return (
    <>
      <Header title="Posts App" />

      <div style={styles.container}>{children}</div>
    </>
  );
}
