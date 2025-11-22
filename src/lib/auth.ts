import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt({ token, account }) {
      if (account !== null && account !== undefined) {
        token.idToken = account.id_token;
      }

      return token;
    },
    session({ session, token }) {
      session.user.idToken = token.idToken;

      return session;
    },
  },
});
