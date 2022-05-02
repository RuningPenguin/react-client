import React from "react";
import {useHistory, withRouter} from "react-router-dom";
import {Button} from "antd-mobile"
import qs from "query-string"

const Goods = (props) => {
  const history = useHistory();
  return (
    <>
      <div>Goods</div>
      <Button onClick={() => {
        history.push({
          pathname: '/goods/detail',
          search: qs.stringify({id: 11111}),
          state:{a:2}
        })
      }

      }>good001</Button>
    </>
  );
};

export default withRouter(Goods);