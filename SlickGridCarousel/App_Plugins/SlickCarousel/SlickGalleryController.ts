angular.module("umbraco").controller("SlickGalleryController", function ($scope: SlickGallery.ISlickScope, assetsService: umbraco.services.IAssetsService, entityResource, mediaResource, dialogService: umbraco.services.IDialogService) {
    assetsService.loadCss("/App_Plugins/SlickCarousel/SlickGallery.min.css", $scope, null, 1000);



    if ($scope.control.Album == null) {
        $scope.control.Album = null;
    }

    if ($scope.control.Album != null) {
        getThumbnails($scope.control.Album);
    }
    if (!$scope.control.AutoPlay) {
        // resets playspeed to 0 when AutoPlay is false.
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
   


    function getThumbnails(id: string) {
        mediaResource.getChildren(id)
            .then((contentArray: any) => {
                //for loop and set each url for thumbnails.
                $scope.thumbnails = [];
                for (var i = 0; i < contentArray.items.length; i++) {
                    //add src for each image.
                    entityResource.getById(contentArray.items[i].id, "Media").then((e: any) => {
                        if (e.metaData.umbracoFile.Value.src == null) {
                            $scope.thumbnails.push(e.metaData.umbracoFile.Value);
                        } else {
                            $scope.thumbnails.push(e.metaData.umbracoFile.Value.src);
                        }
                    });
                }
            });
    }

   
    $scope.setPlaySpeed = () => {
        // resets playspeed to 2000 when AutoPlay is false.
        if (!$scope.control.AutoPlay) {
            $scope.control.PlaySpeed = 2000;
        }
    }


    $scope.openMediaPicker = () => {
        (<any>dialogService).mediaPicker({
            disableFolderSelect: false,
            onlyImages: false,
            callback: populateAlbum
        })
    };

    function setRandomID() { 
        var randomN = Math.floor((Math.random() * 12000) + 1);

        $scope.control.SlickID = randomN;

    }

    function populateAlbum(item: any) {
        // set ID for album
        $scope.control.Album = item.id;
        // get children
        getThumbnails($scope.control.Album);
        setRandomID();
    }
}); 