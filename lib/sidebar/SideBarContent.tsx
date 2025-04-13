import { Button, createTheme, Dropdown, DropdownItem, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems, ThemeProvider } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import './SideBar.css';
import { Popup } from "../popup/Popup";


const SideBarContent = () => {
    return (
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem>
            <Dropdown label="Dropdown">
            <DropdownItem onClick={() => alert("Dashboard!")}>Dashboard</DropdownItem>
            <DropdownItem onClick={() => alert("Settings!")}>Settings</DropdownItem>
            <DropdownItem onClick={() => alert("Earnings!")}>Earnings</DropdownItem>
            <DropdownItem onClick={() => alert("Sign out!")}>Sign out</DropdownItem>
            </Dropdown>
          </SidebarItem>
          <SidebarItem>
            <Button className="button" onClick={() => alert("OUCH!")}><FiPlusCircle /></Button>
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
    )
}

export default SideBarContent