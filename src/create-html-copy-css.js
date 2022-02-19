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

        })

    })
}

const copyCSS = () => {
    return new Promise(
        (resolve, reject) => {
            fs.copyFile('./src/style.css', './output/style.css', (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'CSS File Copied!!',
                })
            })
        }
    )
}

module.exports = { copyCSS, createHTML }