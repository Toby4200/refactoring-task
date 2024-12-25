import { renderHook, act } from '@testing-library/react';
import usePostsQuery from './usePostsQuery';

// Mock useFetch
jest.mock('./useFetch', () => ({
  __esModule: true,
  default: () => ({
    data: [
      { id: 1, title: 'Post 1', body: 'Body 1' },
      { id: 2, title: 'Post 2', body: 'Body 2' },
    ],
    loading: false,
  }),
}));

describe('usePostsQuery', () => {
  const mockPushState = jest.fn();

  beforeEach(() => {
    // Clear mocks
    jest.clearAllMocks();

    // Mock window.location
    Object.defineProperty(window, 'location', {
      value: new URL('http://localhost'),
      writable: true,
    });

    // Mock history.pushState
    Object.defineProperty(window.history, 'pushState', {
      value: mockPushState,
      writable: true,
    });
  });

  it('initializes with default values', () => {
    const { result } = renderHook(() => usePostsQuery());

    expect(result.current.page).toBe(1);
    expect(result.current.limit).toBe(10);
    expect(result.current.data).toHaveLength(2);
    expect(result.current.loading).toBe(false);
  });

  it('updates limit when handleLimitChange is called', async () => {
    const { result } = renderHook(() => usePostsQuery());

    await act(async () => {
      result.current.handleLimitChange(20);
    });

    expect(result.current.limit).toBe(20);
  });

  it('initializes with page from URL if present', () => {
    // Set URL with page parameter
    Object.defineProperty(window, 'location', {
      value: new URL('http://localhost?page=3'),
      writable: true,
    });

    const { result } = renderHook(() => usePostsQuery());

    expect(result.current.page).toBe(3);
  });
});
