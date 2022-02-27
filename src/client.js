import api from '@cocreate/api'
const CoCreatePinterest = {
	name: 'pinterest',
	actions: {
		getUserShow: {},
		getBoardList: {}
	},
}


api.init({
	name: CoCreatePinterest.name, 
	component:	CoCreatePinterest,
});