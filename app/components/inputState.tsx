"use client";
import { useState, ChangeEvent, memo } from "react";

const ImportState = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    const mediumCacheLink = "http://webcache.googleusercontent.com/search?q=cache:";
    const mediumCacheEnding = "&strip=1&vwsrc=0";
    window.open(mediumCacheLink + inputValue + mediumCacheEnding, "_blank");
    setInputValue("");
  };
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-3 py-2 mt-2 text-black"
      />
      <button
        onClick={handleButtonClick}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 ${
          inputValue === "" ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"
        } `}
      >
        Go now
      </button>
    </>
  );
};
export default memo(ImportState);
