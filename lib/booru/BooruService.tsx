import { search } from 'kaori';


let itemArray : any[] = [];
let images : any[] = [];
let currentBooru: any = ""

function addDownloader(imageFull) {
    window.api.downloadImage(imageFull)
}

export function fetchCurrentBooru () {
    return currentBooru;
}

export async function BooruService(tag: string, site: string) {
    itemArray.length = 0
    currentBooru = site
    try {
        images = await search(site, { tags: [tag], limit: 200, random: false });
    } catch (error) {
        console.log("Response is empty: {}", error)
    }
    images.map((image) => {
        console.log(image.fileURL);
        console.log(image.previewURL);
        let imagePreview : any = "";
        let imageFull : any = "";
        imagePreview = image.previewURL
        imageFull = image.fileURL
        itemArray.push(<img onClick={() => addDownloader(imageFull)} id='booruImage' src={imagePreview}/>)
    })
    return itemArray
}