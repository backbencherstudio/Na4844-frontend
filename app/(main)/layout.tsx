import { ReactNode } from "react";
import FluidContainer from "@/components/layout/FluidContainer";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="font-inter">
      <FluidContainer>
        <main>{children}</main>
      </FluidContainer>
    </div>
  );
};

export default PublicLayout;
