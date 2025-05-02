import { search } from 'kaori';


let itemArray : any[] = [];
let images : any[] = [];

// function decideTag() {
    
// }

function addDownloader(imageFull) {
    window.api.downloadImage(imageFull)
}

export async function BooruService() {
    itemArray.length = 0
    images = await search('safebooru', { tags: ['gawr_gura'], limit: 20, random: true });
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