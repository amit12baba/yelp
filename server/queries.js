const db = require("./db");

async function getAllRestaurants() {
  try {
    const results = await db.query("select * from restaurants");
    console.log(results);
    return results.rows;
  } catch (err) {
    console.log(err);
  }
}

async function getAllReviews(restaurantID) {
  try {
    const sql = "select * from reviews where restaurant_id = $1";
    const sqlParams = [restaurantID];
    console.log(restaurantID)
    results = await db.query(sql, sqlParams);
    console.log(results);
    return results.rows;
  } catch (err) {
    console.log(err);
  }
}

module.exports.getAllRestaurants = getAllRestaurants;
module.exports.getAllReviews = getAllReviews;

