export function msg (m, color = 0) {
    let colorCode = '#333333'
    switch(color) {
        case 1:
            colorCode = '#B33115'
            break;
        case 2:
            colorCode = '#B3B115'
            break;
        case 3:
            colorCode = '#39B315'
            break;
        case 4:
            colorCode = '#15B394'
            break;
        case 5:
            colorCode = '#1570B3'
            break;
        case 6:
            colorCode = '#8315B3'
            break;
        case 7:
            colorCode = '#B31573'
            break;
    }
    console.log(`%c >> ${m}`, 'color: '+ colorCode);
}
