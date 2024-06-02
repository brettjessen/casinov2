"use strict";
exports.id = 99;
exports.ids = [99];
exports.modules = {

/***/ 99:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4881);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6380);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1910);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__, sonner__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__, sonner__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Crash/index.tsx








const CrashGame = ()=>{
    const [wager, setWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useWagerInput)();
    const { 0: multiplierTarget , 1: setMultiplierTarget  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(2);
    const { 0: currentMultiplier , 1: setCurrentMultiplier  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: rocketState , 1: setRocketState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("idle");
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__.useGamba)();
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentPool)();
    const selectedToken = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentToken)();
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.useGame();
    const sound = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useSound)({
        music: "/games/crash/music.mp3",
        crash: "/games/crash/crash.mp3",
        win: "/games/crash/win.mp3",
        tick: "/games/crash/tick.mp3"
    });
    const calculateBetArray = (multiplier)=>{
        const targetMultiplier = Math.ceil(multiplier);
        const betArray = new Array(targetMultiplier).fill(0).map((_, index)=>index === 0 ? multiplier : 0);
        return betArray;
    };
    const getRocketStyle = ()=>{
        const maxMultiplier = 1;
        const progress = Math.min(currentMultiplier / maxMultiplier, 1);
        const leftOffset = 20;
        const bottomOffset = 30;
        const left = progress * (100 - leftOffset);
        const bottom = Math.pow(progress, 5) * (100 - bottomOffset);
        const rotationProgress = Math.pow(progress, 2.3);
        const startRotationDeg = 90;
        const rotation = (1 - rotationProgress) * startRotationDeg;
        return {
            bottom: `${bottom}%`,
            left: `${left}%`,
            transform: `rotate(${rotation}deg)`
        };
    };
    const doTheIntervalThing = (currentMultiplier, targetMultiplier, win)=>{
        const nextIncrement = 0.01 * (Math.floor(currentMultiplier) + 1);
        const nextValue = currentMultiplier + nextIncrement;
        setCurrentMultiplier(nextValue);
        if (nextValue >= targetMultiplier) {
            sound.sounds.music.player.stop();
            sound.play(win ? "win" : "crash");
            setRocketState(win ? "win" : "crash");
            setCurrentMultiplier(targetMultiplier);
            return;
        }
        setTimeout(()=>doTheIntervalThing(nextValue, targetMultiplier, win), 50);
    };
    const calculateBiasedLowMultiplier = (targetMultiplier)=>{
        const randomValue = Math.random();
        const maxPossibleMultiplier = Math.min(targetMultiplier, 12);
        const exponent = randomValue > 0.95 ? 2.8 : targetMultiplier > 10 ? 5 : 6;
        let result = 1 + Math.pow(randomValue, exponent) * (maxPossibleMultiplier - 1);
        const minThreshold = targetMultiplier * 0.02;
        const randomMultiplier = minThreshold + Math.random() * (targetMultiplier * 0.03);
        result = Math.max(result, randomMultiplier);
        return parseFloat(result.toFixed(2));
    };
    const multiplierColor = (()=>{
        if (rocketState === "crash") return "#ff0000";
        if (rocketState === "win") return "#00ff00";
        return "#ffffff";
    })();
    const play = async ()=>{
        try {
            setRocketState("idle");
            setCurrentMultiplier(0);
            const bet = calculateBetArray(multiplierTarget);
            await game.play({
                wager,
                bet
            });
            const result = await game.result();
            const win = result.payout > 0;
            const multiplierResult = win ? multiplierTarget : calculateBiasedLowMultiplier(multiplierTarget);
            sound.play("music");
            doTheIntervalThing(0, multiplierResult, win);
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error(`An error occurred: ${err.message}`);
            setRocketState("idle");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ScreenWrapper */ .Q8, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer1 */ .We, {
                            style: {
                                opacity: currentMultiplier > 5 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer1 */ .ZM, {
                            style: {
                                opacity: currentMultiplier > 5 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer2 */ .P4, {
                            style: {
                                opacity: currentMultiplier > 4.5 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer2 */ .T2, {
                            style: {
                                opacity: currentMultiplier > 4.5 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer3 */ .vF, {
                            style: {
                                opacity: currentMultiplier > 4 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer3 */ .u4, {
                            style: {
                                opacity: currentMultiplier > 4 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer4 */ .Xd, {
                            style: {
                                opacity: currentMultiplier > 3.5 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer4 */ .xZ, {
                            style: {
                                opacity: currentMultiplier > 3.5 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer5 */ .uD, {
                            style: {
                                opacity: currentMultiplier > 3 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer5 */ .$I, {
                            style: {
                                opacity: currentMultiplier > 3 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer6 */ .jq, {
                            style: {
                                opacity: currentMultiplier > 2.5 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer6 */ .Hi, {
                            style: {
                                opacity: currentMultiplier > 2.5 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer7 */ .SA, {
                            style: {
                                opacity: currentMultiplier > 2 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer7 */ .Sf, {
                            style: {
                                opacity: currentMultiplier > 2 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer8 */ .Wb, {
                            style: {
                                opacity: currentMultiplier > 1.5 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer8 */ .hT, {
                            style: {
                                opacity: currentMultiplier > 1.5 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer9 */ .$R, {
                            style: {
                                opacity: currentMultiplier > 1 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer9 */ .mI, {
                            style: {
                                opacity: currentMultiplier > 1 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StarsLayer10 */ .P8, {
                            style: {
                                opacity: currentMultiplier > 0.5 ? 0 : 1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .LineLayer10 */ .Lk, {
                            style: {
                                opacity: currentMultiplier > 0.5 ? 1 : 0
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MultiplierText */ .Y4, {
                            color: multiplierColor,
                            children: [
                                currentMultiplier.toFixed(2),
                                "x"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                position: "absolute",
                                bottom: "30%",
                                left: "0",
                                right: "0",
                                maxWidth: "300px",
                                display: "flex",
                                flexDirection: "column",
                                margin: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "all 0.5s ease-in-out"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-4 justify-between items-center mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col justify-between items-center mx-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        fontSize: "1.5vh",
                                                        fontWeight: "bold"
                                                    },
                                                    children: `${(multiplierTarget > 1 ? 1 / multiplierTarget : 0).toFixed(3)}%`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        fontSize: "1.5vh",
                                                        marginBottom: "2vh"
                                                    },
                                                    children: "Win Chance"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col justify-between items-center mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        fontSize: "1.5vh",
                                                        fontWeight: "bold"
                                                    },
                                                    children: [
                                                        multiplierTarget,
                                                        "x"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        fontSize: "1.5vh",
                                                        marginBottom: "2vh"
                                                    },
                                                    children: "Multiplier"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col justify-between items-center mx-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        fontSize: "1.5vh",
                                                        fontWeight: "bold"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                        mint: pool.token,
                                                        suffix: selectedToken?.symbol,
                                                        amount: wager * multiplierTarget
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        fontSize: "1.5vh",
                                                        marginBottom: "2vh"
                                                    },
                                                    children: "Payout"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slide__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    disabled: gamba.isPlaying,
                                    range: [
                                        2,
                                        100
                                    ],
                                    min: 2,
                                    max: 100,
                                    value: multiplierTarget,
                                    onChange: (value)=>{
                                        setMultiplierTarget(value);
                                        sound.play("tick");
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Rocket */ .w8, {
                            style: getRocketStyle()
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.WagerInput, {
                        value: wager,
                        onChange: setWager
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        disabled: !wager,
                        onClick: play,
                        text: "Play"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrashGame);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
// src/games/Crash/Slider.tsx



const Container = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  position: relative;
  width: 100%;
`;
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  position: relative;
  background: #ff556a;
  border-radius: 10px;
  box-shadow: 0 0 0px 5px #32294355;
  transition: box-shadow 0.2s ease;
  height: 15px;
  opacity: 1;
  cursor: pointer;
`;
const Track = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  background: #55f275;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;
const StyledSlider = styled_components__WEBPACK_IMPORTED_MODULE_1___default().input.attrs({
    type: "range"
})`
  position: absolute;
  left: 0;
  top: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 50px;
    background-image: url("/games/crash/rocket.gif");
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 30px; // Adjust the size as needed
    height: 30px;
    background-image: url("/games/crash/rocket.gif");
    background-size: cover;
    background-position: center;
    cursor: pointer;
    border-radius: 50%;
  }
`;
const Label = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  margin-top: 10px;
  position: absolute;
  transform: translateX(-50%);
  text-align: center;
  background: #32294322;
  padding: 5px;
  border-radius: 10px;
  min-width: 30px;
  color: #ff949f;
  transition: left 0.2s ease;
  font-size: 75%;

  ${(props)=>props.$active && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      color: #94ff94;
    `}
`;
function Slider({ min: minValue , max: maxValue , value , onChange , disabled , range: [min, max]  }) {
    const labels = Array.from({
        length: 5
    }).map((_, i, arr)=>min + Math.floor(i / (arr.length - 1) * (max - min)));
    const change = (newValue)=>{
        const fixedValue = Math.max(minValue, Math.min(maxValue, newValue));
        if (fixedValue !== value) onChange(fixedValue);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Track, {
                        style: {
                            width: `calc(${value / max * 100}%)`
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSlider, {
                        value: value,
                        disabled: disabled,
                        min: min,
                        max: max,
                        onChange: (event)=>change(Number(event.target.value))
                    })
                ]
            }),
            labels.map((label, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                    $active: value >= label,
                    style: {
                        left: label / max * 100 + "%"
                    },
                    children: label
                }, i))
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);


/***/ }),

/***/ 4881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$I": () => (/* binding */ LineLayer5),
/* harmony export */   "$R": () => (/* binding */ StarsLayer9),
/* harmony export */   "Hi": () => (/* binding */ LineLayer6),
/* harmony export */   "Lk": () => (/* binding */ LineLayer10),
/* harmony export */   "P4": () => (/* binding */ StarsLayer2),
/* harmony export */   "P8": () => (/* binding */ StarsLayer10),
/* harmony export */   "Q8": () => (/* binding */ ScreenWrapper),
/* harmony export */   "SA": () => (/* binding */ StarsLayer7),
/* harmony export */   "Sf": () => (/* binding */ LineLayer7),
/* harmony export */   "T2": () => (/* binding */ LineLayer2),
/* harmony export */   "Wb": () => (/* binding */ StarsLayer8),
/* harmony export */   "We": () => (/* binding */ StarsLayer1),
/* harmony export */   "Xd": () => (/* binding */ StarsLayer4),
/* harmony export */   "Y4": () => (/* binding */ MultiplierText),
/* harmony export */   "ZM": () => (/* binding */ LineLayer1),
/* harmony export */   "hT": () => (/* binding */ LineLayer8),
/* harmony export */   "jq": () => (/* binding */ StarsLayer6),
/* harmony export */   "mI": () => (/* binding */ LineLayer9),
/* harmony export */   "u4": () => (/* binding */ LineLayer3),
/* harmony export */   "uD": () => (/* binding */ StarsLayer5),
/* harmony export */   "vF": () => (/* binding */ StarsLayer3),
/* harmony export */   "w8": () => (/* binding */ Rocket),
/* harmony export */   "xZ": () => (/* binding */ LineLayer4)
/* harmony export */ });
/* unused harmony exports animStar, StarsLayer */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/games/Crash/styles.ts

const generateMultipleBoxShadows = (n, color1, color2)=>{
    if (true) return "";
    const maxX = window.innerWidth;
    const maxY = 4000;
    let value = `${Math.random() * maxX}px ${Math.random() * maxY}px ${color1}`;
    for(let i = 2; i <= n; i++){
        const color = i % 2 === 0 ? color1 : color2;
        value += `, ${Math.random() * maxX}px ${Math.random() * maxY}px ${color}`;
    }
    return value;
};
const shadowsSmall = generateMultipleBoxShadows(700, "#88f7ff", "#ffffff");
const shadowsMedium = generateMultipleBoxShadows(200, "#00faff", "#ffffff");
const shadowsBig = generateMultipleBoxShadows(100, "#e0faff", "#ffffff");
const animStar = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  from {
    transform: translateY(-100vh);
  }
  to {
    transform: translateY(0);
  }
`;
const StarsLayer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  animation: ${animStar} linear infinite;
`;
const StarsLayer1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 1px;
  height: 1px;
  animation-duration: 150s;
  opacity: 1;
  transition: opacity 12s;
  box-shadow: ${shadowsSmall};
`;
const LineLayer1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 1px;
  height: 15px;
  top: -15px;
  animation-duration: 75s;
  opacity: 0;
  transition: opacity 2s;
  box-shadow: ${shadowsSmall};
`;
const StarsLayer2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 2px;
  animation-duration: 120s;
  box-shadow: ${shadowsMedium};
`;
const LineLayer2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 25px;
  top: -25px;
  animation-duration: 50s;
  opacity: 0;
  transition: opacity 1.5s;
  box-shadow: ${shadowsMedium};
`;
const StarsLayer3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 3px;
  height: 3px;
  animation-duration: 100s;
  box-shadow: ${shadowsBig};
`;
const LineLayer3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 3px;
  height: 35px;
  top: -35px;
  animation-duration: 30s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${shadowsBig};
`;
const StarsLayer4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 2px;
  animation-duration: 90s;
  box-shadow: ${shadowsMedium};
`;
const LineLayer4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 40px;
  top: -40px;
  animation-duration: 25s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${shadowsMedium};
`;
const StarsLayer5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 3px;
  height: 3px;
  animation-duration: 80s;
  box-shadow: ${shadowsBig};
`;
const LineLayer5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 3px;
  height: 50px;
  top: -50px;
  animation-duration: 20s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${shadowsBig};
`;
const StarsLayer6 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 2px;
  animation-duration: 70s;
  box-shadow: ${shadowsMedium};
`;
const LineLayer6 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 60px;
  top: -60px;
  animation-duration: 15s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${shadowsMedium};
`;
const StarsLayer7 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 3px;
  height: 3px;
  animation-duration: 60s;
  box-shadow: ${shadowsBig};
`;
const LineLayer7 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 3px;
  height: 70px;
  top: -70px;
  animation-duration: 10s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${shadowsBig};
`;
const StarsLayer8 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 2px;
  animation-duration: 50s;
  box-shadow: ${shadowsMedium};
`;
const LineLayer8 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 80px;
  top: -80px;
  animation-duration: 8s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${shadowsMedium};
`;
const StarsLayer9 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 3px;
  height: 3px;
  animation-duration: 40s;
  box-shadow: ${shadowsBig};
`;
const LineLayer9 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 3px;
  height: 90px;
  top: -90px;
  animation-duration: 6s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${shadowsBig};
`;
const StarsLayer10 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 2px;
  animation-duration: 30s;
  box-shadow: ${shadowsMedium};
`;
const LineLayer10 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StarsLayer)`
  width: 2px;
  height: 100px;
  top: -100px;
  animation-duration: 5s;
  opacity: 0;
  transition: opacity 1s;
  box-shadow: ${shadowsMedium};
`;
const ScreenWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;
const MultiplierText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  font-size: 5rem;
  color: ${(props)=>props.color || "#fff"};
  text-shadow: 0 0 20px #fff;
  z-index: 1;
  font-family: monospace;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Rocket = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: absolute;
  width: 120px;
  aspect-ratio: 1 / 1;
  background-image: url("/games/crash/rocket.gif");
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.1s ease-out;
`;


/***/ })

};
;