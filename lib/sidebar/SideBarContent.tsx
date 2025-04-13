"use client";

import { Button, Dropdown, DropdownItem, Label, Modal, ModalBody, ModalFooter, ModalHeader, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, TextInput } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import './SideBar.css';
import { useState } from "react";


const SideBarContent = () => {

  let itemArray = [];

  function handleClickForm () {
    setOpenModal(false)
    addToDropdown()
  };

  function addToDropdown () {

  };

  const [openModal, setOpenModal] = useState(false);
    return (
      <Sidebar>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem>
            <Dropdown id="websites-list" label="Servers">
            <DropdownItem onClick={() => alert("Dashboard!")}>Dashboard</DropdownItem>
            </Dropdown>
          </SidebarItem>
          <SidebarItem>
            <Button className="button" onClick={() => setOpenModal(true)}><FiPlusCircle /></Button>
            <Modal dismissible show={openModal} size="md" onClose={() => setOpenModal(false)}>
              <ModalHeader>Add Server</ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  <div className="m2-block">
                    <TextInput id="url" type="url" required />
                  </div>
                  <div className="m2-block">
                    <Button className="button" onClick={() => document.querySelector('#url input[type="text"]')}>Verify Link</Button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="button" onClick={() => handleClickForm()}>Save</Button>
              </ModalFooter>
            </Modal>
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
      </Sidebar>
    )
}

export default SideBarContent