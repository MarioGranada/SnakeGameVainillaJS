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

    valuesObj = {...valuesObj, 'withBorders': getElementByClassname('withBorders').checked};

    // console.log('in here oe', valuesObj);

    return valuesObj;
}
