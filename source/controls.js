const getElementByClassname = (className) => document.getElementsByClassName(className)[0];

const formValues = () =>{
    let valuesObj = {};
    const formInputs =[
        'speed',
        'canvasColor',
        'canvasWidth',
        'canvasHeight',
        'canvasScale',
        'snakeColor',
        'foodColor',
        'bordersColor'
    ];

    formInputs.map(item => {
        valuesObj = {...valuesObj, [item]: getElementByClassname(item).value};
    });

    return {...valuesObj, 'withBorders': getElementByClassname('withBorders').checked};
}
