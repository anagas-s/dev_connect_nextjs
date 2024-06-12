import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: 1,
    title: "How do I use express as a custom server in nextjs?",
  },
  {
    _id: 2,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    _id: 3,
    title: "Is it only me or the font is bolder than necessary?",
  },
  {
    _id: 4,
    title: "Redux vs Recoil as state management tool",
  },
];

const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 2, name: "react", totalQuestions: 7 },
  { _id: 3, name: "nodejs", totalQuestions: 10 },
  { _id: 4, name: "golang", totalQuestions: 6 },
  { _id: 5, name: "python", totalQuestions: 3 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]  custom-scrollbar">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => {
            return (
              <Link
                href={`/questions/${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron_right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {popularTags.map((tag) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
