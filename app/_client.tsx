"use client";

import { useFormState } from "react-dom";

type Props = {
  action: () => Promise<JSX.Element>;
};

export function Form({ action }: Props) {
  const [children, getChildren] = useFormState(action, undefined);

  if (children) return children;

  return (
    <>
      <form action={getChildren}>
        <button>Load</button>
      </form>
    </>
  );
}
