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
          route.push("/recoil");
        },
        "About",
        "1"
      ),
      getMenuItem(
        () => {
          route.push("/recoil/todo");
        },
        "Todo",
        "2"
      ),
    ]),
    getMenuItem(() => {}, "Recoil", "jotai", <CoffeeOutlined />, [
      getMenuItem(() => {}, "About", "3"),
      getMenuItem(() => {}, "Todo", "4"),
    ]),
    getMenuItem(() => {}, "Recoil", "zustand", <CoffeeOutlined />, [
      getMenuItem(() => {}, "About", "5"),
      getMenuItem(() => {}, "Todo", "6"),
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
