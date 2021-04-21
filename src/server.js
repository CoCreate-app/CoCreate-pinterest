'use strict'
var api = require('@cocreate/api');

class CoCreatePinterest {
	constructor(wsManager) {
		this.module_id = 'pinterest';
		this.wsManager = wsManager;
		this.init();
		
	}
	
	init() {
		if (this.wsManager) {
			this.wsManager.on(this.module_id, (socket, data) => this.pinterestOperations(socket, data));
		}
	}
	async pinterestOperations(socket, data) {
	    let that = this;
        let type = data['type'];
        
        switch (type) {
            case 'getBoardList':
                api.send_response(that.wsManager, socket, {"type":type,"response":data.data}, this.module_id)
                break;
			case 'getUserShow':
				api.send_response(that.wsManager, socket, {"type":type,"response":data.data}, this.module_id)
				break;
        }
        
	}// end sendStripe
	
}//end Class 
module.exports = CoCreatePinterest;
