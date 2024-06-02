"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 7555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dice),
/* harmony export */   "outcomes": () => (/* binding */ outcomes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3939);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4442);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6380);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1172);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, sonner__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, sonner__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Dice/index.tsx









const SOUND_PLAY = "/games/dice/play.mp3";
const SOUND_LOSE = "/games/dice/lose.mp3";
const SOUND_WIN = "/games/dice/win.mp3";
const SOUND_TICK = "/games/dice/tick.mp3";
const DICE_SIDES = 100;
const outcomes = (length, multiplierCallback)=>{
    const payoutArray = Array.from({
        length
    }).map((_, resultIndex)=>{
        const payout = multiplierCallback(resultIndex) ?? 0;
        return payout;
    });
    const totalValue = payoutArray.reduce((p, x)=>p + x, 0);
    return payoutArray.map((x)=>Number(BigInt(x * gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__.BPS_PER_WHOLE) / BigInt(totalValue || 1) * BigInt(length)) / gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__.BPS_PER_WHOLE);
};
function Dice() {
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_8__.useGamba)();
    const [wager, setWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useWagerInput)();
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentPool)();
    const { 0: resultIndex , 1: setResultIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);
    const { 0: rollUnderIndex , 1: setRollUnderIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Math.floor(DICE_SIDES / 2));
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useSound)({
        win: SOUND_WIN,
        play: SOUND_PLAY,
        lose: SOUND_LOSE,
        tick: SOUND_TICK
    });
    const multiplier = Number(BigInt(DICE_SIDES * gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__.BPS_PER_WHOLE) / BigInt(rollUnderIndex)) / gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__.BPS_PER_WHOLE;
    const bet = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>outcomes(DICE_SIDES, (resultIndex)=>{
            if (resultIndex < rollUnderIndex) {
                return DICE_SIDES - rollUnderIndex;
            }
        }), [
        rollUnderIndex
    ]);
    const maxWin = multiplier * wager;
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.useGame();
    const play = async ()=>{
        try {
            sounds.play("play");
            setResultIndex(-1);
            await game.play({
                wager,
                bet
            });
            const result = await game.result();
            setResultIndex(result.resultIndex);
            if (result.resultIndex < rollUnderIndex) {
                sounds.play("win");
            } else {
                sounds.play("lose");
            }
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_7__.toast.error(`An error occurred: ${err.message}`);
            setResultIndex(-1);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Responsive, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .RollUnder */ .ZK, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: rollUnderIndex + 1
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "Roll Under"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Stats */ .jk, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    (rollUnderIndex / DICE_SIDES * 100).toFixed(0),
                                                    "%"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Win Chance"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    multiplier.toFixed(2),
                                                    "x"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Multiplier"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            maxWin > pool.maxPayout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: "Too high"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                    suffix: "",
                                                    amount: maxWin
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: "Payout"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [
                                    resultIndex > -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Result */ .x4, {
                                        style: {
                                            left: `${resultIndex / DICE_SIDES * 100}%`
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: resultIndex + 1
                                        }, resultIndex)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_slide__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        disabled: gamba.isPlaying,
                                        range: [
                                            0,
                                            DICE_SIDES
                                        ],
                                        min: 1,
                                        max: DICE_SIDES - 5,
                                        value: rollUnderIndex,
                                        onChange: (value)=>{
                                            setRollUnderIndex(value);
                                            sounds.play("tick");
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.WagerInput, {
                        value: wager,
                        onChange: setWager
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onClick: play,
                        text: "Roll"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1172:
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
// src/games/Dice/Slider.tsx



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


/***/ }),

/***/ 3939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "ZK": () => (/* binding */ RollUnder),
/* harmony export */   "jk": () => (/* binding */ Stats),
/* harmony export */   "x4": () => (/* binding */ Result)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/games/Dice/styles.ts

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  color: white;
  user-select: none;
  width: min(100vw, 420px);
  font-size: 20px;
`;
const Stats = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  & > div {
    padding: 20px;
    text-align: center;
    div:last-child {
      font-size: 14px;
    }
  }
`;
const RollUnder = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  color: white;

  margin-bottom: 20px;

  & > div {
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    & > div:first-child {
      font-weight: bold;
      font-size: 64px;
      font-variant-numeric: tabular-nums;
    }
  }
`;
const Result = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  @keyframes result-appear {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  transform: translateX(-50%);
  position: absolute;
  top: -50px;
  transition: left 0.3s ease;

  & > div {
    animation: result-appear 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transform-origin: bottom;
    background: #ffffffcc;
    backdrop-filter: blur(50px);
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
    width: 50px;
    text-align: center;
    color: black;
  }

  & > div::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px 10px 0px 10px;
    border-style: solid;
    border-color: #ffffffcc transparent transparent transparent;
  }
`;


/***/ })

};
;