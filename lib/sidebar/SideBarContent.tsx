"use client";

import { Button, Dropdown, DropdownItem, DropdownProps, Label, Modal, ModalBody, ModalFooter, ModalHeader, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, TextInput } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import './SideBar.css';
import { JSX, ReactElement, ReactNode, useState } from "react";

let itemArray : any[] = [];
let urlHTML : any = "";
let urlValue : string = "";
const SideBarContent = () => {


  function handleClickForm (Item) {
    addToDropdown(Item)
    setOpenModal(false)
  };

  function addToDropdown (Item) {
    itemArray.push(Item)
  };

  function getUrl () {
    urlHTML = document.getElementById("url")
    urlValue = urlHTML.value
    return <DropdownItem onClick={() => alert("Dashboard!")}>{urlValue}</DropdownItem>
  }

  const [openModal, setOpenModal] = useState(false);
    return (
      <Sidebar>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem>
            <Dropdown id="websites-list" label="Servers">
            <DropdownItem onClick={() => alert("Dashboard!")}>Default (Safebooru)</DropdownItem>
            {itemArray}
            </Dropdown>
          </SidebarItem>
          <SidebarItem>
            <Button className="button" onClick={() => setOpenModal(true)}><FiPlusCircle /></Button>
            <Modal dismissible show={openModal} size="md" onClose={() => setOpenModal(false)}>
              <ModalHeader>Add Server</ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  <div className="m2-block">
                    <TextInput id="url" type="text" placeholder="https://safebooru.org" required />
                  </div>
                  <div className="m2-block">
                    <Button className="button" onClick={() => document.querySelector('#url input[type="text"]')}>Verify Link</Button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" onClick={() => handleClickForm(getUrl())}>Save</Button>
              </ModalFooter>
            </Modal>
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
      </Sidebar>
    )
}

export default SideBarContent