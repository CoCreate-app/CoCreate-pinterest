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
	    let that = this;
        let type = data['type'];
        
        switch (type) {
            case 'getBoardList':
                api.send_response(that.wsManager, socket, {"type":type,"response":data.data}, this.moduleName)
                break;
			case 'getUserShow':
				api.send_response(that.wsManager, socket, {"type":type,"response":data.data}, this.moduleName)
				break;
        }
        
	}// end sendStripe
	
}//end Class 
module.exports = CoCreatePinterest;
