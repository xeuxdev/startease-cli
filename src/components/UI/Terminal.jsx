import { useEffect, useState } from "react";
import { Code } from "@nextui-org/code";
import { Typography } from "@/components";

const Terminal = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div className="grid  bg-gray-900 border-2 border-gray-500 rounded-xl px-2 ">
      <span className="flex justify-between border-b-2 py-3 px-4 border-gray-500">
        <Typography variant="p.medium">Terminal</Typography>
        <button onClick={handleCopyClick}>
          {isCopied ? (
            <Typography variant="p.medium">Copied!</Typography>
          ) : (
            <Typography variant="p.medium">Copy</Typography>
          )}
        </button>
      </span>
      <div className="py-4">
        <Code color="primary">
          <span className=" text-md font-bold  text-purple-200">&#62;</span>{" "}
          {code}
        </Code>
      </div>
    </div>
  );
};

export default Terminal;
