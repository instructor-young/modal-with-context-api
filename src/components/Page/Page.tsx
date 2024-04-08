import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <main className="min-h-screen flex flex-col">{children}</main>;
}

export default Page;
