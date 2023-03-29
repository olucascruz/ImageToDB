const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');


async function updateImage(filePath) {
    const fileContent = fs.createReadStream(filePath);
    let formData = new FormData();
    formData.append('event_img', fileContent);
    
    const response = await axios.patch('url_que_retorna_objeto_com_imagem', formData, {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
  });
  
    if (response.status !== 200) {
      throw new Error(`Failed to update image: ${response.statusText}`);
    }
  
    const data = await response.data;
    console.log( await data)
    return data;
  }



 updateImage('imagem.png')

