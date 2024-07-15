import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { type DefaultSession } from "next-auth"
// import { getUserByUsername } from "@/lib/airtable";
import { JWT } from "next-auth/jwt"
import { getSession } from "next-auth/react";

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        first_name?: string,
        last_name?: string,
        phone?: string,
        country?: string,
        state?: string,
        address?: string,
        transactions?: string[],
        account_number?: number,
        balance?: number,
        bonus?: number,
        dob?: string,
        username?: string,
        id?: string,
    }
}

declare module "next-auth" {
    /**
     * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */

    interface Session {
        user: {
            /** The user's postal address. */
            first_name?: string,
            last_name?: string,
            phone?: string,
            country?: string,
            state?: string,
            address?: string,
            img?: string,
            transactions?: any,
            account_number?: number,
            balance?: number,
            bonus?: number,
            email?: string,
            dob?: string,
            username?: string,
            id?: string,
            /**
             * By default, TypeScript merges new interface properties and overwrites existing ones.
             * In this case, the default session user properties will be overwritten,
             * with the new ones defined above. To keep the default session user properties,
             * you need to add them back into the newly declared interface.
             */
        } & DefaultSession["user"]
    }

    interface User {
        first_name?: string,
        last_name?: string,
        phone?: string,
        country?: string,
        state?: string,
        address?: string,
        img?: string,
        transactions?: any,
        account_number?: number,
        balance?: number,
        bonus?: number,
        dob?: string,
        username?: string,
    }
}



const config = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.AUTH_SECRET,
    providers: [Credentials({
        name: 'credentials',
        credentials: {
            email: {},
            code: {}
        },
        authorize: async (credentials) => {
            try {
                const response = await fetch(`https://crestbankplc.vercel.app/api/verify`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        email: credentials.email,
                        code: credentials.code
                    })
                });
                const json = await response.json()
                const user = json.user;
                return user;

            } catch (error) {
                console.error('Error in authorize:', error);
                return null;
            }

        }
    })],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.dob = user.dob
                token.first_name = user.first_name
                token.last_name = user.last_name
                token.address = user.address
                token.account_number = user.account_number,
                    token.balance = user.balance
                token.bonus = user.bonus
                token.username = user.username
                token.country = user.country
                token.picture = user.img
                token.transactions = user.transactions
                token.phone = user.phone
                token.state = user.state
                token.id = user.id
            }
            return token
        },
        session({ session, token }) {
            if (token) {
                session.user.first_name = token.first_name
                session.user.last_name = token.last_name
                session.user.dob = token.dob
                session.user.address = token.address
                session.user.account_number = token.account_number
                session.user.balance = token.balance
                session.user.bonus = token.bonus
                session.user.username = token.username
                session.user.country = token.country
                session.user.transactions = token.transactions
                session.user.phone = token.phone
                session.user.state = token.state
                session.user.id = token.id as string
            }
            return session
        }
        // authorized: async ({ request, auth }) => {
        //     const { pathname } = request.nextUrl;

        //     const protectedPaths = [
        //         '/dashboard',
        //         '/dashboard/withdraw',
        //         '/dashboard/settings',
        //         '/dashboard/transfer',
        //     ];

        //     if (protectedPaths.includes(pathname)) {
        //         return !!auth;
        //     }

        //     // Allow access to other paths
        //     return true;
        // },
    }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config)