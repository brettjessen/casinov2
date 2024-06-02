"use strict";
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 2161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Limbo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6380);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8050);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__, sonner__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__, sonner__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Limbo/index.tsx
/*
 * Author: BankkRoll
 */ 






function Limbo() {
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.useGame();
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__.useGamba)();
    const [wager, setWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useWagerInput)();
    const { 0: targetMultiplier , 1: setTargetMultiplier  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(20);
    const { 0: resultMultiplier , 1: setResultMultiplier  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: playing , 1: setPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: isWin , 1: setIsWin  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: textColor , 1: setTextColor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("#FFFFFF");
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentPool)();
    const selectedToken = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentToken)();
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useSound)({
        spin: "/games/limbo/numbers.mp3",
        win: "/games/limbo/win.mp3",
        lose: "/games/limbo/lose.mp3",
        tick: "/games/limbo/tick.mp3"
    });
    const handleMultiplierChange = (value)=>{
        setTargetMultiplier(Math.max(2, Math.min(100, value)));
        sounds.play("tick");
    };
    const startAnimation = (start, end, winCondition)=>{
        let startTime = null;
        const duration = 2500;
        const animate = (timestamp)=>{
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setResultMultiplier(start + (end - start) * progress);
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setTextColor(winCondition ? "#10B981" : "#EF4444");
                sounds.play(winCondition ? "win" : "lose");
            }
        };
        requestAnimationFrame(animate);
    };
    const play = async ()=>{
        try {
            setPlaying(true);
            setResultMultiplier(0);
            setTextColor("#FFFFFF");
            await game.play({
                bet: new Array(targetMultiplier).fill(0).map((_, index)=>index === 0 ? targetMultiplier : 0),
                wager: wager
            });
            const result = await game.result();
            const winCondition = result.multiplier >= targetMultiplier;
            setIsWin(winCondition);
            sounds.play("spin", {
                playbackRate: 0.8
            });
            const endMultiplier = winCondition ? targetMultiplier + Math.random() * targetMultiplier * 0.2 : 1 + Math.random() * (targetMultiplier - 1);
            setTimeout(()=>startAnimation(1, endMultiplier, winCondition), 500);
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_5__.toast.error(`An error occurred: ${err.message}`);
        } finally{
            setPlaying(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Responsive, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "500px",
                            transition: "all 0.5s ease-in-out"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    fontSize: "10rem",
                                    fontWeight: "bold",
                                    color: textColor,
                                    transition: "color 0.5s ease-in-out"
                                },
                                children: [
                                    resultMultiplier.toFixed(2),
                                    "x"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-4 justify-between items-center mx-auto",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col justify-between items-center mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    fontSize: "2vh",
                                                    fontWeight: "bold",
                                                    color: textColor,
                                                    transition: "color 0.5s ease-in-out"
                                                },
                                                children: [
                                                    targetMultiplier,
                                                    "%"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    fontSize: "2vh",
                                                    color: textColor,
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
                                                    fontSize: "2vh",
                                                    fontWeight: "bold",
                                                    color: textColor,
                                                    transition: "color 0.5s ease-in-out"
                                                },
                                                children: [
                                                    targetMultiplier,
                                                    "x"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    fontSize: "2vh",
                                                    color: textColor,
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
                                                    fontSize: "2vh",
                                                    fontWeight: "bold",
                                                    color: textColor,
                                                    transition: "color 0.5s ease-in-out"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                    mint: pool.token,
                                                    suffix: selectedToken?.symbol,
                                                    amount: targetMultiplier * wager
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    fontSize: "2vh",
                                                    color: textColor,
                                                    marginBottom: "2vh"
                                                },
                                                children: "Payout"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slide__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                disabled: gamba.isPlaying,
                                range: [
                                    2,
                                    100
                                ],
                                min: 2,
                                max: 100,
                                value: targetMultiplier,
                                onChange: handleMultiplierChange
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.WagerInput, {
                        value: wager,
                        onChange: setWager
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        onClick: play,
                        disabled: playing,
                        text: playing ? "Playing..." : "Play"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8050:
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
// src/games/Limbo/Slider.tsx



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
const StyledSlider = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().input)`
  position: absolute;
  left: 0;
  top: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  background: none;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #ffffff;
    cursor: pointer;
    border-radius: 2px;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #ffffff;
    cursor: pointer;
    border-radius: 2px;
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
                        type: "range",
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


/***/ })

};
;