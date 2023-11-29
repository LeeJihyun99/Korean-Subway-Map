const stations = document.querySelectorAll('.station');
const lines = document.querySelectorAll('.line');
let numPrevClicked = 0;
let numNextClicked = 0;
let totalnumBtnClicked = 0;
const nextBtn = document.querySelector('.button.next');
nextBtn.addEventListener('click',()=>{
    
    try {
        numPrevClicked = 0;
        stations.forEach((station,index)=>{
            if(station.classList.contains('destination')){
                if(index === 6){
                    alert("Final destination! Press Prev to go back!");
                    throw new Error("Final destination! Press Prev to go back!");
                }
                station.classList.remove('destination');
                stations[index+1].classList.add('destination');
                if(totalnumBtnClicked ===0){
                    lines[index].classList.remove('dest');
                    lines[index+1].classList.add('dest');
                    throw new Error("found destination!");
                }
                else if(numNextClicked !==0){
                    lines[index].classList.remove('dest');
                    lines[index+1].classList.add('dest');
                    throw new Error("found destination!");
                }else{
                    console.log("first time next clicked");
                    lines.forEach((line)=>{
                        if(line.classList.contains('dest2')){
                            line.classList.remove('dest2');
                        }
                    })
                    lines[index+1].classList.add('dest2');
                    throw new Error("found destination!");
                }
            }
    })
    } catch (error) {
        console.error(error.message);
    }
    numNextClicked += 1;
    totalnumBtnClicked += 1;
})

const prevBtn = document.querySelector('.button.prev');
prevBtn.addEventListener('click',()=>{
    numNextClicked = 0;
    try {
        stations.forEach((station,index)=>{
            if(station.classList.contains('destination')){
                if(index === 0){
                    alert("You reached the first station! Press Next!");
                    throw new Error("You reached the first station! Press Next!");
                }
                station.classList.remove('destination');
                stations[index-1].classList.add('destination');
                if(numPrevClicked !== 0){
                    lines[index+1].classList.remove('dest');
                    lines[index].classList.add('dest');
                    throw new Error("found destination!");
                }else{
                    lines.forEach((line)=>{
                        if(line.classList.contains('dest2')){
                            line.classList.remove('dest2');
                        }
                    })
                    lines[index].classList.add('dest2');
                    throw new Error("found destination!");
                }
            }
    })
    } catch (error) {
        console.error(error.message);
    }
    numPrevClicked +=1;
    totalnumBtnClicked += 1;

})