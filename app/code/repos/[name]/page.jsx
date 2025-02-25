import Repo from "@/app/component/Repo";
import Link from "next/link";


async function RepoPage({ params }){
 const {name} = await params;
  return (
   <div className="card">
     <Link href={`/code/repos`} className="btn btn-back">Back to Respositories</Link>
     <Repo name={name}/>
    </div>
  )
}

export default RepoPage
