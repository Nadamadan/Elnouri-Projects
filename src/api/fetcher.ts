import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { API, type ApiResponse, BACKEND_URL } from ".";

interface FetcherOptions<TB> {
	method?: "GET" | "POST" | "DELETE";
	contentType?: "application/json" | "multipart/form-data";
	body?: TB | FormData | null;
	tags?: Array<string>;
	revalidate?: number;
	lang: Lang;
	protectid?: boolean;
	headers?: HeadersInit;
}

type Key = (typeof API)[keyof typeof API];
type FetcherEndPoint<T extends Key> = T extends (...args: Array<any>) => string
	? ReturnType<T>
	: T;

export const fetcher = async <TR, TB = null>(
	url: FetcherEndPoint<Key>,
	{
		method = "GET",
		lang = "en",
		body = null,
		contentType = "application/json",
		protectid = false,
		revalidate = 3600,
		tags = [],
		headers,
	}: FetcherOptions<TB>,
) => {
	let token = "";

	if (protectid) {
		const session = await getServerSession(authOptions);
		if (!session?.user.access_token) {
			if (!session?.user) {
				const errorMessage =
					lang === "ar" ? "يرجى تسجيل الدخول." : "Please log in.";
				throw new Error(errorMessage);
			}
		}
		token = session?.user.access_token;
	}

	const FULL_URL = BACKEND_URL.concat(url);

	const formatedBody = !body
		? undefined
		: contentType === "application/json"
			? JSON.stringify(body)
			: body instanceof FormData
				? body
				: null;

	let res: Response;
	try {
		res = await fetch(FULL_URL, {
			method,
			body: formatedBody,
			headers: {
				accept: "application/json",
				"Content-Type": contentType,
				"Accept-Language": lang === "ar" ? "ar-EG" : "en-US",
				Authorization: `Bearer ${token}`,
				...headers,
			},
			next: {
				revalidate,
				tags,
			},
		});
	} catch (error: unknown) {
		throw Error(
			error instanceof Error
				? error.message
				: typeof error === "string"
					? error
					: "Unknown error",
		);
	}

	const { statusCode, isSuccess, message, data } =
		(await res.json()) as ApiResponse<TR>;

	if (!isSuccess || !data) {
		console.error({
			url,
			message,
			statusCode,
		});
		throw new FetcherError(message as string);
	}

	return {
		message,
		data,
	};
};

export class FetcherError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "FetcherError";
	}
}
