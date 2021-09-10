const formInputs =[
    'bordersColor',
    'canvasColor',
    'canvasHeight',
    'canvasScale',
    'canvasWidth',
    'foodColor',
    'snakeColor',
    'speed'
];

const gameDefaults = {
    bordersColor: "#000000",
    canvasColor: "#FF4000",
    canvasHeight: 500,
    canvasScale: 10,
    canvasWidth: 500,
    foodColor: "#D9F505",
    snakeColor: "#0FEF0B",
    speed: 250,
    withBorders: false   
}

const getElementByClassname = (className) => document.getElementsByClassName(className)[0];

const formValues = () =>{
    let valuesObj = {};
    
    formInputs.map(item => {
        valuesObj = {...valuesObj, [item]: getElementByClassname(item).value};
    });

    return {...valuesObj, 'withBorders': getElementByClassname('withBorders').checked};
}

const clearGame = () => {
    clearBoard();
    clearForm();
}

const clearForm = () => {
    formInputs.map(item => {
        getElementByClassname(item).value = '';
    });
}

const toggleButton = (buttonClassname, isDisabled) => {
    getElementByClassname(buttonClassname).disabled = isDisabled;
}
