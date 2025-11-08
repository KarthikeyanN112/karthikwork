import React, { useEffect, useState } from "react";

export default function LoaderHOC(WrappedComponent, fetchFn) {
  return function WrappedWithLoader() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchFn().then((res) => {
        setData(res);
        setLoading(false);
      });
    }, []);

    if (loading) return <p>Loading...</p>;
    return <WrappedComponent books={data} loading={loading} />;
  };
}
