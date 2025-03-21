import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderLink.module.less";

interface HeaderLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export const HeaderLink: FC<HeaderLinkProps> = ({
  to,
  children,
  className = "",
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${
          isActive ? `${styles.active} ${styles.link}` : `${styles.link}`
        }`
      }
    >
      {children}
    </NavLink>
  );
};
