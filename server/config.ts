export const serverPort = 4300;
export const env = "development";
export const log4js = require('log4js');
export const logger = log4js.getLogger();
export const sqlite3 = require('sqlite3').verbose();
export const db = new sqlite3.Database('tweets_db');

log4js.configure({
    appenders: [{
        type: 'console'
    }, {
        type: 'file',
        filename: 'tweet.log'
    }]
});



try{
db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS tweets (tweet TEXT)");
});
}
catch(err) {
logger.error(err);
}
  //db.close();
