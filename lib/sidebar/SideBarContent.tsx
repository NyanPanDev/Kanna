"use client";

import { Button, Dropdown, DropdownItem, Modal, ModalBody, ModalFooter, ModalHeader, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, TextInput } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import './SideBar.css';
import { useState } from "react";
import { fetchBooruItemsOnChange } from "../contentWindow/ContentWindowItems";

const { shell } = window.require('electron');

const SideBarContent = () => {

  const [itemArray, setItemArray] = useState<string[]>([]);
  const [urlValue, setUrlValue] = useState<string>("");

  function handleClickForm () {
    addToDropdown(urlValue)
    setOpenModal(false)
  };

  function addToDropdown (item: string) {
    setItemArray((prevArray) => [...prevArray, item]);
  };

  function setLabel (urlValueTest) {
    let svgString : string = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" stroke-width="0" viewBox="0 0 20 20" class="ml-2 h-4 w-4"><path fill-rule="evenodd" stroke="none" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clip-rule="evenodd"></path></svg>'
    document.getElementsByName("dropDownRoot")[0].innerHTML = urlValueTest+svgString
  };

  function fetchBooru (urlValueTest, domainName) {
    setLabel(urlValueTest)
    fetchBooruItemsOnChange(domainName)
  }

  function verifyWebsite() {
    if (urlValue.trim() !== "") {
      shell.openExternal(urlValue); // Open the URL in a new tab
    } else {
      alert("Please enter a valid URL."); // Alert the user if the input is empty
    }
  }

  function ensureAlwaysHTTPS (e) {
    const inputValue = e.target.value;

    // Ensure the value always starts with "https://"
    if (!inputValue.startsWith("https://")) {
      setUrlValue("https://");
    } else {
      setUrlValue(inputValue);
    }
  }

  const [openModal, setOpenModal] = useState(false);
    return (
      <Sidebar>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem>
            <Dropdown id="websites-list" name="dropDownRoot" label="Default">
            <DropdownItem onClick={() => fetchBooru("Default", 'safebooru')}>Default</DropdownItem>
            <DropdownItem onClick={() => fetchBooru("Konachan.com", 'konachan')}>Konachan.com</DropdownItem>
            <DropdownItem onClick={() => fetchBooru("Konachan.net", 'konachannet')}>Konachan.net</DropdownItem>
            <DropdownItem onClick={() => fetchBooru("danbooru.donmai.us", 'danbooru')}>danbooru.donmai.us</DropdownItem>
            <DropdownItem onClick={() => fetchBooru("yande.re", 'yandere')}>yande.re</DropdownItem>
            <DropdownItem onClick={() => fetchBooru("gelbooru.com", 'gelbooru')}>gelbooru.com</DropdownItem>
            <DropdownItem onClick={() => fetchBooru("rule34.xxx", 'rule34')}>rule34.xxx</DropdownItem>
            <DropdownItem onClick={() => fetchBooru("tbib.org", 'tbib')}>tbib.org</DropdownItem>
            <DropdownItem onClick={() => fetchBooru("xbooru.com", 'xbooru')}>xbooru.com</DropdownItem>
            {itemArray.map((item, index) => (
                <DropdownItem
                  key={index}
                  className="dropDownItem"
                  onClick={() => fetchBooru(item, item)}
                >
                  {item}
                </DropdownItem>
              ))}
            </Dropdown>
          </SidebarItem>
          <SidebarItem>
            <Button className="button" onClick={() => setOpenModal(true)}><FiPlusCircle /></Button>
            <Modal dismissible show={openModal} size="md" onClose={() => setOpenModal(false)}>
              <ModalHeader>Add Server</ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  <div className="m2-block">
                    <TextInput id="url" type="text" placeholder="https://safebooru.org" required value={urlValue} onChange={(e) => ensureAlwaysHTTPS(e)} />
                  </div>
                  <div className="m2-block">
                    <Button className="button" id="verifyButton" onClick={() => verifyWebsite()}>Verify Link</Button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" onClick={handleClickForm}>Save</Button>
              </ModalFooter>
            </Modal>
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
      </Sidebar>
    )
}

export default SideBarContent