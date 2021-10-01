const btn = document.getElementsByClassName('btn');
const banner = document.getElementById('banner');

btn[0].onclick = function () {
  banner.src = './images/img-1.png';
  animation();
  this.classList.add('active');
};

btn[1].onclick = function () {
  banner.src = './images/img-2.png';
  animation();
  this.classList.add('active');
};

btn[2].onclick = function () {
  banner.src = './images/img-3.png';
  animation();
  this.classList.add('active');
};

const animation = () => {
  banner.classList.add('zoom');
  setTimeout(() => {
    banner.classList.remove('zoom');
  }, 1000);

  for (b of btn) {
    b.classList.remove('active');
  }
};
