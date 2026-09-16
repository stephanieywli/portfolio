"use client";

export const StampButton = () => (
  <button
    onClick={() => window.location.reload()}
    className="text-sm hover:no-underline cursor-pointer text-accent font-mono border px-0.75 hover:text-off-white hover:bg-accent"
  >
    李
  </button>
);
