// load a different image every couple of seconds on home page

const imageFolder = '/images/' //image folder path
const imageFiles = [
    // our image names
    // landscape images
    'landscape1.jpg',
    'landscape2.jpg', 
    'landscape3.jpg', 
    'landscape4.jpg', 
    'landscape5.jpg',
    'landscape6.jpg',
    'landscape7.jpg',
    'landscape8.jpg',
    'landscape9.jpg',
    'landscape10.jpg',
    'landscape11.jpg',
    'landscape12.jpg',
    'landscape13.jpg',
    'landscape14.jpg',
    'landscape15.jpg',
    'landscape16.jpg',
    // wedding images
    'wedding1.jpg',
    'wedding2.jpg',
    'wedding3.jpg',
    'wedding4.jpg',
    'wedding5.jpg',
    'wedding6.jpg',
    'wedding7.jpg',
    'wedding8.jpg',
    'wedding9.jpg',
    'wedding10.jpg',
    'wedding11.jpg',
    'wedding12.jpg',
    'wedding13.jpg',
    'wedding14.jpg',
    'wedding15.jpg',
    'wedding16.jpg',
    'wedding17.jpg',
    'wedding18.jpg',
    'wedding19.jpg'
];

// get image element from dom
const imageElement = document.getElementById('homepageImage');
// start index at 0
let randomIndex = 0;


// function to change image
function changeImage() {
    const imagePath = imageFolder + imageFiles[randomIndex];
    const newImage = new Image();
    newImage.src = imagePath;
    newImage.onload = () => {
        imageElement.style.opacity = 0;
        imageElement.src = newImage.src;
        setTimeout(() => {
            imageElement.style.opacity = 1;
        }, 100); // Delay to ensure opacity change is applied after src change
    };
    // select a random image from teh array
     randomIndex = Math.floor(Math.random() * imageFiles.length);
     console.log(randomIndex)
}


//set first image
changeImage();

// chnage image every 5 seconds
setInterval(changeImage, 5000);