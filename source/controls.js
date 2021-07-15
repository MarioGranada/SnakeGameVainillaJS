const getElementByClassname = (className) => document.getElementsByClassName(className)[0];

const formValues = () =>{
    let valuesObj = {};
    const formInputs =[
        'speed',
        'canvasColor',
        'canvasWidth',
        'canvasHeight',
        'canvasScale',
        'withBorders',
        'snakeColor',
        'foodColor'
    ];

    formInputs.map(item => {
        valuesObj = {...valuesObj, [item]: getElementByClassname(item).value};
    });

    return valuesObj;
}
