(function () {
    function ModalCtrl(Room, $uibModalInstance) {
        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
        
        this.submit = function(roomName) {
            Room.addRoom(roomName);
            $uibModalInstance.dismiss();
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();