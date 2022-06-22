import React from 'react';

import Link from 'next/link';

import logo from '../../assets/tmovie.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content container">
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link href="/">Home</Link>
            <Link href="https://github.com/AnhTuanPham69">Contact us</Link>
            <Link href="https://github.com/AnhTuanPham69">
              Term of services
            </Link>
            <Link href="https://github.com/AnhTuanPham69">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link href="/">Live</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Premium</Link>
            <Link href="/">Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link href="https://github.com/AnhTuanPham69">My Github</Link>
            <Link href="https://join.skype.com/invite/vbowtxWoUj1H">
              My Skype
            </Link>
            <Link href="https://www.linkedin.com/in/anh-tu%E1%BA%A5n-ph%E1%BA%A1m-3b043921b/">
              My Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
