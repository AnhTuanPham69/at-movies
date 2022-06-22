import { useRef, useEffect } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import logo from '../../assets/tmovie.png';
import Image from 'next/image';
import { MovieSearch } from '../movie-grid/MovieGrid';

const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
];

export default function Header(props) {
  const { asPath } = useRouter();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === asPath);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef?.current?.classList.add('shrink');
      } else {
        headerRef?.current?.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <ul className="logo">
          <li>
            <Image
              layout="intrinsic"
              width={50}
              height={50}
              src={logo}
              alt="Logo AT-movies Web site"
            />
          </li>
          <li>
            <Link href="/">
              <a>AT-Movies</a>
            </Link>
          </li>
          <li>
            <div className="search">
              <MovieSearch category="movie" keyword={props.keyword} />
            </div>
          </li>
        </ul>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? 'active' : ''}`}>
              <Link href={e.path}>
                <a>{e.display}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// export default Header;
