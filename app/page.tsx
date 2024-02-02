import { ReactNode, Suspense } from "react";
import { Form } from "./_client";

async function action() {
  "use server";

  return (
    <>
      <Form action={action} />
      <Data>
        <Suspense>
          <Data />
        </Suspense>
      </Data>
    </>
  );
}

export default function Page() {
  return <Form action={action} />;
}

async function Data({ children }: { children?: ReactNode }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <>
      <p>Got some data</p>
      {children}
    </>
  );
}
