var cont = 0

var img = document.querySelector("#image");



const mudaimage = () => {

  if (cont == 0) {
    img.setAttribute('src', 'img/puppy1.jpg');
    document.getElementById('dog2').innerText = 'Dog Sério' 
 
    cont += 1
  }
  else if (cont == 1) {
    img.setAttribute('src', 'img/puppy2.jpg')
    document.getElementById('dog2').innerText = 'Dog Dormindo'

    cont += 1
  } else if (cont == 2) {
    img.setAttribute('src', 'img/puppy3.jpg');

    document.getElementById('dog2').innerText = 'Dog Apaixonado'

    cont += 1
  } else if (cont == 3) {
    img.setAttribute('src', 'img/puppy4.jpg');
    
    document.getElementById('dog2').innerText = 'Dog Chorando'

    cont += 1
  }
  else {
    img.setAttribute('src', 'img/puppy5.jpg');

    document.getElementById('dog2').innerText = 'Dog Feliz'

    cont -= 4

  }
}
