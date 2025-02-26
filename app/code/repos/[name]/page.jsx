import Repo from "@/app/component/Repo";
import Link from "next/link";
import RepoDirs from "@/app/component/RepoDirs";
import { Suspense } from "react";

async function RepoPage({ params }){
 const {name} = await params;
  return (
   <div className="card">
     <Link href={`/code/repos`} className="btn btn-back">Back to Respositories</Link>
     <Suspense fallback={<div>⌛Loading Repositories... </div>}>
      <Repo name={name}/>
     </Suspense>
     <Suspense fallback={<div>⌛Loading Directories... </div>}>
      <RepoDirs name={name} />
     </Suspense>
    </div>
  )
}

export default RepoPage
