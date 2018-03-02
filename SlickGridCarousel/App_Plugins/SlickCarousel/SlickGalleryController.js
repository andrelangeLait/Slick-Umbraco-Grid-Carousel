angular.module("umbraco").controller("SlickGalleryController", function ($scope, assetsService, entityResource, mediaResource, dialogService) {
    assetsService.loadCss("/App_Plugins/SlickCarousel/SlickGallery.min.css", $scope, null, 1000);
    if ($scope.control.Album == null) {
        $scope.control.Album = null;
    }
    if ($scope.control.Album != null) {
        getThumbnails($scope.control.Album);
    }
    if (!$scope.control.AutoPlay) {
        $scope.control.PlaySpeed = 2000;
    }
    if ($scope.control.AutoPlay) {
        if ($scope.control.PlaySpeed == 0) {
            $scope.control.PlaySpeed = 2000;
        }
    }
    if ($scope.control.SlickID == null || $scope.control.SlickID < 1) {
        setRandomID();
    }
    function getThumbnails(id) {
        mediaResource.getChildren(id)
            .then(function (contentArray) {
            $scope.thumbnails = [];
            for (var i = 0; i < contentArray.items.length; i++) {
                entityResource.getById(contentArray.items[i].id, "Media").then(function (e) {
                    if (e.metaData.umbracoFile.Value.src == null) {
                        $scope.thumbnails.push(e.metaData.umbracoFile.Value);
                    }
                    else {
                        $scope.thumbnails.push(e.metaData.umbracoFile.Value.src);
                    }
                });
            }
        });
    }
    $scope.setPlaySpeed = function () {
        if (!$scope.control.AutoPlay) {
            $scope.control.PlaySpeed = 2000;
        }
    };
    $scope.openMediaPicker = function () {
        dialogService.mediaPicker({
            disableFolderSelect: false,
            onlyImages: false,
            callback: populateAlbum
        });
    };
    function setRandomID() {
        var randomN = Math.floor((Math.random() * 12000) + 1);
        $scope.control.SlickID = randomN;
    }
    function populateAlbum(item) {
        $scope.control.Album = item.id;
        getThumbnails($scope.control.Album);
        setRandomID();
    }
});
//# sourceMappingURL=SlickGalleryController.js.map