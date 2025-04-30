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

  function setLabel (urlValueTest) {
    let svgString : string = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" stroke-width="0" viewBox="0 0 20 20" class="ml-2 h-4 w-4"><path fill-rule="evenodd" stroke="none" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clip-rule="evenodd"></path></svg>'
    document.getElementsByName("dropDownRoot")[0].innerHTML = urlValueTest+svgString
  };

  function getUrl () {
    urlHTML = document.getElementById("url")
    urlValue = urlHTML.value
    return <DropdownItem className="dropDownItem" onClick={() => fetchBooru(urlValue)}>{urlValue}</DropdownItem>
  };

  function fetchBooru (urlValueTest) {
    setLabel(urlValueTest)
  }

  const [openModal, setOpenModal] = useState(false);
    return (
      <Sidebar>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem>
            <Dropdown id="websites-list" name="dropDownRoot" label="Default (Safebooru)">
            <DropdownItem onClick={() => fetchBooru("Default (Safebooru)")}>Default (Safebooru)</DropdownItem>
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