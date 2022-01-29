'use strict'

const router = app => {
	app.route('/')
		.get((req, res) => {
			const response = {
				status: true,
				results: 'Server berjalan baik'
			};
			res.json(response);
			res.end();
		})
}

module.exports = router;
