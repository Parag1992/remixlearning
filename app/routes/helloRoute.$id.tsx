import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react"

export async function loader({
    params,
  }: LoaderFunctionArgs) {
   return json({name:"parag"})
  }

export default function DynamicHello() {
    const {id} = useParams();
    const data = useLoaderData<typeof loader>();
    console.log('data',data)
    return (
        <div>
            <h1>Hello from Dynamic hello route {id} and </h1>
        </div>
    )
}