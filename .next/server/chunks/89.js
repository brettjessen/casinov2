"use strict";
exports.id = 89;
exports.ids = [89];
exports.modules = {

/***/ 7068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AV": () => (/* binding */ RANK_SYMBOLS),
/* harmony export */   "EN": () => (/* binding */ SOUND_CARD),
/* harmony export */   "EV": () => (/* binding */ SOUND_PLAY),
/* harmony export */   "Ue": () => (/* binding */ SOUND_WIN),
/* harmony export */   "Wz": () => (/* binding */ RANKS),
/* harmony export */   "eY": () => (/* binding */ SOUND_FINISH),
/* harmony export */   "lu": () => (/* binding */ SOUND_LOSE),
/* harmony export */   "vL": () => (/* binding */ MAX_CARD_SHOWN)
/* harmony export */ });
/* unused harmony export WAGER_AMOUNTS */
const WAGER_AMOUNTS = (/* unused pure expression or super */ null && ([
    100000,
    1000000
]));
const MAX_CARD_SHOWN = 5;
const RANK_SYMBOLS = {
    0: "2",
    1: "3",
    2: "4",
    3: "5",
    4: "6",
    5: "7",
    6: "8",
    7: "9",
    8: "10",
    9: "J",
    10: "Q",
    11: "K",
    12: "A"
};
const RANKS = Object.keys(RANK_SYMBOLS).length;
const SOUND_CARD = "/games/hilo/card.mp3";
const SOUND_FINISH = "/games/hilo/finish.mp3";
const SOUND_LOSE = "/games/hilo/lose.mp3";
const SOUND_PLAY = "/games/hilo/play.mp3";
const SOUND_WIN = "/games/hilo/win.mp3";


/***/ }),

/***/ 6089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HiLo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7739);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7068);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6380);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, sonner__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, sonner__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const BPS_PER_WHOLE = 10000;
const randomRank = ()=>1 + Math.floor(Math.random() * (_constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz - 1));
const card = (rank = randomRank())=>({
        key: Math.random(),
        rank
    });
