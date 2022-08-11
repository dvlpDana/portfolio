import { useMediaQuery } from "react-responsive"
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:780px)"
  });
  return <>{isMobile && children}</>
}
export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:781px)"
  });
  return <>{isPc && children}</>
}
