/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b-4 w-full inline-block border-white-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <a style={{ display: 'flex' }}>
              <span><img src="/images/loqo.png" alt="TG" width={50} height={50} /></span>
              <span className="cursor-pointer font-bold text-4xl text-yellow-600 hover:text-pink-200">TIMZY MOTLEY BLOG</span>
            </a>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-indigo-800 ml-4 font-bold cursor-pointer hover:text-white">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
