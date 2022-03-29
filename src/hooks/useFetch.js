import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [value, setValue] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    setValue({ ...value, loading: true });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setValue({
            data: data,
            loading: false,
            error: null,
          });
        }
      })
      .catch(() =>
        setValue({
          data: null,
          loading: false,
          error: "No se puedo cargar la info",
        })
      );
  }, [url]);
  return value;
};
