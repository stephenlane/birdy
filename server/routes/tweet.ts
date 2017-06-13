import { Request, Response, Router } from "express";
import { log4js } from "../config";
import { logger } from "../config";
import { sqlite3 } from "../config";
import { db } from "../config";
const tweetRouter: Router = Router();


tweetRouter.post("/getTweets", (request: Request, response: Response) => {
  logger.info("tweet route called");
  var data = [];
  db.all("SELECT * FROM tweets", function(err, rows) {
    response.json(rows);
  });
});//end get tweet


tweetRouter.post("/addTweet", (request: Request, response: Response) => {
    logger.info('addTweet Route');
      var tweet_text = request.body.tweet_text;
var stmt = db.prepare("INSERT INTO tweets VALUES (?)");
    stmt.run(tweet_text);
stmt.finalize();
response.json({
  'message': "Tweet Successfully Created"
});
  }); //end add tweet


export { tweetRouter };
