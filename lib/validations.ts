"use client";
import { z } from "zod";

// eslint-disable-next-line no-unused-vars
export const QuestionsSchema = z.object({
  title: z.string().min(5).max(100),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(1).max(15)).min(1).max(5),
});
