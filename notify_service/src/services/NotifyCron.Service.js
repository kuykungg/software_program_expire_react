const axios = require('axios');
module.exports = {
    async fetchData(){
        try{
            const response = await axios.get("localhost:3001/apiv1/software/getData")
        }catch(error){
            console.error("Error pulling API:", error);
        }

    }
}