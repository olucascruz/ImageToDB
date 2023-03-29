const sharp = require('sharp');
const fs = require('fs');


const imageBuffer = fs.createReadStream('card-teatro.png');
console.log(imageBuffer)

async function convertBinary(image){
    const imageResize = sharp()
        .resize({ width: 320 })
        .jpeg();

    const buffer = await image.pipe(imageResize).toBuffer();

    console.log(buffer)
    return await buffer;
    
}

const binaryImage = convertBinary(imageBuffer).then((buffer)=>{
    fs.writeFileSync('imagem4.png', buffer);
}).catch((err) => {
    console.error('Ocorreu um erro ao converter a imagem:', err);
});

