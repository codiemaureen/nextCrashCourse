import Repo from "@/app/component/Repo";

async function RepoPage({ params }){
 const {name} = await params;
  return (
   <div className="card">
     <Repo name={name}/>
    </div>
  )
}

export default RepoPage
