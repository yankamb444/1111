const inquirer = require('inquirer');
const fs = require('fs-extra');
const {
    Triangle,
    Circle,
    Square
} = require('./lib/shapes.js');

var svg = require('svg-builder');
// .width(300)
// .height(200);



async function main() {
        await inquirer
            .prompt([

                {
                    name: 'shape',
                    type: 'list',
                    message: 'Select Triangle, Square, or Circle',
                    choices: ['Triangle', 'Circle', 'Square'],
                },

                {
                    name: "userTxt",
                    type: "input",
                    message: "Type a three letter word",
                },

                {
                    name: 'textColor',
                    type: "list",
                    message: "Select a color keyword",
                    choices: ["#000000", "#00FFFF", "#0000FF"],
                },

                {
                    name: 'shapeColor',
                    type: "list",
                    message: "Select the shape's color: #000000 is black, #00FFFF is blue, #0000FF is aqua",
                    choices: ["	#000000", "	#00FFFF", "	#0000FF"],
                },
            ])
            .then(answer => {
                if (answer.shape === "Circle") {
                    GenerateCircle()
                } else if (answer.shape === "Triangle") {
                    generateTriangle()
                } else if (answer.shape === "Square") {
                    generateSquare()
                }

            });

        async function GenerateCircle(circle) {
                        let circleRender = svg
                            .circle([{
                                r: 40,
                                cx: 84,
                                cy: 82,
                            fill: ""}]);

                               
                            }
                    };
                



                    // fs.appendFile('Logo.SVG', "", (err) => {
                    //     if (err) console.log(err);
                    //     else()
                        
                    // });



                // var triangle1 = new Triangle("blue", 10, 10, 10)

                // triangle1.printTriangle()


                // triangle1.generateSvg()

                main();
                // Circle.prototype = Object.create(Shape.prototype);
                // Circle.prototype.getRadius = function () {
                //     return this.radius;


                // fs.appendFile('Logo.SVG', function (generateSvg)
        