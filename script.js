const stations = document.querySelectorAll('.station');
const lines = document.querySelectorAll('.line');
console.log(stations);
console.log(lines);
const nextBtn = document.querySelector('.button.next');
nextBtn.addEventListener('click',()=>{
    try {
        stations.forEach((station,index)=>{
            if(station.classList.contains('destination')){
                station.classList.remove('destination');
                stations[index+1].classList.add('destination');
                lines[index].classList.remove('dest');
                lines[index+1].classList.add('dest');
                throw new Error("found destination!");
            }
    })
    } catch (error) {
        console.error(error.message);
    }

})