import { redirect } from "react-router";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  // This function's only job is to send the user to the default grid page.
  return redirect("/profile/posts/grid");
}