function toggleImage(id, insideSrc, outsideSrc) {
    const imgElement = document.getElementById(id);
    const currentSrc = imgElement.getAttribute('src');
    
    if (currentSrc === outsideSrc) {
        imgElement.setAttribute('src', insideSrc);
    } else {
        imgElement.setAttribute('src', outsideSrc);
    }
}
