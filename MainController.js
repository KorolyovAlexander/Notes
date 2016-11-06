/**
 * Created by Samsung on 06.11.2016.
 */
app.controller('MainController', MainController);

function MainController(){

    var _this = this;

    _this.notes = [];

    _this.add = function(text){
        _this.notes.push(text);
        _this.text = '';
    };

    _this.delete = function(val){
        _this.notes.splice(val,1);
    };
}