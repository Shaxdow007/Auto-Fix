import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col bg-white">
        <img
          src="./images/bluebgcar.jpg"
          alt="not found"
          className="h-64 w-full object-cover"
        />

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We can't find that page.
            </h1>

            <p className="mt-4 text-gray-500">
              Try searching again, or return home to start from the beginning.
            </p>

            <Link
              to={"/"}
              className="btn mt-6"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
