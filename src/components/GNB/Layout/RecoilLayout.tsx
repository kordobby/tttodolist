import { Layout } from "antd";
import { FC, ReactNode } from "react";
import NavMenu from "./NavMenu";

interface LayoutProps {
  children: ReactNode;
}

const RecoilLayout: FC<LayoutProps> = ({ children }) => {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Sider>
          <NavMenu />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default RecoilLayout;
