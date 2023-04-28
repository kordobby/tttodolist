import { FC, ReactNode } from "react";
import RecoilLayout from "./RecoilLayout";

export type StateType = "recoil" | "jotai" | "zustand";
interface LayoutInterface {
  children: ReactNode;
  stateType: StateType;
}

const Layout: FC<LayoutInterface> = ({ children, stateType }) => {
  return <RecoilLayout>{children}</RecoilLayout>;
};

export default Layout;
