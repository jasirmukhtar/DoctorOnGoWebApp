// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = "jsonwebtoken_secret_key";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("jwt_token");
//   const { pathname } = req.nextUrl;

//   // Define the routes that need protection
//   const protectedRoutes = [
//     "/patients/[userId]/new-appointment",
//     "/patients/[userId]/register",
//   ];

//   // If the request is for a protected route
//   if (protectedRoutes.some((route) => pathname.startsWith(route))) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/", req.url)); // No token, redirect to home
//     }

//     try {
//       const decodedToken = jwt.verify(token, JWT_SECRET); // Decode and verify the token
//       const userIdFromToken = decodedToken.id;

//       // Extract userId from the URL path (e.g., "/patients/[userId]/new-appointment")
//       const urlParts = pathname.split("/");
//       const userIdFromUrl = urlParts[2]; // Assuming userId is the 2nd part of the URL

//       // Check if the userId in the token matches the userId in the URL
//       if (userIdFromToken !== userIdFromUrl) {
//         return NextResponse.redirect(new URL("/", req.url)); // Unauthorized, redirect to home
//       }

//       return NextResponse.next(); // Allow access if the token and userId match
//     } catch (error) {
//       // If token is invalid, redirect to home
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   }

//   // Allow all other requests to proceed
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/patients/:path*"], // Apply this middleware to all /patients routes
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "jsonwebtoken_secret_key";

// Define the protected routes as a Set for O(1) lookup
const protectedRoutes = new Set([
  "/patients/[userId]/new-appointment",
  "/patients/[userId]/register",
]);

export function middleware(req: NextRequest) {
  const token = req.cookies.get("jwt_token");
  const { pathname } = req.nextUrl;

  // Return early if the route is not protected
  if (![...protectedRoutes].some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Redirect if no token is found for protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    // Decode and verify the token
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userIdFromToken = decodedToken.id;

    // Extract userId from the URL path (e.g., "/patients/[userId]/new-appointment")
    const userIdFromUrl = pathname.split("/")[2]; // Assuming userId is at index 2

    // Check if the userId in the token matches the userId in the URL
    if (userIdFromToken !== userIdFromUrl) {
      return NextResponse.redirect(new URL("/", req.url)); // Unauthorized, redirect to home
    }

    // Allow access if the token and userId match
    return NextResponse.next();
  } catch (error) {
    // If token is invalid, redirect to home
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/patients/:path*"], // Apply this middleware to all /patients routes
};
