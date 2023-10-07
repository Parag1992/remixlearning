import { Outlet } from "@remix-run/react";
import NewComp from '../NewComp';
import { getStoredNotes, storedNotes } from "~/data/notes";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
export async function action({request,}:ActionFunctionArgs) {
    
    const formdata =await request.formData();
    
    const noteData = {
       fname:formdata.get('nmtxt')
    }
    const existingNotes = await getStoredNotes();
    const updatedNotes = existingNotes.concat(noteData);
    await storedNotes(updatedNotes);
    return redirect('/workbench');
  }

export default function Hello() {
    return (
        // <div>
        //     <h1>Hello from hello route</h1>
        //     <Outlet/>
        // </div>
        <div>
            <h1>Hello this is tailwind</h1>
            <NewComp/>
        </div>
    )
}