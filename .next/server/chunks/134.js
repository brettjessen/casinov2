"use strict";
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 7488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ ItemPreview)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/games/Slots/constants.ts
var constants = __webpack_require__(3838);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/games/Slots/ItemPreview.styles.ts

const StyledItemPreview = (external_styled_components_default()).div`
  display: flex;
  gap: 5px;

  & > div {
    position: relative;
    width: 50px;
    aspect-ratio: 1/1.5;
    border-radius: 5px;
    border: 1px solid #2d2d57;
  }

  & > div.hidden {
    opacity: 0.5;
  }

  & > div > .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  & > div > .multiplier {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    color: black;
    background: #ffec63;
    z-index: 10;
    padding: 0 2px;
    border-radius: 2px;
    z-index: 1;
  }
`;

;// CONCATENATED MODULE: ./src/games/Slots/ItemPreview.tsx




const itemsByMultiplier = Object.entries(constants/* SLOT_ITEMS.reduce */.y5.reduce((prev, item)=>{
    const previousItems = prev[item.multiplier] ?? [];
    return {
        ...prev,
        [item.multiplier]: [
            ...previousItems,
            item
        ]
    };
}, {})).map(([multiplier, items])=>({
        multiplier: Number(multiplier),
        items
    })).sort((a, b)=>a.multiplier - b.multiplier);
function ItemPreview({ betArray  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: "flex",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledItemPreview, {
            children: itemsByMultiplier.map(({ items , multiplier  }, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: !betArray.includes(multiplier) ? "hidden" : "",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "multiplier",
                            children: [
                                multiplier,
                                "x"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "slotImage",
                                src: items[0].image
                            })
                        }, i)
                    ]
                }, i))
        })
    });
}


/***/ }),

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ Slot)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/games/Slots/constants.ts
var constants = __webpack_require__(3838);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/games/Slots/Slot.styles.ts

const StyledSpinner = (external_styled_components_default()).div`
  @keyframes spinning {
    0% {
      top: 0;
    }
    100% {
      top: calc(var(--num-items) * -100%);
    }
  }

  --num-items: 5;
  --spin-speed: 0.6s;

  position: absolute;
  width: 100%;
  height: 100%;

  transition: opacity 0.1s 0.1s ease;
  animation: spinning var(--spin-speed) 0.1s linear infinite;
  opacity: 0;

  &[data-spinning="true"] {
    opacity: 1;
  }

  & > div {
    color: white;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 15px;
  }
`;

;// CONCATENATED MODULE: ./src/games/Slots/Slot.tsx





const reveal = external_styled_components_.keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;
const pulse = external_styled_components_.keyframes`
  0%, 30% {
    transform: scale(1)
  }
  10% {
    transform: scale(1.3)
  }
`;
const StyledSlot = (external_styled_components_default()).div`
  width: 100px;
  aspect-ratio: 1/1.5;
  position: relative;
  background: #4444ff11;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #2d2d57;
  transition:
    background 0.2s,
    border 0.2s,
    box-shadow 0.2s;
  ${(props)=>props.$good && external_styled_components_.css`
      animation: reveal-glow 1s;
    `}
`;
const Revealed = (external_styled_components_default()).div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  transition:
    opacity 0.2s,
    transform 0.3s ease;
  transform: translateY(-100%);
  opacity: 0;

  ${(props)=>props.$revealed && external_styled_components_.css`
      opacity: 1;
      transform: translateY(0%);
      animation: ${reveal} cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.25s;
    `}

  ${(props)=>props.$good && external_styled_components_.css`
      & > img {
        animation: ${pulse} 2s 0.25s cubic-bezier(0.04, 1.14, 0.48, 1.63)
          infinite;
      }
    `}
