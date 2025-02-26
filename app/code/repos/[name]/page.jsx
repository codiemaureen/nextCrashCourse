import Repo from "@/app/component/Repo";
import Link from "next/link";
import RepoDirs from "@/app/component/RepoDirs";

async function RepoPage({ params }){
 const {name} = await params;
  return (
   <div className="card">
     <Link href={`/code/repos`} className="btn btn-back">Back to Respositories</Link>
     <Repo name={name}/>
     <RepoDirs name={name} />
    </div>
  )
}

export default RepoPage
