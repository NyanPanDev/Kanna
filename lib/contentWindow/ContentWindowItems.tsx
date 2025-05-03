"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import './ContentWindow.css'
import { BooruService, fetchCurrentBooru } from "../booru/BooruService";

let testArray : any[] = [];
let newArray : any[] = [];
let hasFetchedOnce = false;

function fetchBooruItemsOnce (setData: React.Dispatch<React.SetStateAction<any[]>>) {
    if (hasFetchedOnce) return;
    hasFetchedOnce = true;
    testArray = testArray.concat(BooruService('megumin', 'safebooru'))
    newArray = testArray
    setData([...newArray])
}

export function fetchBooruItemsOnChange (booruName: string) {
    const imageContainer = document.querySelector(".loadPictures");
    if (imageContainer) {
        imageContainer.innerHTML = ""; // Removes all images inside the div
        console.log("All images deleted.");
    }
    testArray = testArray.concat(BooruService('*', booruName))
    newArray = testArray
    const textInput = document.getElementById("textInputBooru") as HTMLInputElement | null;
    if (textInput) {

        // Create and dispatch a KeyboardEvent for the "Enter" key
        const enterEvent = new KeyboardEvent("keydown", {
            key: "Enter",
            bubbles: true, // Ensure the event bubbles up
            cancelable: false,
        });

        textInput.dispatchEvent(enterEvent); // Dispatch the event
        console.log(`Triggered "Enter" event on textInputBooru with value: ${booruName}`);
    }
}


const ContentWindowItems : React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetchBooruItemsOnce(setData);
    }, []);


    function handleKeyPress (event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            let textInputValue : any = ""
            textInputValue = document.getElementById("textInputBooru")
            let textInputVal : string = ""
            textInputVal = textInputValue.value
            const imageContainer = document.querySelector(".loadPictures");
            if (imageContainer) {
                imageContainer.innerHTML = ""; // Removes all images inside the div
                console.log("All images deleted.");
              }
            testArray = testArray.concat(BooruService(textInputVal, fetchCurrentBooru()))
            newArray = testArray
            setData([...newArray])
        }
    }


    return (
        <div className="viewArea">
            <input className="textInputBooru" id="textInputBooru" type="search" placeholder="Input tags here..." onKeyDown={handleKeyPress}></input>
            <div className="pictureArea">
                <div className="loadPictures">
                    {data}
                </div>
            </div>
        </div>
      );
}

export default ContentWindowItems