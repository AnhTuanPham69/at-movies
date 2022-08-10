import React, { useCallback, useEffect, useState } from 'react';

import tmdbApi from '../../pages/api/tmdbApi';
import apiConfig from '../../pages/api/apiConfig';

import CastList from './CastList';

import MovieList from '../movie-list/MovieList';
import Player from './Player';
import { embedMovie } from '../../constants/embed';
import { useRouter } from 'next/router';

const Detail = ({ renderTitle }) => {
  const router = useRouter();
  const { mid, category } = router.query;
  const [item, setItem] = useState(null);
  const [videoUrl, setVideoUrl] = useState();

  useEffect(() => {
    const getDetail = async () => {
      if (mid || category) {
        const response = await tmdbApi.detail(category, mid, { params: {} });
        setItem(response);
      }
      mid && setVideoUrl(embedMovie(mid));
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, mid]);

  useEffect(() => renderTitle(item?.title ?? item?.name), [item, renderTitle]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path,
              )})`,
            }}
          ></div>

          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path,
                  )})`,
                }}
              ></div>
            </div>

            <div className="movie-content__info">
              <div className="section mb-3">
                <h1 className="title">{item.title ?? item.name}</h1>
                {videoUrl && <Player src={videoUrl} />}
              </div>
              <div className="section mb-3">
                <div className="genres">
                  {item.genres &&
                    item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="genres__item">
                        {genre.name}
                      </span>
                    ))}
                </div>
                <br />
                <p className="overview">{item.overview}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
