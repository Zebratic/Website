var _app = function () {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.82;
    this.musicFadeIn = 1000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = [];
    this.brandDescription = [
        "SpotiGrade"
    ];
};

var app = new _app();
