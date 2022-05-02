import React, {useState,useEffect} from "react";
import {useLocation, withRouter} from "react-router-dom";
import qs from "query-string";

const Detail = () => {
  const [query, setQuery] = useState({});
  const location = useLocation();
  const {search} = location;

  useEffect(() => {
      setQuery(qs.parse(search));
  }, [search]);




  return (
    <>
      <div>detail</div>
      <h1>{query.id}</h1>
    </>
  );
};

export default withRouter(Detail);