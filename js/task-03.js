const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const load = document.querySelector(".gallery");

const makeGallery = ((array, load) => {
  array.forEach(element => {
     const lastItem = document.createElement("li");
     const internalItem = document.createElement("img");
     internalItem.src = element.url;
     internalItem.alt = element.alt;
     load.append(lastItem);
     lastItem.append(internalItem);
  });
});

makeGallery(images, load);