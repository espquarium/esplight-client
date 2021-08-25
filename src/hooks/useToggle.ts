import { useCallback, useState } from "react";

const useToggle = (initialState = false): [boolean, CallableFunction] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle: CallableFunction = useCallback(
    () => setState((oldState) => !oldState),
    []
  );

  return [state, toggle];
};

export default useToggle;
