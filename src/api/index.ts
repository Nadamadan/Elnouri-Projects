import { env } from "@/env";

export * from "./fetcher";
export * from "./types";
export * from "./endpoints";

export const BACKEND_URL = env.NEXT_PUBLIC_BACKEND_URL;
