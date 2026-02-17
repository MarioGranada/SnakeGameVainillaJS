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

const formInputs = Object.keys(gameDefaults);

const getElementByClassname = (className) => document.getElementsByClassName(className)[0];

const getFormValues = () =>{
    let valuesObj = {};

    formInputs.map(item => {
        valuesObj = {...valuesObj, [item]: getElementByClassname(item).value};
    });

    return {...valuesObj, 'withBorders': getElementByClassname('withBorders').checked};
}

const clearForm = () => {
    formInputs.map(item => {
        getElementByClassname(item).value = item.endsWith('Color') ? gameDefaults[item] : '';
    });
    getElementByClassname('withBorders').checked = false;
}

const toggleButton = (buttonClassname, isDisabled) => {
    getElementByClassname(buttonClassname).disabled = isDisabled;
}
