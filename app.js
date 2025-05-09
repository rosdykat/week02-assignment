console.info("hii");
// use your console as a testing tool

// TODO: There are three main tasks to do:
// - Store images data
// - Create Thumbnail Images
// - Create the full-screen images

// Step 1: Store your images data in an array - you 100% need src and alt for this
const images = [
  {
    src: "url",
    alt: "img description",
    // imgName: ,
    // width: ,
    // height: ,
  },
  { src: "url", alt: "img description" },
  { src: "url", alt: "img description" },
];

// Step 2: Create the thumbnail images
// -Select the image containers from the DOM
function createThumbnails(arrayOfImages) {
  // We need a loop to create out thumbnails efficiently --> forEach, for loop
  // in my loop, I have 4 steps
  // create the dom element (img)
  // update the attribute values to be the values of our images stored in the array (img.src = / img.alt = /img.className = )
  // append the new imgs into the thumbnail container
  // add an event listener here (event handler / event listener attached to each img --> img.addEventListener("click", function (){
  // createFullScreenImage()}))
}

// Step 3: Create the full-screen image --> creating as user clicks on them no need to loop
function createFullScreenImage(largeImg) {
  // we need to clear the current full-screen image before we add a new one
  fullScreenContainer.innerHTML = "";
  // create a new image element (img)
  // add a className
  // set the src and alt values to be the same as the thumbnail that was clicked
  // (image.src = largeImage.src)
  // append this new image to the fullscreen container
}
