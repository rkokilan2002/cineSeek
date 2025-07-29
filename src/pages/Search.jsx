import { useTitle } from "../hooks/useTitle"

export const Search = ({title}) => {
  useTitle(title);
  return (
    <div>Search</div>
  )
}

