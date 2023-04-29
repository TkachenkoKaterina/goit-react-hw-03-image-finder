import React from 'react';
import { LoadMore } from './Button.styled';

export const Button = ({ onClick, page, isLoading }) => {
  return (
    <LoadMore
      type="button"
      onClick={() => onClick(page + 1)}
      disabled={isLoading}
    >
      <span>Load More</span>
    </LoadMore>
  );
};
