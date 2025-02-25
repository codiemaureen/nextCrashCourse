async function fetchRepo(name){
 const response = await fetch(`https://api.github.com/repos/codiemaureen/${name}`);
 await new Promise((resolve) => setTimeout(resolve, 5000));
 const repo = await response.json;
 return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  console.log(repo)
  return (
    <div>
      {name}
    </div>
  )
}

export default Repo
