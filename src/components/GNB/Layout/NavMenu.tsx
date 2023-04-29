import { Menu, MenuProps } from "antd";
import { CoffeeOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

type MenuItem = Required<MenuProps>["items"][number];
const getMenuItem = (
  onClick: () => void,
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
) => {
  return {
    onClick,
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const NavMenu = () => {
  const route = useRouter();

  const menuItems: MenuItem[] = [
    getMenuItem(() => {}, "Recoil", "recoil", <CoffeeOutlined />, [
      getMenuItem(
        () => {
          route.replace("/recoil");
        },
        "About",
        "1"
      ),
      getMenuItem(
        () => {
          route.replace("/recoil/todo");
        },
        "Todo",
        "2"
      ),
    ]),
    getMenuItem(() => {}, "Zustand", "zustand", <CoffeeOutlined />, [
      getMenuItem(
        () => {
          route.push("/zustand");
        },
        "About",
        "3"
      ),
      getMenuItem(
        () => {
          route.push("/zustand/todo");
        },
        "Todo",
        "4"
      ),
    ]),
    getMenuItem(() => {}, "Jotai", "jotai", <CoffeeOutlined />, [
      getMenuItem(
        () => {
          route.push("/jotai/todo");
        },
        "About",
        "5"
      ),
      getMenuItem(
        () => {
          route.push("/jotai/todo");
        },
        "Todo",
        "6"
      ),
    ]),
  ];

  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["recoil"]}
        style={{ height: "100%" }}
        items={menuItems}
        onClick={() => {
          route.push("recoil");
        }}
      ></Menu>
    </>
  );
};

export default NavMenu;
