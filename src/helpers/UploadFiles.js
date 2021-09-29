export const UploadFiles = async (fileImage) => {
    
    const cloudUrl = "https://api.cloudinary.com/v1_1/dxzcqv92g/upload?";
    const formData = new FormData();
    formData.append("file",fileImage);
    formData.append("upload_preset","journal-react-app");

    try {

        const resp = await fetch( cloudUrl, {
            method: "POST",
            body: formData
        });


        if(resp.ok)
        {
            const respuesta = await resp.json();
            return  respuesta.secure_url;
        }
        else
        {
            throw await resp.json();
        }

    }
    catch(err)
    {
        throw err;
    }

}
