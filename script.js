const stations = document.querySelectorAll('.station');
const lines = document.querySelectorAll('.line');
console.log(stations);
console.log(lines);
const nextBtn = document.querySelector('.button.next');
nextBtn.addEventListener('click',()=>{
    try {
        stations.forEach((station,index)=>{
            if(station.classList.contains('destination')){
                if(index === 6){
                    alert("Final destination! Press Prev to go back!");
                    throw new Error("Final destination! Press Prev to go back!");
                }
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

const prevBtn = document.querySelector('.button.prev');
prevBtn.addEventListener('click',()=>{
    try {
        stations.forEach((station,index)=>{
            if(station.classList.contains('destination')){
                if(index === 0){
                    alert("You reached the first station! Press Next!");
                    throw new Error("You reached the first station! Press Next!");
                }
                station.classList.remove('destination');
                stations[index-1].classList.add('destination');
                lines[index+1].classList.remove('dest');
                lines[index].classList.add('dest');
                throw new Error("found destination!");
            }
    })
    } catch (error) {
        console.error(error.message);
    }

})