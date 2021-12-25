import { useContext } from "react";
import { OverLayContext } from "../components/Layouts/OverLay/provider";

export default function useLoading() {
  const { setLoading } = useContext(OverLayContext);

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return [showLoading, hideLoading];
}
