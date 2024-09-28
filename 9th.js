////////////////////////////// Classed & Objects //////////////////////////////

const stud = {
    name: "raj",
    class: "bsc IT",
    roll: 9,
    phn: 9000000001,
    marks: function (){
        // console.log(`your phn is `, this.phn);
    }
}


const gst = {
    tax1: function(){
        console.log("the tax is 2%");
    },
    tax2(){
        console.log("the tax is 12%");
    }
}

////////// Prototype -> __proto__

const empl = {
    salary: 20000
}
empl.__proto__ = gst;

const empl1 = {
    salary: 20000
}
empl1.__proto__ = gst;

const empl2 = {
    salary: 20000
}
empl2.__proto__ = gst;

const empl3 = {
    salary: 20000
}
empl3.__proto__ = gst;


//////////////////// Classes


class TyotaCar {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.BrandName = brand;
    }
}
// console.log(TyotaCar);

let carFirst = new TyotaCar();
// console.log(carFirst);
// console.log(carFirst.start());
// console.log(carFirst.stop());

carFirst.setBrand("Fortuner");

console.log(carFirst);
