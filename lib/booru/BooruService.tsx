import { search } from 'kaori';


let itemArray : any[] = [];
let images : any[] = [];

export async function BooruService() {
    itemArray.length = 0
    images = await search('safebooru', { tags: ['*'], limit: 3, random: true });
    images.map((image) => {
        console.log(image.fileURL);
        console.log(image.previewURL);
        let imagePreview : any = "";
        imagePreview = image.previewURL
        itemArray.push(<img src={imagePreview}/>)
    })
    return itemArray
}