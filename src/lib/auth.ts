import NextAuth from 'next-auth';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
});
