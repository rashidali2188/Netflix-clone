let svg = document.querySelector('#svg1');
let svg2 = document.querySelector('#svg2');
let svg3 = document.querySelector('#svg3');
let svg4 = document.querySelector('#svg4');
let text = document.querySelector('#text');
let text2 = document.querySelector('#text2');
let text3 = document.querySelector('#text3');
let text4 = document.querySelector('#text4');

// Add text content
text.textContent = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.";
text2.textContent = "You can watch as much as you want, whenever you want without a single ad – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!";
text3.textContent = "Netflix has an extensive library of content including movies, TV shows, documentaries, and original programming across various genres such as drama, comedy, action, horror, sci-fi, and more.";
text4.textContent = "You can watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, as long as you have an internet connection.";

function toggleText(textElement, svgElement) {
    textElement.classList.toggle('show');
    // Rotate SVG when open
    svgElement.style.transform = textElement.classList.contains('show') ? 'rotate(45deg)' : '';
    svgElement.style.transition = 'transform 0.3s ease';
}

svg.addEventListener('click', () => toggleText(text, svg));
svg2.addEventListener('click', () => toggleText(text2, svg2));
svg3.addEventListener('click', () => toggleText(text3, svg3));
svg4.addEventListener('click', () => toggleText(text4, svg4));