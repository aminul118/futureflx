import Link from "next/link";
import React from "react";
const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Page not Found</h1>
      <Link
        className="btn btn-outline border-0 border-b-4 w-40 bg-slate-300"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
