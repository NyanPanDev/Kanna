"use client";

import { Button, Dropdown, DropdownItem, Label, Modal, ModalBody, ModalFooter, ModalHeader, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, TextInput } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import './SideBar.css';
import { useState } from "react";


const SideBarContent = () => {

  const [openModal, setOpenModal] = useState(true);
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
            <Button className="button" onClick={() => setOpenModal(true)}><FiPlusCircle /></Button>
            <Modal dismissible show={openModal} size="md" onClose={() => setOpenModal(false)}>
              <ModalHeader>Add Server</ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                <TextInput id="url" type="url" required />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setOpenModal(false)}>Save</Button>
              </ModalFooter>
            </Modal>
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
    )
}

export default SideBarContent