import React from 'react';

import Button from '../button/Button';

import { category } from '../../pages/api/tmdbApi';
import apiConfig from '../../pages/api/apiConfig';
import { useRouter } from 'next/router';

const MovieCard = (props) => {
  const router = useRouter();
  const item = props.item;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <div
      onClick={() => {
        router.push({
          pathname: '/[category]/details/[mid]',
          query: {
            category: category[props.category],
            mid: item.id,
          },
        });
      }}
    >
      <a>
        <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
          <Button>
            <i className="bx bx-play"></i>
          </Button>
        </div>
        <h3>{item.title || item.name}</h3>
      </a>
    </div>
  );
};

export default MovieCard;
