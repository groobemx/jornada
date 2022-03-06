import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="politica" onClick={toggle}>
            POLÍTICA
          </SidebarLink>
          <SidebarLink to="economia" onClick={toggle}>
            ECONOMÍA
          </SidebarLink>
          <SidebarLink to="mundo" onClick={toggle}>
            MUNDO
          </SidebarLink>
          <SidebarLink to="estados" onClick={toggle}>
            ESTADOS
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
