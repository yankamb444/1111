// var svgBuilder = require('svg-builder')
//     .width(300)
//     .height(200);

//     var circleLogo = svg
//         .circleLogo({
//             r: 150,
//             fill: 'none',
//         })
//         .text({
//             'font-family': 'sanscript',
//             'fontsize': 25
//         })
class Shape {
    constructor(color, logo, colorOftext) {
        this.color = color;
        this.logo = logo;
        this.colorOftext = colorOftext;

    }
}
class Triangle extends Shape {
    constructor(color, c1, c2, c3, colorOftext) {
        super(color, colorOftext)
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
    }
};

class Circle extends Shape {
    constructor(color, c1, c2, c3, colorOftext) {
        super(color, colorOftext)
     
    }
};

class Square extends Shape {
    constructor(color, c1, c2, c3, colorOftext) {
        super(color, colorOftext)
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
    }

    generateSvg() {
        console.log("testing 12334")
    }


    // triangle2(){
    //     .triangleLogo({
    //         r: 150,
    //         fill: 'none',
    //     })
    //     .text({
    //         'font-family': 'sanscript',
    //         'fontsize': 25
    //     })}

    printTriangle() {
        console.log(this.c1, this.c2, this.c3)
        console.log("Hi")
        console.log(this.c2)
        console.log(this.color)
    }


};











// get triangleColor(){
//     Triangle.setColor("blue");
//     expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
//     return this.color;

// }
module.exports = {
    Triangle,
    Circle,
    Square
};