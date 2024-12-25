import { useState } from 'react';

interface Props {
  limit: number;
  handleLimitChange: (limit: number) => void;
}

const OPTIONS = [5, 10, 15, 20];

const styles = {
  options: { padding: '5px 10px', marginBottom: '2rem' },
};

export default function Select({ limit, handleLimitChange }: Props) {
  return (
    <>
      <label htmlFor="recordsPerPage">Records per page: </label>

      <select
        id="recordsPerPage"
        style={styles.options}
        value={limit}
        onChange={(e) => handleLimitChange(Number(e.target.value))}
      >
        {OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
