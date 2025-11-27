'use strict';

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const wallJ = document.querySelector('.wall');

    const wallWidth = wallJ.clientWidth;
    const wallHeight = wallJ.clientHeight;
    const wallRect = wallJ.getBoundingClientRect();
    const wallTopCoord = wallRect.y + wallJ.clientTop;
    const wallLeftCoord = wallRect.x + wallJ.clientLeft;

    const spiderJ = document.querySelector('.spider');

    const spiderWidth = spiderJ.clientWidth;
    const spiderHeight = spiderJ.clientHeight;

    let newTopCoord = e.clientY - spiderHeight / 2;
    let newLeftCoord = e.clientX - spiderWidth / 2;

    if (newTopCoord < wallTopCoord) {
      newTopCoord = 0;
    } else if (newTopCoord + spiderHeight > wallTopCoord + wallHeight) {
      newTopCoord = wallHeight - spiderHeight;
    } else {
      newTopCoord = newTopCoord - wallTopCoord;
    }

    if (newLeftCoord < wallLeftCoord) {
      newLeftCoord = 0;
    } else if (newLeftCoord + spiderWidth > wallLeftCoord + wallWidth) {
      newLeftCoord = wallWidth - spiderWidth;
    } else {
      newLeftCoord = newLeftCoord - wallLeftCoord;
    }

    spiderJ.style.top = newTopCoord + 'px';
    spiderJ.style.left = newLeftCoord + 'px';
  }
});
