import React from "react";
const Booru = require('@himeka/booru')
const { BooruError, sites } = require('@himeka/booru')


const argTags = process.argv.slice(3)
const site = process.argv[2] || 'sb'
const tags = process.argv[2] ? argTags : ['cat']

const searchUrl = Booru.forSite(site).getSearchUrl({ tags, limit: 1 })

const ContentWindowItems = () => {
    return (
        alert("Hello")
    )

}

export default ContentWindowItems