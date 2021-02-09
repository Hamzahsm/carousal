var counter = 1;

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 4) {
        counter = 1;
    }
},5000);  //set your time here, if you want to more longer or shorter just increase it decrease it