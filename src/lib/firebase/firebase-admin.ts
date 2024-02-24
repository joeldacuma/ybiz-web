import { cookies } from "next/headers";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { SessionCookieOptions, getAuth } from "firebase-admin/auth";


export const firebaseApp = 
  getApps().find((it) => it.name === "firebase-admin-app") || initializeApp({
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}, "firebase-admin-app");

export const firebaseAuth = getAuth(firebaseApp);

export async function isUserAuthenticated(session: string | undefined = undefined) {
  const _session = session ?? (await getSession());
  if (!_session) return false;

  try {
    const isRevoked = !(await firebaseAuth.verifySessionCookie(_session, true));
    return !isRevoked;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getCurrentUser() {
  const session = await getSession();

  if (!(await isUserAuthenticated(session))) {
    return null;
  }

  const decodedIdToken = await firebaseAuth.verifySessionCookie(session!);
  const currentUser = await firebaseAuth.getUser(decodedIdToken.uid);

  return currentUser;
}

async function getSession() {
  try {
    return cookies().get("__session")?.value;
  } catch (error) {
    return undefined;
  }
}

export async function createSessionCookie(idToken: string, sessionCookieOptions: SessionCookieOptions) {
  return firebaseAuth.createSessionCookie(idToken, sessionCookieOptions);
}

export async function revokeAllSessions(session: string) {
  const decodedIdToken = await firebaseAuth.verifySessionCookie(session);

  return await firebaseAuth.revokeRefreshTokens(decodedIdToken.sub);
}
