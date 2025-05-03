# Kanna

Ravioli, ravioli...

Simple Booru viewer and downloader.

![KANNA](README_icon.jpg)

-----------------------------------------------------------------------

# Building Kanna

```PS
npm install
npm run dev

# To run tests
npm run test

# To compile into an executable (outputted to /dir)
npm run build:unpack

# To create an installer
npm run build:win
npm run build:mac
npm run build:linux
```

# Using Kanna

- Use dropdown to apply pre-selected Boorus.
- Add new domains using the '+' button.
- Search for images using tags (multiple tags separated with a '+', e.g "hololive + megumin")

# Limitations

The booru extension used in Kanna, [kaori](https://github.com/iCrawl/kaori), supports a small number of boorus. Writing an API to accept new boorus is too time consuming, so most boorus are not supported.

---------------------------------------------

### Notes

<b>Note:</b> I planned to work on this project for about 2 months, therefore I kept the scope small and manageable so a lot of QOL features are missing. This is meant as a prototype and a test of abilities in handling a new tech stack. Safe to say that I prefer TypeScript over JavaScript now.
