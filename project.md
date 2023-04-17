##

Create a reactive/dynamic web page that displays images in a list/grid view and some metadata about each image. Also implement at least one filter based on the available metadata for each image. Bonus points if you implement more then one filter.

### Technical Guidelines

This web page should use HTML/CSS/JS libraries/frameworks for it's implementation and be interactable. There should be some active management of client side state (active filters, view type) and the UI should update quickly based on that state changing.

There are no specific requirements on which libraries you can use. Our suggestion is to use the tools that you are most comfortable with. If you want some suggestions on where to start, TailwindCSS and a js component/reactive system like AlpineJS is a good combo, or something more batteries-included like Svelte/NextJS. We are not evaluating your knowledge of these tools, but your ability to deliver business requirements.

### Expected Functionality

- Grid view of image metadata/image preview
- List view of image metadata/image preview
- List/Grid Pagination
- List/Grid Filter by Image Author
- Each image being displayed on the UI should include the following data about the image
- - Image Preview (generate preview thumbnails using the picsum.photos resizing http api, see: https://picsum.photos/ )
- - Image Direct URL
- - Image Author
- - Image Width
- - Image Height

Some simple examples of the look/feel for the list/grid views of this web page could be like:

- <https://mdbootstrap.com/docs/standard/extended/image-grid/>
- <https://mdbootstrap.com/docs/standard/data/tables/#section-advanced-example>

### Image Content

[Images.json Download Link](https://gist.githubusercontent.com/mglinski/d8fe051eb7da22688916ba3bcf49893c/raw/e5f0c48c8daa545568530a24417739f79a13b9db/images.json)

This file is also included below as a second file in this gist.

The image dataset and metadata is included in the images.json file.
These images come from https://picsum.photos/.

### Deliverables

An archive containing the html/css/js code needed to run this UI and instructions on how to run and view it. Feel free to embed the images.json data in the html to avoid needing to host it somewhere.

### Link to Tools/Libraries

- <https://tailwindcss.com/>
- <https://alpinejs.dev/>
- <https://svelte.dev/>
- <https://nextjs.org/>
