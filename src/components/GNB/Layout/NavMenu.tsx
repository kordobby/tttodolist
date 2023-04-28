import { Menu } from "antd";

const NavMenu = () => {
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["recoil"]}
        style={{ height: "100%" }}
        items={[
          {
            key: "recoil",
            label: `recoil`,
            onClick: () => {},
          },
          {
            key: "jotai",
            label: `jotai`,
            onClick: () => {},
          },
          {
            key: "zustand",
            label: `zustand`,
            onClick: () => {},
          },
        ]}
      ></Menu>
    </>
  );
};

export default NavMenu;
