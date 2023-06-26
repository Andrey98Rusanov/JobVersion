import React from "react";
import NetWorkAlert from "../../AntdComponents/Alert";

function NetWork({ onNetworkState, internet }) {
  window.onoffline = () => {
    onNetworkState();
  };
  window.ononline = () => {
    onNetworkState();
  };

  return internet ? null : (
    <div className="offlineAlert">
      <NetWorkAlert />
    </div>
  );
}
export default NetWork;
