var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._diceLabel1 = new createjs.Text("1", "40px Consolas", "#000000");
            this._diceLabel1.regX = this._diceLabel1.getMeasuredWidth() * 0.5;
            this._diceLabel1.regY = this._diceLabel1.getMeasuredHeight() * 0.5;
            this._diceLabel1.x = 270;
            this._diceLabel1.y = 200;
            stage.addChild(this._diceLabel1);
            this._diceLabel2 = new createjs.Text("1", "40px Consolas", "#000000");
            this._diceLabel2.regX = this._diceLabel2.getMeasuredWidth() * 0.5;
            this._diceLabel2.regY = this._diceLabel2.getMeasuredHeight() * 0.5;
            this._diceLabel2.x = 370;
            this._diceLabel2.y = 200;
            stage.addChild(this._diceLabel2);
            this._result = new createjs.Text("The Result: 0", "40px Consolas", "#000000");
            this._result.regX = this._result.getMeasuredWidth() * 0.5;
            this._result.regY = this._result.getMeasuredHeight() * 0.5;
            this._result.x = 300;
            this._result.y = 260;
            stage.addChild(this._result);
            this._firstDice = new objects.Button("1", 300, 100, false);
            stage.addChild(this._firstDice);
            this._secondDice = new objects.Button("1", 400, 100, false);
            stage.addChild(this._secondDice);
            // add the Start button to the MENU scene
            this._rollButton = new objects.Button("rollbutton", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 160, false);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //Private Methods
        Play.prototype._swapImage = function (dice, num) {
            if (dice == 1) {
                this._bmp = new objects.Button(num.toString(), 300, 100, false);
                this._diceLabel1 = new createjs.Text(num.toString(), "40px Consolas", "#000000");
                this._diceLabel1.regX = this._diceLabel1.getMeasuredWidth() * 0.5;
                this._diceLabel1.regY = this._diceLabel1.getMeasuredHeight() * 0.5;
                this._diceLabel1.x = 270;
                this._diceLabel1.y = 200;
                stage.addChild(this._diceLabel1);
                stage.addChild(this._bmp);
            }
            else {
                this._bmp = new objects.Button(num.toString(), 400, 100, false);
                this._diceLabel2 = new createjs.Text(num.toString(), "40px Consolas", "#000000");
                this._diceLabel2.regX = this._diceLabel2.getMeasuredWidth() * 0.5;
                this._diceLabel2.regY = this._diceLabel2.getMeasuredHeight() * 0.5;
                this._diceLabel2.x = 370;
                this._diceLabel2.y = 200;
                stage.addChild(this._diceLabel2);
                stage.addChild(this._bmp);
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            this._rand1 = Math.floor((Math.random() * 6) + 1);
            this._rand2 = Math.floor((Math.random() * 6) + 1);
            this._total = this._rand1 + this._rand2;
            this.stage.removeChild(this._result);
            this.stage.removeChild(this._diceLabel1);
            this.stage.removeChild(this._diceLabel2);
            this._swapImage(1, this._rand1);
            this._swapImage(2, this._rand2);
            this._result = new createjs.Text("The result : " + this._total.toString(), "35px Consolas", "#000000");
            this._result.regX = this._result.getMeasuredWidth() * 0.5;
            this._result.regY = this._result.getMeasuredHeight() * 0.5;
            this._result.x = 300;
            this._result.y = 260;
            this.stage.addChild(this._result);
            this._rollButton = new objects.Button("rollbutton", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 160, false);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map