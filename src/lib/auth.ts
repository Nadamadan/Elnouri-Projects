import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// TODO: PLACEHOLDER TYPE
interface AuthUser {
	id: number;
	name: string;
	email: string;
	access_token: string;
}

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				mobile: {
					label: "Mobile",
					type: "text",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials, req) {
				const mobile = credentials?.mobile as string;
				const password = credentials?.password as string;
				const lang = (req.query?.lang as Lang) ?? "en";

				// TODO: Implement the API call
				const user =
					mobile === "1234567890" && password === "Asd@1234"
						? {
								id: "123",
								name: "John Doe",
								email: "",
								access_token: "123",
							}
						: null;

				return user;
			},
		}),
	],
	session: {
		maxAge: 60 * 60 * 24,
	},
	callbacks: {
		async jwt({ token, user, trigger, session }) {
			if (trigger === "update") {
				return { ...token, ...session?.user };
			}

			return { ...token, ...user };
		},
		async session({ session, token }) {
			if (token) {
				session.user.access_token = token.access_token;
			}
			return session;
		},
	},
};

declare module "next-auth" {
	interface User extends AuthUser {
		id?: string;
	}
	interface Session {
		user: AuthUser;
	}
}

declare module "next-auth/jwt" {
	interface JWT extends AuthUser {}
}
