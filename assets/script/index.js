'use strict';
const shapeSelect = document.getElementById("shapeSelect");
const colorSelect = document.getElementById("colorSelect");
const grid = document.getElementById("grid");
const createBtn = document.getElementById("createBtn");

const shapes = []; // Array to save shapes (name, color)
const maxShapes = 20; //Max content for the div container

//Creating class with 2 properties (name, color)
class Shape {
    #name;
    #color;
  
    constructor(name, color) {
        this.#name = name;
        this.#color = color;
    }
  
    get name() {
        return this.#name;
    }
  
    get color() {
        return this.#color;
    }
  
    getInfo() {
        //Validation to return color name in format like 'Blue, Green...'
        if (this.#color === "#09f") return `Blue ${this.#name}`;
        if (this.#color === "#9f0") return `Green ${this.#name} `;
        if (this.#color === "#f90") return `Orange ${this.#name} `;
        if (this.#color === "#f09") return `Pink ${this.#name}`;
        if (this.#color === "#90f") return `Purple ${this.#name} `;
    }
  }

  
  //Function to add divs with the shape/color & to show info
  function createShape() {
    const shapeType = shapeSelect.value; // box input
    const shapeColor = colorSelect.value; // box input
    const shape = new Shape(shapeType, shapeColor); // Creating object 'shape'
    
    if (shapes.length >= maxShapes) {
        fullStorageMsg.style.visibility = 'visible';
        return;
    }

    shapes.push(shape); 
    const div = document.createElement("div");
    div.className = `${shapeType} shape`;
    div.style.backgroundColor = shapeColor;
    
    grid.appendChild(div);

    const  infoShape = shape.getInfo()
    const positionShape = shapes.lastIndexOf(shape) + 1 
    // getting the position of the shape in the array
    //console.log(positionShape);

    //Event to show info when a div is clicked
    div.addEventListener("click", () => 
    infoMsg.innerHTML =  `Unit ${positionShape}: ${infoShape}`);
  }

 //Creating shapes
  createBtn.addEventListener("click", () => {
    createShape();
  })