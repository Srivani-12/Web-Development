const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");


let priceGap = 500;


for(let i=0; i<priceInput.length;i++){
    priceInput[i].addEventListener("input",e =>{
        let minp = parseInt(priceInput[0].value);
        let maxp = parseInt(priceInput[1].value);
        let diff = maxp - minp;

        if(minp<0){
            alert("minimum price cannot be less than 0");
            priceInput[0].value =0;
            minp =0;
        }
        if(maxp > 10000){
            alert("maximum price cannot be greater than 10000");
            priceInput[1].value = 1000;
            maxp=1000;
        }

        if(minp>maxp-priceGap){
            priceInput[0].value = maxp-priceGap;
            minp = maxp-priceGap;
            if(minp <0){
                priceInput[0].value = 0;
                minp=0;
            }
        }
        if(diff >= priceGap && maxp <= rangeInput[1].max){
            if(e.target.className === 'min-input'){
                rangeInput[0].value=minp;
                let value1 = rangeInput[0].max;
                rangevalue.style.left = `${(minp/value1)*100}%`; 
            }
            else{
                rangeInput[1].value = maxp;
                let value2 = rangeInput[1].max;
                rangevalue.style.right = `${100-(maxp /value2) *100}%`;
            }
        }
    })  
    for(let i =0; i<rangeInput.length;i++){
        rangeInput[i].addEventListener("input",e=>{
            let minval = parseInt(rangeInput[0].value);
            let maxval = parseInt(rangeInput[1].value);

            let diff = maxval-minval;
            if (diff < priceGap) {
                if (e.target.className === "min-range") {
                    rangeInput[0].value = maxval - priceGap;
                } else {
                    rangeInput[1].value = minval + priceGap;
                }
            } else {
                priceInput[0].value = minval;
                priceInput[1].value = maxval;
                rangevalue.style.left = `${(minval / rangeInput[0].max) * 100}%`;
                rangevalue.style.right = `${100 - (maxval / rangeInput[1].max) * 100}%`;
            }

        })
    
}

}