import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen bg-charcoal flex flex-col items-center content-center justify-center align-center">
      <div className="align-center w-auto mt-5">
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default Loading;
