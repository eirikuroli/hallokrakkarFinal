const panoImage = document.querySelector('.panoramaImageContainer');
const panoTest = '../images/panoramatest.jpg';

const panorama = new PANOLENS.ImagePanorama(panoTest);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);