`;
function Slot({ revealed , good , item , index  }) {
    const items = (0,external_react_.useMemo)(()=>[
            ...constants/* SLOT_ITEMS */.y5
        ].sort(()=>Math.random() - 0.5), []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledSlot, {
        $good: good,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledSpinner, {
                "data-spinning": !revealed,
                children: items.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "slotImage",
                            src: item.image
                        })
                    }, i))
            }),
            item && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Revealed, {
                    className: "revealedSlot",
                    $revealed: revealed,
                    $good: revealed && good,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "slotImage",
                        src: item.image,
                        style: {
                            animationDelay: index * 0.25 + "s"
                        }
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ StyledSlots)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledSlots = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  perspective: 100px;
  user-select: none;

  & > div {
    display: grid;
    gap: 20px;
    transform: rotateX(3deg) rotateY(0deg);
  }

  @keyframes pulse {
    0%,
    30% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.3);
    }
  }

  @keyframes reveal-glow {
    0%,
    30% {
      border-color: #2d2d57;
      background: #ffffff00;
    }
    10% {
      border-color: white;
      background: #ffffff33;
    }
  }

  @keyframes shine {
    0%,
    30% {
      background: #ffffff00;
    }
    10% {
      background: #ffffff33;
    }
  }

  @keyframes result-flash {
    25%,
    75% {
      background-color: #ffec63;
      color: #333;
    }
    50% {
      background-color: #ffec6311;
      color: #ffec63;
    }
  }

  .result {
    border: none;
    padding: 10px;
    text-transform: uppercase;
    position: relative;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    border-spacing: 10px;
    border: 1px solid #ffec63;
    background-color: #ffec6311;
    color: #ffec63;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }

  .result[data-good="true"] {
    animation: result-flash 5s infinite;
  }

  .slots {
    display: flex;
    gap: 20px;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .slot::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  @keyframes reveal {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .slotImage {
    aspect-ratio: 1/1;
    max-width: 100%;
    max-height: 100%;
  }
`;


/***/ }),

/***/ 3838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ SOUND_SPIN),
/* harmony export */   "DN": () => (/* binding */ SOUND_REVEAL),
/* harmony export */   "EV": () => (/* binding */ SOUND_PLAY),
/* harmony export */   "Gd": () => (/* binding */ FINAL_DELAY),
/* harmony export */   "PR": () => (/* binding */ SPIN_DELAY),
/* harmony export */   "U0": () => (/* binding */ REVEAL_SLOT_DELAY),
/* harmony export */   "Ue": () => (/* binding */ SOUND_WIN),
/* harmony export */   "V9": () => (/* binding */ NUM_SLOTS),
/* harmony export */   "YZ": () => (/* binding */ LEGENDARY_THRESHOLD),
/* harmony export */   "lu": () => (/* binding */ SOUND_LOSE),
/* harmony export */   "y5": () => (/* binding */ SLOT_ITEMS),
/* harmony export */   "yJ": () => (/* binding */ SOUND_REVEAL_LEGENDARY)
/* harmony export */ });
/* unused harmony exports IMAGE_2X, IMAGE_3X, IMAGE_5X, IMAGE_COOL, IMAGE_HEARTS, IMAGE_UNICORN, IMAGE_WOJAK */
// src/games/Slots/constants.ts
const SOUND_LOSE = "/games/slots/lose.mp3";
const SOUND_PLAY = "/games/slots/insert.mp3";
const SOUND_REVEAL_LEGENDARY = "/games/slots/reveal-legendary.mp3";
const SOUND_REVEAL = "/games/slots/reveal.mp3";
const SOUND_SPIN = "/games/slots/spin.mp3";
const SOUND_WIN = "/games/slots/win.mp3";
const IMAGE_2X = "/games/slots/2x.png";
const IMAGE_3X = "/games/slots/3x.png";
const IMAGE_5X = "/games/slots/5x.png";
const IMAGE_COOL = "/games/slots/emoji-cool.png";
const IMAGE_HEARTS = "/games/slots/emoji-hearts.png";
const IMAGE_UNICORN = "/games/slots/unicorn.png";
const IMAGE_WOJAK = "/games/slots/wojak.png";
const slotItem = (multiplier, ...icons)=>icons.map((image)=>({
            multiplier,
            image
        }));
