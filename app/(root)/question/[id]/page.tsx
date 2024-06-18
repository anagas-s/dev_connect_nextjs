import { getQuestionById } from "@/lib/actions/question.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params, searchParams }) => {
  const result = await getQuestionById({ questionId: params.id });
  console.log(result.author);
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div>
          <Link href={`/profile/${result.author.clerkId}`}>
            <Image
              src={result.author.picture}
              alt="profile"
              className="rounded-full"
              width={36}
              height={36}
            />
            <p className="paragraph-semibold text-dark300_light700">
              {result.author.name}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
