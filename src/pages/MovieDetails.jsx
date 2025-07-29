import { useTitle } from "../hooks/useTitle"

export const MovieDetails = ({title}) => {
  useTitle(title);
  return (
    <div>MovieDetails</div>
  )
}