const SLOT_ITEMS = [
    slotItem(7, IMAGE_UNICORN),
    slotItem(5, IMAGE_5X),
    slotItem(3, IMAGE_3X),
    slotItem(2, IMAGE_2X),
    slotItem(1, IMAGE_COOL, IMAGE_HEARTS),
    slotItem(0.5, IMAGE_WOJAK), 
].flat();
const NUM_SLOTS = 3;
// MS that it takes for spin to finish and reveal to start
const SPIN_DELAY = 1000;
// MS between each slot reveal
const REVEAL_SLOT_DELAY = 500;
// MS after reveal until win / lose effect is played
const FINAL_DELAY = 500;
//
const LEGENDARY_THRESHOLD = 5;


/***/ }),

/***/ 9134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slots)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3838);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6380);
/* harmony import */ var _ItemPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7488);
/* harmony import */ var _Slot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9696);
/* harmony import */ var _Slots_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(449);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, sonner__WEBPACK_IMPORTED_MODULE_9__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, sonner__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Slots/index.tsx











const Messages = ({ messages  })=>{
    const { 0: messageIndex , 1: setMessageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const timeout = setInterval(()=>{
            setMessageIndex((x)=>(x + 1) % messages.length);
        }, 2500);
        return ()=>clearTimeout(timeout);
    }, [
        messages
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: messages[messageIndex]
    });
};
function Slots() {
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_10__.useGamba)();
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.useGame();
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentPool)();
    const { 0: spinning , 1: setSpinning  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: good , 1: setGood  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: revealedSlots , 1: setRevealedSlots  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .NUM_SLOTS */ .V9);
    const [wager, setWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useWagerInput)();
    const { 0: combination , 1: setCombination  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array.from({
        length: _constants__WEBPACK_IMPORTED_MODULE_2__/* .NUM_SLOTS */ .V9
    }).map(()=>_constants__WEBPACK_IMPORTED_MODULE_2__/* .SLOT_ITEMS[0] */ .y5[0]));
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useSound)({
        win: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SOUND_WIN */ .Ue,
        lose: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SOUND_LOSE */ .lu,
        reveal: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SOUND_REVEAL */ .DN,
        revealLegendary: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SOUND_REVEAL_LEGENDARY */ .yJ,
        spin: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SOUND_SPIN */ .$,
        play: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SOUND_PLAY */ .EV
    });
    const bet = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .generateBetArray */ .W)(pool.maxPayout, wager), [
        pool.maxPayout,
        wager,
        gamba.nonce
    ]);
    const valid = bet.some((x)=>x > 1);
    const revealSlot = (combination, slot = 0)=>{
        sounds.play("reveal", {
            playbackRate: 1.1
        });
        const allSame = combination.slice(0, slot + 1).every((item, index, arr)=>!index || item === arr[index - 1]);
        if (combination[slot].multiplier >= _constants__WEBPACK_IMPORTED_MODULE_2__/* .LEGENDARY_THRESHOLD */ .YZ) {
            if (allSame) {
                sounds.play("revealLegendary");
            }
        }
        setRevealedSlots(slot + 1);
        if (slot === _constants__WEBPACK_IMPORTED_MODULE_2__/* .NUM_SLOTS */ .V9 - 1) {
            sounds.sounds.spin.player.stop();
            setTimeout(()=>{
                setSpinning(false);
                if (allSame) {
                    setGood(true);
                    sounds.play("win");
                } else {
                    sounds.play("lose");
                }
            }, _constants__WEBPACK_IMPORTED_MODULE_2__/* .FINAL_DELAY */ .Gd);
        }
        if (slot < _constants__WEBPACK_IMPORTED_MODULE_2__/* .NUM_SLOTS */ .V9 - 1) {
            setTimeout(()=>revealSlot(combination, slot + 1), _constants__WEBPACK_IMPORTED_MODULE_2__/* .REVEAL_SLOT_DELAY */ .U0);
        }
    };
    const play = async ()=>{
        try {
            setSpinning(true);
            setResult(undefined);
            await game.play({
                wager,
                bet
            });
            sounds.play("play");
            setRevealedSlots(0);
            setGood(false);
            const startTime = Date.now();
            sounds.play("spin", {
                playbackRate: 0.5
            });
            const result = await gamba.result();
            const resultDelay = Date.now() - startTime;
            const revealDelay = Math.max(0, _constants__WEBPACK_IMPORTED_MODULE_2__/* .SPIN_DELAY */ .PR - resultDelay);
            const combination = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getSlotCombination */ .L)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .NUM_SLOTS */ .V9, result.multiplier, bet);
            setCombination(combination);
            setResult(result);
            setTimeout(()=>revealSlot(combination), revealDelay);
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error(`An error occurred: ${err.message}`);
            setSpinning(false);
            setRevealedSlots(_constants__WEBPACK_IMPORTED_MODULE_2__/* .NUM_SLOTS */ .V9);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "screen",
                children: [
                    good && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.EffectTest, {
                        src: combination[0].image
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Responsive, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slots_styles__WEBPACK_IMPORTED_MODULE_8__/* .StyledSlots */ .M, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ItemPreview__WEBPACK_IMPORTED_MODULE_6__/* .ItemPreview */ .g, {
                                        betArray: bet
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "slots",
                                        children: combination.map((slot, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slot__WEBPACK_IMPORTED_MODULE_7__/* .Slot */ .g, {
                                                index: i,
                                                revealed: revealedSlots > i,
                                                item: slot,
                                                good: good
                                            }, i))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "result",
                                        "data-good": good,
                                        children: spinning ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Messages, {
                                            messages: [
                                                "Spinning!",
                                                "Good luck"
                                            ]
                                        }) : result ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                "Payout:",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                    mint: result.token,
                                                    amount: result.payout
                                                })
                                            ]
                                        }) : valid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Messages, {
                                            messages: [
                                                "SPIN ME!",
                                                "FEELING LUCKY?"
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: "❌ Choose a lower wager!"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.WagerInput, {
                        value: wager,
                        onChange: setWager
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        disabled: !valid,
                        onClick: play,
                        text: "Spin"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getSlotCombination),
/* harmony export */   "W": () => (/* binding */ generateBetArray)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3838);

const pickRandom = (arr)=>arr.at(Math.floor(Math.random() * arr.length));
/**
 * Creates a bet array for given wager amount and max payout
 */ const generateBetArray = (maxPayout, wager, maxLength = 50)=>{
    const maxMultiplier = Math.min(maxLength, maxPayout / wager);
    const arr = Array.from({
        length: maxLength
    }).fill(0);
    let total = 0;
    if (!maxMultiplier) return [];
    let i = 0;
    while(total < maxLength){
        const left = maxLength - total;
        const pickableItems = _constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOT_ITEMS.filter */ .y5.filter((x)=>x.multiplier <= Math.min(left, maxMultiplier));
        const item = pickRandom(pickableItems);
        if (item) {
            total += item.multiplier;
            arr[i] = item.multiplier;
        }
        i++;
        if (i > 1000) break;
    }
    return arr;
};
/**
 * Picks a random slot item combination based on the result
 */ const getSlotCombination = (count, multiplier, bet)=>{
    // When we win, all slots are the same
    if (multiplier > 0) {
        const items = _constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOT_ITEMS.filter */ .y5.filter((x)=>x.multiplier === multiplier);
        const item = pickRandom(items) ?? pickRandom(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOT_ITEMS.filter */ .y5.filter((x)=>x.multiplier < 1));
        return new Array(count).fill(item);
    }
    // Simulate a random roll
    const availableSlotItems = _constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOT_ITEMS.filter */ .y5.filter((x)=>bet.includes(x.multiplier));
    const { items: items1  } = Array.from({
        length: count
    }).reduce(({ previous , items  }, _, i)=>{
        const item = (()=>{
            // Make sure we don't pick one that has been selected
            if (i === count - 1) {
                return pickRandom(availableSlotItems.filter((x)=>!items.includes(x))) ?? pickRandom(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOT_ITEMS */ .y5);
            }
            // Pick a random one
            return Math.random() < 0.75 ? previous : pickRandom(availableSlotItems);
        })();
        return {
            previous: item,
            items: [
                ...items,
                item
            ]
        };
    }, {
        previous: pickRandom(availableSlotItems),
        items: []
    });
    return items1;
};


/***/ })

};
;