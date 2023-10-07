import type { MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import NewComp from '../NewComp';
import { useLoaderData } from "@remix-run/react";
import { getStoredNotes, storedNotes } from "~/data/notes";
export const meta: MetaFunction = () => {
  return [
    { title: "Remix Course" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// export async function loader({
//   params,
// }: LoaderFunctionArgs) {
//  return json({name:"parag"})
// }

export default function Index() {
  return (
   <div>
      <h1>Hello this is tailwind</h1>
      <NewComp/>
   </div>
  );
}
