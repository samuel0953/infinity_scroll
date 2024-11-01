const photos_container = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArray = [];
const count = 10;

const apiKey = "sTyfFc3xSMI1Ort7q_yoSwFc3ywcwoficjc5Cxsk0KI";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
function displayPhoto() {
  photoArray.forEach(function (photo) {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    item.appendChild(img);
    photos_container.appendChild(item);
  });
}
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    displayPhoto();
    console.log(photoArray);
  } catch (error) {}
}
getPhotos();
