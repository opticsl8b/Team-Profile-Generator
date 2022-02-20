const fs = require('fs')

const createHTML = (content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/index.html', content, (err) => {
            if (err) {
                reject(err)
                    //return here prevent excute the resolve() function as well
                return;
            };

            resolve({
                ok: true,
                message: 'HTML File Created!!'
            })
            console.log('HTML File Created!!');
        })

    })
}

const copyCSS = () => {
    return new Promise(
        (resolve, reject) => {
            fs.copyFile('./src/style.css', './output/style.css', (err) => {
                if (err) {
                    reject(err);
                    console.log('CSS File Copied Fail');
                    return;
                }
                resolve({
                    ok: true,
                    message: 'CSS File Copied!!',
                })
                console.log('CSS File Copied!!');
            })
        }
    )
}

module.exports = { copyCSS, createHTML }