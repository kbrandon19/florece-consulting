import Link from "next/link";
import React from "react";

function notFound() {
  return (
    <div className=" w-full h-screen bg-charcoal flex justify-center content-center">
      <div className="w-5/6 h-auto  m-auto my-28 text-left break-words font-semibold max-w-7xl flex flex-col gap-16">
        <div>
          <p className="hero-text text-white text-5xl sm:text-6xl lg:text-8xl 2xl:text-9xl drop-shadow-lg">
            Hmm...something isn&apos;t quite right.
          </p>
        </div>
        <div>
          <p className="text-4xl font-light text-white italic">
            Let&apos;s get you back{" "}
            <Link
              href="/"
              className="hover:text-plum transition-colors hover:underline hover:drop-shadow-sm"
            >
              home
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default notFound;
