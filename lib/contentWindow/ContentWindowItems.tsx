"use client";

import React from "react";
import { Button, Pagination } from "flowbite-react";
import { useState } from "react";
import './ContentWindow.css'
import { BooruService } from "../booru/BooruService";

let testArray : any[] = [];
let newArray : any[] = [];

function fetchBooruItemsOnce () {
    testArray = testArray.concat(BooruService())
    newArray = testArray
}

function emptyArray () {
    newArray.length = 0
}



fetchBooruItemsOnce()

const ContentWindowItems = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [Data, setData] = useState(0)
    const onPageChange = (page: number) => setCurrentPage(page);

    function fetchBooruItems () {
        testArray = testArray.concat(BooruService())
        newArray = testArray
        setData(Data + 1)
    }

    function changePagination () {
        
        fetchBooruItems()
    }


    return (
        <div className="viewArea">
            <div className="pictureArea">
                <Button size="xl" onClick={() => fetchBooruItems()}>EXTRA</Button>
                <div className="loadPictures">
                    {newArray}
                </div>
            </div>
            <div className="flex overflow-x-auto sm:justify-center pagination">
                <Pagination currentPage={currentPage} totalPages={20} onPageChange={onPageChange} onMouseDown={() => changePagination() } showIcons />
            </div>
        </div>
      );
}

export default ContentWindowItems