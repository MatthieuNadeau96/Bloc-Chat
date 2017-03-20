(function () {
    function HomeCtrl(Room, $uiModal) {
        this.rooms = Room.all;
        this.addRoom = function() {
            $uiModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uiModal', HomeCtrl]);
})();