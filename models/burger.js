var orm = require("../config/orm.js")

var burger = {
    all: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    create: function(cols, values, callback) {
        orm.insertOne("burgers", cols, values, function(res){
            callback(res);
        })
    },
    update: function(cols, values, callback) {
        orm.updateOne("burgers", cols, values, function(res){
            callback(res);
        })
    }
}

module.exports = burger;