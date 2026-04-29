


export const getAllData = async () => {
  const res = await fetch('https://pixgen-react-project.vercel.app/data.json');
  const all = await res.json()

  return all;
}


export const getAllCategory = async () => {
  const res = await fetch('https://pixgen-react-project.vercel.app/category.json');
  const alls = await res.json()

  return alls;
}









