/*
 * Create mysql connection pool.
 * mysql数据库连接池
 */
var _poolModule = require('generic-pool');
var mysql = require('mysql');

// 
var createMysqlPool = function (app, opt, id) {

	// 
	var mysqlConfig = app.get(opt)[id];

	// 
	return new _poolModule.Pool({
		name: mysqlConfig.database,
		create: function (callback) {

			// 
			var client = mysql.createConnection({
				host: mysqlConfig.host,
				user: mysqlConfig.user,
				password: mysqlConfig.password,
				database: mysqlConfig.database
			});
			callback(null, client);
		},

		// 
		destroy: function (client) {
			client.end();
		},
		max: 10,
		idleTimeoutMillis: 30000,
		log: false
	});
};

// 
exports.createMysqlPool = createMysqlPool;


