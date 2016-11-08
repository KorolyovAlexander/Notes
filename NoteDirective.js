/**
 * Created by Samsung on 06.11.2016.
 */
app.directive('note', NoteDirective);

function NoteDirective(){
    return{
        scope:{
            value: '=',
            delete: '&',
            index: '='
        },
        restrict: 'E',
        templateUrl: 'note-directive.html',
        controller: NoteController,
        bindToController: true,
        controllerAs: 'vm'
    };
}

function NoteController(){
    this.onClick = function(){
        this.delete();
    };
}