import {
    Form,
    redirect,
    useActionData,
    useNavigation,
  } from "react-router";
  import type { LoaderFunctionArgs } from "react-router";
  import { api } from "~/services/api";
  
  export async function action({ request }: LoaderFunctionArgs) {
    const formData = await request.formData();
    const file = formData.get("file");
    const caption = formData.get("caption");
    const data = new FormData();
    if (file) {
      data.append("file", file);
    }
    if (caption) {
      data.append("caption", caption);
    }
  
    try {
      await api.post("/posts", data);
      return redirect("/home");
    } catch (error) {
      return {
        success: false,
        message: "Failed to create post. Please try again.",
      };
    }
  }
  
  export default function CreatePost() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const actionData = useActionData() as { success: boolean; message: string } | undefined;
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Create a new post</h2>
        <Form method="post" encType="multipart/form-data" className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Caption:</span>
            <textarea
              name="caption"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows={3}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Image:</span>
            <input
              type="file"
              name="file"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-blue-700 hover:file:bg-gray-100"
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            {isSubmitting ? "Posting..." : "Share Post"}
          </button>
        </Form>
        {actionData && !actionData.success && (
          <p className="text-red-500 mt-4">{actionData.message}</p>
        )}
      </div>
    );
  }