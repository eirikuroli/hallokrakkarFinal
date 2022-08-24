const panoImage = document.querySelector('.panoramaImageContainer');
const panoTest = '../images/milliland.png';

const panorama = new PANOLENS.ImagePanorama(panoTest);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);

