import React, { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
const GlobalResult = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="absolute top-full z-10 mt-3 w-full bg-light-800 py-5 shadow-sm dark:bg-dark-400 rounded-xl">
      <p className="text-dark400_light900 paragraph-semibold px-5">Filters</p>
      <div className="my-5 h-px bg-light-700/50 dark:bg-dark-500/50"></div>
      <div className="space-y-5">
        <p className="text-dark400_light900 paragraph-semibold px-5">
          Top Match
        </p>

        {isLoading ? (
          <div className="flex-center flex-col px-5">
            <ReloadIcon className="my-2 size-10 animate-spin text-primary-500" />
            <p className="text-dark200_light800 body-regular">
              Browsing the entire databse
            </p>
          </div>
        ) : (
          <div>Content</div>
        )}
      </div>
    </div>
  );
};

export default GlobalResult;
