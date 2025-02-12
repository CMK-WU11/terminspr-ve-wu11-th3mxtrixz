import { NextResponse } from "next/server";

export function middleware(request) {
    if (!request.cookies.has("token") || !request.cookies.has("uid")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config = {
    matcher: ["/calendar"],
};

// Ved brug af Middleware sikre jeg mig at hvis brugeren ikke er logget ind, kan de ikke interagere med kalendersiden.
