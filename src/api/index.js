import axios from "axios";

const addAttributeApi = async attr =>{ 
    let url = "";
        if(attr.data.type == "product"){ 
            url = 'http://localhost:3000/selectedProducts';
        }
        else{ 
            url = 'http://localhost:3000/selectedCustomers';
        }
    const response = await
          axios({
            method:'post',
            url:url,
            data:attr.data
          })

    const data = await response.data;
    return data;
}

export {
    addAttributeApi
}