const generateBetArray = (currentRank, isHi)=>{
    return Array.from({
        length: _constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz
    }).map((_, i)=>{
        const result = (()=>{
            if (isHi) {
                return currentRank === 0 ? i > currentRank ? BigInt(_constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz * BPS_PER_WHOLE) / BigInt(_constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz - 1 - currentRank) : BigInt(0) : i >= currentRank ? BigInt(_constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz * BPS_PER_WHOLE) / BigInt(_constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz - currentRank) : BigInt(0);
            }
            return currentRank === _constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz - 1 ? i < currentRank ? BigInt(_constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz * BPS_PER_WHOLE) / BigInt(currentRank) : BigInt(0) : i <= currentRank ? BigInt(_constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz * BPS_PER_WHOLE) / BigInt(currentRank + 1) : BigInt(0);
        })();
        return Number(result) / BPS_PER_WHOLE;
    });
};
const adjustBetArray = (betArray)=>{
    const maxLength = betArray.length;
    const sum = betArray.reduce((acc, val)=>acc + val, 0);
    if (sum > maxLength) {
        const maxIndex = betArray.findIndex((val)=>val === Math.max(...betArray));
        betArray[maxIndex] -= sum - maxLength;
        if (betArray[maxIndex] < 0) betArray[maxIndex] = 0;
    }
    return betArray;
};
function HiLo(props) {
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.useGame();
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__.useGamba)();
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentPool)();
    const { 0: cards , 1: setCards  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        card()
    ]);
    const { 0: claiming , 1: setClaiming  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [initialWager, setInitialWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useWagerInput)();
    const { 0: profit , 1: setProfit  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const currentRank = cards[cards.length - 1].rank;
    const { 0: option , 1: setOption  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(currentRank > _constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz / 2 ? "lo" : "hi");
    const { 0: hoveredOption , 1: hoverOption  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const addCard = (rank)=>setCards((cards)=>[
                ...cards,
                card(rank)
            ].slice(-_constants__WEBPACK_IMPORTED_MODULE_3__/* .MAX_CARD_SHOWN */ .vL));
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useSound)({
        card: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SOUND_CARD */ .EN,
        win: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SOUND_WIN */ .Ue,
        lose: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SOUND_LOSE */ .lu,
        play: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SOUND_PLAY */ .EV,
        finish: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SOUND_FINISH */ .eY
    });
    const betHi = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>generateBetArray(currentRank, true), [
        currentRank
    ]);
    const betLo = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>generateBetArray(currentRank, false), [
        currentRank
    ]);
    const _bet = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const _option = hoveredOption ?? option;
        if (_option === "hi") return betHi;
        if (_option === "lo") return betLo;
        return [
            0
        ];
    }, [
        betHi,
        betLo,
        hoveredOption,
        option
    ]);
    const resetGame = async ()=>{
        try {
            if (claiming) return;
            sounds.play("finish", {
                playbackRate: 0.8
            });
            setTimeout(()=>{
                setProfit(0);
                sounds.play("card");
                addCard(randomRank());
                setClaiming(false);
            }, 300);
        } catch  {
            setClaiming(false);
        }
    };
    const bet = adjustBetArray(_bet);
    const multipler = Math.max(...bet);
    const maxWagerForBet = pool.maxPayout / multipler;
    const wager = Math.min(maxWagerForBet, profit || initialWager);
    const play = async ()=>{
        try {
            sounds.play("play");
            await game.play({
                bet,
                wager
            });
            const result = await gamba.result();
            addCard(result.resultIndex);
            sounds.play("card", {
                playbackRate: 0.8
            });
            const win = result.payout > 0;
            setTimeout(()=>{
                setProfit(result.payout);
                if (win) {
                    sounds.play("win");
                } else {
                    sounds.play("lose");
                }
            }, 300);
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error(`An error occurred: ${err.message}`);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Responsive, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, {
                        $disabled: claiming || gamba.isPlaying,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .CardsContainer */ .oR, {
                                        children: cards.map((card, i)=>{
                                            const offset = -(cards.length - (i + 1));
                                            const xxx = cards.length > 3 ? i / cards.length : 1;
                                            const opacity = Math.min(1, xxx * 3);
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .CardContainer */ ._L, {
                                                style: {
                                                    transform: `translate(${offset * 30}px, ${-offset * 0}px) rotateZ(-5deg) rotateY(5deg)`,
                                                    opacity
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zb, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "rank",
                                                            children: _constants__WEBPACK_IMPORTED_MODULE_3__/* .RANK_SYMBOLS */ .AV[card.rank]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "suit",
                                                            style: {
                                                                backgroundImage: "url(" + props.logo + ")"
                                                            }
                                                        })
                                                    ]
                                                })
                                            }, card.key);
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Options */ .Ei, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Option */ .Wx, {
                                                selected: option === "hi",
                                                onClick: ()=>setOption("hi"),
                                                onMouseEnter: ()=>hoverOption("hi"),
                                                onMouseLeave: ()=>hoverOption(undefined),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: "\uD83D\uDC46"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            "HI - (",
                                                            Math.max(...betHi).toFixed(2),
                                                            "x)"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Option */ .Wx, {
                                                selected: option === "lo",
                                                onClick: ()=>setOption("lo"),
                                                onMouseEnter: ()=>hoverOption("lo"),
                                                onMouseLeave: ()=>hoverOption(undefined),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: "\uD83D\uDC47"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            "LO - (",
                                                            Math.max(...betLo).toFixed(2),
                                                            "x)"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .CardPreview */ .fO, {
                                children: Array.from({
                                    length: _constants__WEBPACK_IMPORTED_MODULE_3__/* .RANKS */ .Wz
                                }).map((_, rankIndex)=>{
                                    const opacity = bet[rankIndex] > 0 ? 0.9 : 0.5;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zb, {
                                        $small: true,
                                        style: {
                                            opacity
                                        },
                                        onClick: ()=>addCard(rankIndex),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "rank",
                                            children: _constants__WEBPACK_IMPORTED_MODULE_3__/* .RANK_SYMBOLS */ .AV[rankIndex]
                                        })
                                    }, rankIndex);
                                })
                            }),
                            profit > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Profit */ .Fc, {
                                onClick: resetGame,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                        amount: profit
                                    }),
                                    " +",
                                    Math.round(profit / initialWager * 100 - 100).toLocaleString(),
                                    "%"
                                ]
                            }, profit)
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "controls",
                children: !profit ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.WagerInput, {
                            value: initialWager,
                            onChange: setInitialWager
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: !option || initialWager > maxWagerForBet,
                            onClick: play,
                            text: "Roll"
                        }),
                        initialWager > maxWagerForBet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            onClick: ()=>setInitialWager(maxWagerForBet),
                            text: "Set Max"
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                            amount: wager
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: gamba.isPlaying,
                            onClick: resetGame,
                            text: "Finish"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: !option,
                            onClick: play,
                            text: "Deal card"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ei": () => (/* binding */ Options),
