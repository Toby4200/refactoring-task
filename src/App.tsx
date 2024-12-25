import Pagination from './components/Pagination';
import Select from './components/Select';
import Posts from './components/Posts';
import usePostsQuery from './hooks/usePostsQuery';
import Container from './templates/Container';
import Loader from './components/Loader';

const App = () => {
  const { data, loading, limit, page, handleLimitChange, handlePageChange } =
    usePostsQuery();

  return (
    <Container>
      {loading && <Loader />}

      <Select limit={limit} handleLimitChange={handleLimitChange} />

      {data ? <Posts posts={data} /> : <p>Posts Loading...</p>}

      <Pagination page={page} handlePageChange={handlePageChange} />
    </Container>
  );
};

export default App;
