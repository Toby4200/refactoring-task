interface Props {
  page: number;
  handlePageChange: (page: number) => void;
}

const styles = {
  button: { backgroundColor: 'green', color: 'white', padding: '5px 10px' },
};

export default function Pagination({ page, handlePageChange }: Props) {
  return (
    <>
      <p>Current page: {page}</p>

      <button
        style={styles.button}
        onClick={() => handlePageChange(Math.max(page - 1, 1))}
      >
        Previous
      </button>

      <button style={styles.button} onClick={() => handlePageChange(page + 1)}>
        Next
      </button>
    </>
  );
}
