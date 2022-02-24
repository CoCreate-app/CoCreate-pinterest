'use strict'
var api = require('@cocreate/api');

class CoCreatePinterest {
	constructor(wsManager) {
		this.moduleName = 'pinterest';
		this.wsManager = wsManager;
		this.init();
		
	}
	
	init() {
		if (this.wsManager) {
			this.wsManager.on(this.moduleName, (socket, data) => this.pinterestOperations(socket, data));
		}
	}

	async pinterestOperations(socket, data) {
		let params = data['data'];
		let environment;
		let action = data['action'];
        let pinterest = false;

		try {
			let org = await api.getOrg(data, this.moduleName);
			if (params.environment){
				environment = params['environment'];
				delete params['environment'];  
			} else {
			  	environment = org.apis[this.moduleName].environment;
			}
			
		}catch(e){
            console.log(this.moduleName+" : Error Connect to api",e)
            return false;
        }

        try {
            let response
			switch (action) {
				case 'getProfile':
					response = await pinterest.getProfile();
					break;
				case 'updateProfile':
					response = await pinterest.updateProfile();
					break;
			}
            this.wsManager.send(socket, this.moduleName, { action, response })
    
        } catch (error) {
          this.handleError(socket, action, error)
        }
    }

    handleError(socket, action, error) {
        const response = {
            'object': 'error',
            'data': error || error.response || error.response.data || error.response.body || error.message || error,
        };
        this.wsManager.send(socket, this.moduleName, { action, response })
    }
	
}//end Class 
module.exports = CoCreatePinterest;
