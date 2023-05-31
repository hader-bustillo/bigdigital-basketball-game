function CEndPanel(iScore) {
    var _oContainer;
    var _oContainer_scores;
    var _oPanelContainer;
    var _oFade;
    var _oButExit;
    var _oButRestart;
    var _oInterface;
    var _oKeyboardList = [];
    var _oName = [];

    var typingNameIndex = 0;
    var nameLetterRect = [];
    // var _oUserNamePanel;

    var _pStartPanelPos;

    this._init = function (iScore) {
        _oContainer = new createjs.Container();
        s_oStage.addChild(_oContainer);

        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown", function () { });
        _oContainer.addChild(_oFade);

        createjs.Tween.get(_oFade).to({ alpha: 0.7 }, 500);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box_big');
        var oPanel = createBitmap(oSprite);
        oPanel.regX = oSprite.width / 2;
        oPanel.regY = oSprite.height / 2;
        // oPanel.x = CANVAS_WIDTH_HALF - 156;
        oPanel.x = CANVAS_WIDTH_HALF;
        // oPanel.y = CANVAS_HEIGHT_HALF - 260;
        oPanel.y = CANVAS_HEIGHT_HALF;
        _oPanelContainer.addChild(oPanel);

        // username
        var oUserNamePane_1 = s_oSpriteLibrary.getSprite('bg_name');
        var oUNPanel_1 = createBitmap(oUserNamePane_1);
        oUNPanel_1.regX = oUserNamePane_1.width / 2;
        oUNPanel_1.regY = oUserNamePane_1.height / 2;
        oUNPanel_1.x = CANVAS_WIDTH_HALF - 200;
        oUNPanel_1.y = CANVAS_HEIGHT_HALF + 100;
        _oPanelContainer.addChild(oUNPanel_1);

        var oUserNamePane_2 = s_oSpriteLibrary.getSprite('bg_name');
        var oUNPanel_2 = createBitmap(oUserNamePane_2);
        oUNPanel_2.regX = oUserNamePane_2.width / 2;
        oUNPanel_2.regY = oUserNamePane_2.height / 2;
        // oUNPanel_2.x = CANVAS_WIDTH_HALF - 156;
        oUNPanel_2.x = CANVAS_WIDTH_HALF;
        oUNPanel_2.y = CANVAS_HEIGHT_HALF + 100;
        _oPanelContainer.addChild(oUNPanel_2);

        var oUserNamePane_3 = s_oSpriteLibrary.getSprite('bg_name');
        var oUNPanel_3 = createBitmap(oUserNamePane_3);
        oUNPanel_3.regX = oUserNamePane_1.width / 2;
        oUNPanel_3.regY = oUserNamePane_1.height / 2;
        oUNPanel_3.x = CANVAS_WIDTH_HALF + 200;
        oUNPanel_3.y = CANVAS_HEIGHT_HALF + 100;
        _oPanelContainer.addChild(oUNPanel_3);

        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height / 2;
        _pStartPanelPos = { x: _oPanelContainer.x, y: _oPanelContainer.y };
        createjs.Tween.get(_oPanelContainer)
            .to({ y: 0 }, 1000, createjs.Ease.backOut)
            .call(function () { $(s_oMain).trigger("show_interlevel_ad"); });

        // var iX = CANVAS_WIDTH_HALF - 156;
        var iX = CANVAS_WIDTH_HALF;
        var iY = CANVAS_HEIGHT_HALF;
        var iWidth = 550;
        var iHeight = 120;

        new CTLText(_oPanelContainer,
            iX - iWidth / 2, iY + 200, iWidth, iHeight,
            30, "center", PRIMARY_FONT_COLOUR_WHITE, PRIMARY_FONT, 1,
            2, 2,
            TEXT_YOUR_NAME,
            true, true, true,
            false);

        // var iX = CANVAS_WIDTH_HALF - 156;
        var iX = CANVAS_WIDTH_HALF;
        var iY = CANVAS_HEIGHT_HALF - 300;
        var iWidth = 550;
        var iHeight = 150;

        new CTLText(_oPanelContainer,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            65, "center", PRIMARY_FONT_COLOUR_WHITE, PRIMARY_FONT, 1,
            2, 2,
            TEXT_GAMEOVER,
            true, true, true,
            false);

        // var iX = CANVAS_WIDTH_HALF - 156;
        var iX = CANVAS_WIDTH_HALF;
        var iY = CANVAS_HEIGHT_HALF - 200;
        var iWidth = 550;
        var iHeight = 120;

        new CTLText(_oPanelContainer,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            40, "center", PRIMARY_FONT_COLOUR_WHITE, PRIMARY_FONT, 1,
            2, 2,
            TEXT_YOUR_SCORE,
            true, true, true,
            false);

        // var iX = CANVAS_WIDTH_HALF - 156;
        var iX = CANVAS_WIDTH_HALF;
        var iY = CANVAS_HEIGHT_HALF - 100;
        var iWidth = 600;
        var iHeight = 200;

        new CTLText(_oPanelContainer,
            iX - iWidth / 2, iY - iHeight / 2, iWidth, iHeight,
            100, "center", PRIMARY_FONT_COLOUR_WHITE, PRIMARY_FONT, 1,
            2, 2,
            (iScore === "" || iScore === 0) ? "0" : iScore,
            true, true, true,
            false);

        this.loadKeyBoard();

        // _oButExit = new CGfxButton(CANVAS_WIDTH_HALF - 156 - 130, 1100, s_oSpriteLibrary.getSprite('but_home'), _oPanelContainer);
        _oButExit = new CGfxButton(CANVAS_WIDTH_HALF - 200, 1700, s_oSpriteLibrary.getSprite('but_home'), _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        // _oButRestart = new CGfxButton(CANVAS_WIDTH_HALF - 156 + 130, 1100, s_oSpriteLibrary.getSprite('but_restart'), _oPanelContainer);
        _oButRestart = new CGfxButton(CANVAS_WIDTH_HALF + 200, 1700, s_oSpriteLibrary.getSprite('but_restart'), _oPanelContainer);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onNext, this);



        _oInterface = new CInterface(_oContainer);
    };

    this.typingName = function (c) {
        if (c === "Delete" && typingNameIndex > 0 && typingNameIndex < 3) {
            nameLetterRect[typingNameIndex - 1].refreshText("");
            typingNameIndex--;
        } else if (c === "Delete" && typingNameIndex === 3) {
            nameLetterRect[typingNameIndex - 1].refreshText("");
            typingNameIndex--;
        } else if (typingNameIndex < 3 && c !== "Delete" && c !== "Enter") {
            nameLetterRect[typingNameIndex] = new CTLText(_oPanelContainer,
                240 + 200 * typingNameIndex, 970, 200, 200,
                80, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1,
                2, 2,
                c,
                true, true, true,
                false);
            _oName.splice(typingNameIndex, 1, c);
            typingNameIndex++;
        }
    }
    this.loadKeyBoard = function () {
        var keyboard_list = [
            {
                "key_id": 0,
                "key_name": "Q"
            },
            {
                "key_id": 1,
                "key_name": "W"
            },
            {
                "key_id": 2,
                "key_name": "E"
            },
            {
                "key_id": 3,
                "key_name": "R"
            },
            {
                "key_id": 4,
                "key_name": "T"
            },
            {
                "key_id": 5,
                "key_name": "Y"
            },
            {
                "key_id": 6,
                "key_name": "U"
            },
            {
                "key_id": 7,
                "key_name": "I"
            },
            {
                "key_id": 8,
                "key_name": "O"
            },
            {
                "key_id": 9,
                "key_name": "P"
            },
            {
                "key_id": 10,
                "key_name": "Delete"
            },
            {
                "key_id": 11,
                "key_name": "A"
            },
            {
                "key_id": 12,
                "key_name": "S"
            },
            {
                "key_id": 13,
                "key_name": "D"
            },
            {
                "key_id": 14,
                "key_name": "F"
            },
            {
                "key_id": 15,
                "key_name": "G"
            },
            {
                "key_id": 16,
                "key_name": "H"
            },
            {
                "key_id": 17,
                "key_name": "J"
            },
            {
                "key_id": 18,
                "key_name": "K"
            },
            {
                "key_id": 19,
                "key_name": "L"
            },
            {
                "key_id": 20,
                "key_name": "Enter"
            },
            {
                "key_id": 21,
                "key_name": "Z"
            },
            {
                "key_id": 22,
                "key_name": "X"
            },
            {
                "key_id": 23,
                "key_name": "C"
            },
            {
                "key_id": 24,
                "key_name": "V"
            },
            {
                "key_id": 25,
                "key_name": "B"
            },
            {
                "key_id": 26,
                "key_name": "N"
            },
            {
                "key_id": 27,
                "key_name": "M"
            },
            // {
            //     "key_id": 28,
            //     "key_name": " "
            // }
        ]

        for (var i = 0; i < keyboard_list.length; i++) {
            if (i < 11) {
                _oKeyboardList[i] = new CBGTextButton(120 + i * 80, 1340, i < 10 ? 65 : 120, 65, s_oSpriteLibrary.getSprite('bg_btn'), keyboard_list[i].key_name, PRIMARY_FONT, SECONDARY_FONT_COLOUR, 12, _oPanelContainer);
            } else if (i < 21) {
                _oKeyboardList[i] = new CBGTextButton(160 + (i - 11) * 80, 1420, i < 20 ? 65 : 125, 65, s_oSpriteLibrary.getSprite('bg_btn'), keyboard_list[i].key_name, PRIMARY_FONT, SECONDARY_FONT_COLOUR, 12, _oPanelContainer);
            } else {
                _oKeyboardList[i] = new CBGTextButton(290 + (i - 21) * 80, 1500, i < 28 ? 65 : 160, 65, s_oSpriteLibrary.getSprite('bg_btn'), keyboard_list[i].key_name, PRIMARY_FONT, SECONDARY_FONT_COLOUR, 12, _oPanelContainer);
            }
        }

        _oKeyboardList.forEach((keyboard, index) => {
            keyboard.addEventListener(ON_MOUSE_DOWN, function () {
                this.typingName(keyboard_list[index].key_name)
                if(keyboard_list[index].key_name == 'Enter') {
                    this._onNext()
                }

            }, this);
        });
    }

    this.loadHighScores = function () {
        var scoreList = JSON.parse(localStorage.getItem("scoreList"));
        var iX = CANVAS_WIDTH_HALF;
        var iY = CANVAS_HEIGHT_HALF - 200;
        var iWidth = 200;
        var iHeight = 100;
        new CTLText(_oPanelContainer,
            iX - iWidth - 100, iY - iHeight - 100, 600, 200,
            80, "center", PRIMARY_FONT_COLOUR_WHITE, PRIMARY_FONT, 1,
            2, 2,
            "HIGH SCORE",
            true, true, true,
            false);

        for (var i = 0; i < scoreList.length; i++) {
            if (i > 9) continue;
            new CTLText(_oPanelContainer,
                iX - iWidth / 2 - 200, iY - iHeight / 2 + 80 * i, iWidth, iHeight,
                60, "center", PRIMARY_FONT_COLOUR_WHITE, PRIMARY_FONT, 1,
                2, 2,
                (i + 1),
                true, true, true,
                false);

            new CTLText(_oPanelContainer,
                iX - iWidth / 2 - 25, iY - iHeight / 2 + 80 * i, iWidth, iHeight,
                60, "center", PRIMARY_FONT_COLOUR_WHITE, PRIMARY_FONT, 1,
                2, 2,
                scoreList[i].score === 0 ? "0" : scoreList[i].score,
                true, true, true,
                false);

            new CTLText(_oPanelContainer,
                iX - iWidth / 2 + 150, iY - iHeight / 2 + 80 * i, iWidth, iHeight,
                60, "center", PRIMARY_FONT_COLOUR_WHITE, PRIMARY_FONT, 1,
                2, 2,
                scoreList[i].name,
                true, true, true,
                false);
        }
    }

    this.unload = function () {
        createjs.Tween.get(_oFade)
            .to({ alpha: 0 }, 500);

        createjs.Tween.get(_oPanelContainer)
            .to({ y: _pStartPanelPos.y }, 400, createjs.Ease.backIn)
            .call(function () {
                // _oButExit.unload();
                _oButRestart.unload();
                // _oFade.removeAllEventListener();
                s_oStage.removeChild(_oContainer);
                s_oEndPanel = null;
            });
    };

    this._init_scores = function (iScore) {
        _oContainer_scores = new createjs.Container();
        s_oStage.addChild(_oContainer_scores);

        _oPanelContainer = new createjs.Container();
        s_oStage.addChild(_oPanelContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown", function () { });
        _oContainer_scores.addChild(_oFade);

        createjs.Tween.get(_oFade).to({ alpha: 0.7 }, 500);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box_big');
        var oPanel = createBitmap(oSprite);
        oPanel.regX = oSprite.width / 2;
        oPanel.regY = oSprite.height / 2 - 200;
        // oPanel.x = CANVAS_WIDTH_HALF - 156;
        oPanel.x = CANVAS_WIDTH_HALF;
        oPanel.y = CANVAS_HEIGHT_HALF - 260;
        _oPanelContainer.addChild(oPanel);

        this.loadHighScores();

        // _oButExit = new CGfxButton(CANVAS_WIDTH_HALF - 156, 1100, s_oSpriteLibrary.getSprite('but_home'), _oPanelContainer);
        _oButExit = new CGfxButton(CANVAS_WIDTH_HALF, 1600, s_oSpriteLibrary.getSprite('but_home'), _oPanelContainer);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);



        _oInterface = new CInterface(_oContainer_scores);
    };

    this._onExit = function () {
        this.unload();
        s_oGame.onExit();
    };

    this._onNext = function () {
        var name = _oName.join("");
        var score = iScore === "" ? 0 : iScore;

        if (nameLetterRect.length === 3) {
            var scoreList = JSON.parse(localStorage.getItem("scoreList"));
            if (scoreList === null || scoreList === undefined || scoreList.length === 0) {
                localStorage.setItem("scoreList", JSON.stringify([{ name: name, score: score }]));
            } else {
                var bupdateflag = false;
                for (var i = 0; i < scoreList.length; i++) {
                    if (scoreList[i].name === name) {
                        if (scoreList[i].score < score)
                            scoreList[i].score = score;
                        bupdateflag = true;
                    }
                }
                if (bupdateflag === false)
                    scoreList.push({ name: name, score: score });
                scoreList.sort(function (a, b) {
                    return b.score - a.score;
                });
                localStorage.setItem("scoreList", JSON.stringify(scoreList));
            }
            this.unload();
            this._init_scores(iScore);
        }
        // s_oGame.restart();
    };

    s_oEndPanel = this;

    this._init(iScore);
}

var s_oEndPanel = null;