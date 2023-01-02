// var bg = document.querySelector('.feur');
// var plantList = document.querySelectorAll('.plants');

// plantList.forEach(plant => {
//     plant.addEventListener('click', () => {
//         bg.classList.remove('hide');

//         var timer = document.createElement('div');
//         timer.classList.add('child');
//         timer.innerHTML = '3';
//         bg.appendChild(timer);
//         var count = 3;
//         var interval = setInterval(function () {
//             count--;
//             timer.innerHTML = count;
//             if (count == 0) {
//                 clearInterval(interval);
//                 document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
//             }
//         }, 1000);
//     })
// });

var plantList = document.querySelectorAll('.plants');
var plantSection = document.querySelectorAll('.plant_Section');

for (let [index, plant] of plantList.entries()) {

    plant.addEventListener('click', () => {

        plantSection.forEach(section => {
            if (!section.classList.contains('hide')) {
                section.classList.add('hide');
            }
        })
        plantSection[index].classList.remove('hide');

        plantList.forEach(el => {
            if (el.classList.contains('scale')) {
                el.classList.remove('scale');
            }
        })
        plantList[index].classList.add('scale');
        
    })
}