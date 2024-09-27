import React from 'react'
import { navigateLeft, navigateRight } from './navigation';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date()
  return (
<>
<footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center text-teal-600 sm:justify-start">
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="176"
                  height="40"
                  fill="none"
                  viewBox="0 0 176 40"
                >
                  <path
                    fill="#283841"
                    fill-rule="evenodd"
                    d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#283841"
                    d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  ></path>
                </svg>
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
          cum itaque neque.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="capitalize text-lg font-medium text-gray-900">Reach to us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
              1271 chrifia tasoultante marrakech
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                +21262348080
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                autosud@gmail.com
              </a>
            </li>

          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="capitalize text-lg font-medium text-gray-900">Quick links</p>

          <ul className="mt-8 space-y-4 text-sm">
          {navigateLeft.map((nav, index) => {
                    const { page, url } = nav;
                    return (
                      <li key={index}>
                      <Link to={url} className="capitalize text-gray-700 transition hover:text-gray-700/75" href="#">
                        {page}
                      </Link>
                    </li>
                    );
                  })}
              {navigateRight.map((nav, index) => {
                const { page, url } = nav;
                return (
                  <li key={index}>
                  <Link to={url} className="capitalize text-gray-700 transition hover:text-gray-700/75" href="#">
                    {page}
                  </Link>
                </li>
                );
              })}
            
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="capitalize text-lg font-medium text-gray-900">opening hours</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
                <span className="text-gray-700">Mon-Sat : 9:00 - 18:00</span>
            </li>
            <li>
                <span className="text-gray-700">Sun : closing</span>
            </li>

            
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">All rights reserved . </span>

          <span
            className="inline-block text-red-600  transition hover:text-red-600/75"
          >
            Made by SHX007
          </span>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; {year.getFullYear()} AutoSud</p>
      </div>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer
