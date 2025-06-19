
import React from "react";


export default function ComicStrip() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
      {/* Panel 1 */}
      <div className="w-full md:w-1/3">
        <img
          src="https://yourdomain.com/image1.png" // ⬅️ replace this URL
          alt="Panel 1"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Panel 2 */}
      <div className="w-full md:w-1/3">
        <img
          src="https://yourdomain.com/image2.png" // ⬅️ replace this URL
          alt="Panel 2"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Panel 3 */}
      <div className="w-full md:w-1/3">
        <img
          src="https://yourdomain.com/image3.png" // ⬅️ replace this URL
          alt="Panel 3"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
