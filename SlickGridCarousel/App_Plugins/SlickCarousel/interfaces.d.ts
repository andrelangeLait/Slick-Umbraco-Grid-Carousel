declare namespace SlickGallery {
    export interface ISlickScope extends ng.IScope {
        control: ISlickControlModel;
        openMediaPicker: () => void;
        setImageUrls: () => void;
        thumbnails: string[];
        getThumbnails: () => void;

        setPlaySpeed: () => void;
        setRandomID: () => void;
    }

    // "Control" interfaces - data to be saved
    export interface ISlickControlModel {
        Album: string;
        ImageUrls: string[];
        SlickID: number;


        //settings
        AutoPlay: boolean;
        PlaySpeed: number;
        ShowNav: boolean;
    }

}