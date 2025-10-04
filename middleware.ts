import { auth } from "./auth"

export default auth((req) => {
  // Handle middleware logic
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}