/* harmony export */   "Fc": () => (/* binding */ Profit),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "Wx": () => (/* binding */ Option),
/* harmony export */   "Zb": () => (/* binding */ Card),
/* harmony export */   "_L": () => (/* binding */ CardContainer),
/* harmony export */   "fO": () => (/* binding */ CardPreview),
/* harmony export */   "oR": () => (/* binding */ CardsContainer)
/* harmony export */ });
/* unused harmony export WarningMessage */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const appear = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0% { transform: scale(.0) translateY(100px) rotateY(90deg); }
  100% { transform: scale(1) translateY(0) rotateY(0deg) }
`;
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  user-select: none;
  background: #9967e300;
  transition: opacity 0.2s;
  ${({ $disabled  })=>$disabled && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      pointer-events: none;
      opacity: 0.7;
    `}
`;
const Options = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;
`;
const Option = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  transition:
    opacity 0.2s,
    background 0.2s ease;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  & > div:first-child {
    font-size: 48px;
    filter: drop-shadow(-4px 4px 2px #00000066);
    margin-right: 10px;
  }

  --opacity: 0.5;

  &:hover {
    --opacity: 1;
  }

  ${(props)=>props.selected && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      --opacity: 1;
    `}

  opacity: var(--opacity);
`;
const Profit = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  font-size: 18px;
  color: #005400;
  position: absolute;
  right: 0px;
  bottom: -100px;
  border-radius: 50px;
  background: #69ff6d;
  padding: 5px;
  animation: ${appear} 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);
`;
const CardPreview = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  border-radius: 5px;
  gap: 5px;
  padding: 5px;
  margin-top: 30px;
  justify-content: center;
  & > div {
    transition: opacity 0.2s;
  }
`;
const CardsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  transition: transform 0.2s ease;
  perspective: 500px;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
`;
const CardContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: absolute;
  bottom: 0;
  transition:
    transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28),
    opacity 0.25s ease;
  filter: drop-shadow(-10px 10px 0px #00000011);
  transform-origin: bottom;
  perspective: 500px;
  & > div {
    animation: ${appear} 0.25s cubic-bezier(0.5, 0.9, 0.35, 1.05);
  }
`;
const Card = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  ${(props)=>props.$small ? styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          height: 35px;
          font-size: 15px;
          padding: 5px;
          border-radius: 4px;
        ` : styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          height: 160px;
          font-size: 70px;
          padding: 10px;
          border-radius: 8px;
        `}
  box-shadow: -5px 5px 10px 1px #0000003d;
  background: white;
  aspect-ratio: 4/5.5;
  position: relative;
  color: #333;
  overflow: hidden;
  .rank {
    font-weight: bold;
    line-height: 1em;
  }
  .suit {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 50%;
    background-size: cover;
    background-repeat: none;
    transform: translate(0%, 0%);
    font-size: 128px;
    opacity: 0.9;
  }
`;
const float = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;
const WarningMessage = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  animation: ${float} 2s ease-in-out infinite;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(100%) translateY(-50%);
  background-color: rgba(255, 204, 0, 0.8);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: black;
  white-space: nowrap;
  pointer-events: none;
`;


/***/ })

};
;