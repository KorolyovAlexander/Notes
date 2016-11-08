/**
 * Created by Samsung on 06.11.2016.
 */
app.controller('MainController', MainController);

function MainController(){

    var _this = this;

    this.notes = [];

    this.add = function(text){
        _this.notes.unshift(text);
        _this.text = '';
    };

    this.delete = function(val){
        _this.notes.splice(val,1);
    };
}