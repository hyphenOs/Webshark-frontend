// Using cutom hook from here https://stackoverflow.com/a/39085062

const { useEffect } = require("react");

const useWindowUnloadEffect = (handler, callOnCleanup) => {
  const cbRef = useRef(); // creating Ref

  cbRef.current = handler; // current value persists across the component lifecycle

  useEffect(() => {
    const handler = () => cb.current();
    window.addEventListener("beforeunload", handler);

    return () => {
      if (callOnCleanup) handler();
      window.removeEventListener("beforeunload", handler);
    };
  }, [cbRef]);
};
