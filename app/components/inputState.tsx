"use client";
import { useState, ChangeEvent, memo } from "react";
import ReaderView from "react-reader-view";

const ImportState = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [cachedContent, setCachedContent] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = async () => {
    // try {
    //   const response = await fetch(`/api?link=${inputValue}`);
    //   const data = await response.text();
    //   setCachedContent(data);
    //   setInputValue("");
    // } catch (error) {
    //   console.error("Error fetching content:", error);
    // }
    const mediumCacheLink = "https://webcache.googleusercontent.com/search?q=cache:";
    const mediumCacheEnding = "&strip=1&vwsrc=0";
    const finalLink = mediumCacheLink + inputValue + mediumCacheEnding;
    // window.open(finalLink, "_blank");
    setCachedContent(finalLink);
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
      {cachedContent !== "" ? (
        <ReaderView
          url={cachedContent}
          css={`
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                "Helvetica Neue", sans-serif;
            }
          `}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default memo(ImportState);
