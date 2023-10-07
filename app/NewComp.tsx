import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { json } from "@remix-run/node";
// export async function loader({
//     params,
//   }: LoaderFunctionArgs) {
//    return json({name:"parag"})
//   }

export default function newcomp(){
    const navigate = useNavigate();
    //const data = useLoaderData<typeof loader>();
    //console.log('data',data)
    const navme = () =>{
        console.log('btn clicked')
        navigate("/workbench")
    }

    return(
        <>
        <form method="post" action="/helloRoute">
            <label>Name</label>
            <input type="text" name="nmtxt" style={{backgroundColor:'lightblue',borderRadius:'2px'}}/><br/>

            <button>Click</button><br/>
        </form>
        </>
    )
}