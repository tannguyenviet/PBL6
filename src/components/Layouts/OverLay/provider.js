import React, { useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

export const OverLayContext = React.createContext({});

function OverLayProvider(props) {
  const [loading, setLoading] = useState(false);
  return (
    <OverLayContext.Provider
      value={{
        setLoading,
      }}
    >
      {loading && (
        <div className="loading-overlay">
          <BounceLoader loading={loading} size={60} color="#bfccfa" />
        </div>
      )}
      {props.children}
    </OverLayContext.Provider>
  );
}

export default OverLayProvider;
