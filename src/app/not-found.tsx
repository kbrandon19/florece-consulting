import Link from "next/link";
import React from "react";

function notFound() {
  return (
    <div className=" w-full h-100vh bg-charcoal flex justify-center content-center">
      <div className="w-5/6 h-auto  m-auto my-28 text-left break-words font-semibold max-w-7xl flex flex-col gap-16">
        <div>
          <p className="hero-text text-seaSalt text-5xl sm:text-6xl lg:text-8xl 2xl:text-9xl drop-shadow-lg">
            Hmm...something isn&apos;t quite right.
          </p>
        </div>
        <div>
          <p className="text-4xl text-seaSalt italic">
            Let&apos;s get you back{" "}
            <Link
              href="/"
              className="hover:text-accent-appricot transition-colors hover:drop-shadow-sm"
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
