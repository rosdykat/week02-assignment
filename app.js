console.info("Hello World");
//use your console as your testing tool!

//TODO There are 3 main tasks to do:

//Step 1: Store your images data
//you can use local images or external images
//for simplicity, it might be easier this time to use external images

// Step 1: Store your images data
// I stayed true to the example given by Manny for this, and did not add any additional info like srcSrc, width, height ect. I got quite confused with running this code and wanted to keep it as simple as possible.
const images = [
  {
    src: "assets/images/aleksandra-gencheva-e9z-JEG6BDo-unsplashmed.jpg",
    alt: "a green pistachio cheesecake ",
    // srcSet: ,
    // imgName: ,
    // width:,
    // height:
  },
  {
    src: "assets/images/medium qual example image.jpg",
    alt: "multiple small pots of blueberry cheesecake",
  },
  {
    src: "assets/images/rosa-sepanta-LzHrmneJJfA-unsplashmed.jpg",
    alt: "a slice of chocolate cheesecake",
  },
];

//Step 2: Create the thumbnail images
// - Select the image containers from the DOM
function createThumbnails(arrayOfImages) {
  const thumbnailContainer = document.querySelector("#thumbnail-container"); // This is selecting the location that the images will go to, in this case the thumbnail container selection i made using HTML.

  for (let i = 0; i < arrayOfImages.length; i++) {
    // This is how to loop equal to the length of your array, initially this said "let i = 0; i < 3; i++" to loop three times, however this way it will add more loops if I hadd more images to my array of images
    console.log(arrayOfImages[i]);

    const imageElement = document.createElement("img"); // Here I am defining the imageElement Variable to create an image from my stored images data
    imageElement.src = arrayOfImages[i].src; // This selects the source of image based on where it is currently at in the loop (due to the [i])
    imageElement.className = "thumbnail-image"; // Applying a className so I can add CSS to the images
    imageElement.addEventListener("click", function (mouseEvent) {
      // Creating an event that is activated when I click on the image, to then pass to the createFullScreenImage function. Again the [i] lets the function know what image to use
      createFullscreenImage(arrayOfImages[i]);
    });
    thumbnailContainer.appendChild(imageElement); //applying the function through appendchild. In other words adding the imageElement object to the thumbnailContainer
  }
}

//Step 3: Create the full-screen image
function createFullscreenImage(largeImage) {
  // After relooking at Manny's puesdocode. I realise I missed a step when initially making this function. I did not know that he showed us how to clear the previous full screen image using "fullScreenContainer.innerHTML = "";"
  // fullScreenContainer.innerHTML = ""; ---> This is good to know as it is much simpler than what I ended up doing.

  const fullScreenContainer = document.querySelector("#full-screen-container"); //Same as the previous function, this is selecting the desired location from the document
  const fullscreenImage = document.createElement("img"); // Creating the image within the section. As this is working off the previous function, it already knows which value to use.

  // Instead, I used an if statement that starts at the beginning of the function and that selects any existing images in the container, and removes themn.

  const oldImage = fullScreenContainer.querySelector("img");
  if (oldImage) {
    oldImage.remove();
  }

  // I think fullScreenContainer.innerHTML = ""; would be better to use in this situation. However the if statement may be more useful if you are looking to remove more than just an image?

  fullscreenImage.className = "large-thumbnail-image"; // Adding a class name once again for CSS
  fullscreenImage.alt = largeImage.alt;
  fullscreenImage.src = largeImage.src; // Adding the alt and src from our stored images.
  fullScreenContainer.appendChild(fullscreenImage); //adding the fullscreenImage to the fullscreenContainer
}
// Call create thumnails function using images supplied at the beginning
createThumbnails(images);
