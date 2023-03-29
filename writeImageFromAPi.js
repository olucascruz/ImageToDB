    const sharp = require('sharp');
    const fs = require('fs');
    const axios = require('axios');

    async function GetBuffer(){
        const res = await axios.get('url_que_retorna_objeto_com_imagem')

        console.log(await res.data);
        console.log("Titulo: ", await res.data.event_title)
        const image = await res.data.event_img;

        console.log("buffer: ", Buffer.from(image.data.data))
        return Buffer.from(image.data.data);
    }


    async function WriteImage() {
        const buffer = GetBuffer().then((buffer)=>{
            fs.writeFileSync("imagem3.jpeg", buffer);
        }).catch((err) => {
            console.error('Ocorreu um erro ao converter a imagem:', err);
        });
    }


    WriteImage();

