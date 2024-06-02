"use strict";
exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 9273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ep": () => (/* binding */ SOUND_STEP),
/* harmony export */   "SG": () => (/* binding */ MINE_SELECT),
/* harmony export */   "Ue": () => (/* binding */ SOUND_WIN),
/* harmony export */   "Wd": () => (/* binding */ PITCH_INCREASE_FACTOR),
/* harmony export */   "aq": () => (/* binding */ SOUND_TICK),
/* harmony export */   "e8": () => (/* binding */ SOUND_EXPLODE),
/* harmony export */   "eY": () => (/* binding */ SOUND_FINISH),
/* harmony export */   "k": () => (/* binding */ GRID_SIZE)
/* harmony export */ });
// src/games/Mines/constants.ts
const SOUND_FINISH = "/games/mines/finish.mp3";
const SOUND_TICK = "/games/mines/tick.mp3";
const SOUND_WIN = "/games/mines/win.mp3";
const SOUND_STEP = "/games/mines/axe.mp3";
const SOUND_EXPLODE = "/games/mines/explode.mp3";
const GRID_SIZE = 16;
const PITCH_INCREASE_FACTOR = 1.06;
const MINE_SELECT = [
    1,
    3,
    5,
    10,
    15
];


/***/ }),

/***/ 5874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1734);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9273);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1714);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4442);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6380);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, sonner__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, sonner__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Mines/index.tsx










function Mines() {
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.useGame();
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_7__.useGamba)();
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useSound)({
        tick: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SOUND_TICK */ .aq,
        win: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SOUND_WIN */ .Ue,
        finish: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SOUND_FINISH */ .eY,
        step: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SOUND_STEP */ .Ep,
        explode: _constants__WEBPACK_IMPORTED_MODULE_8__/* .SOUND_EXPLODE */ .e8
    });
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentPool)();
    const { 0: grid , 1: setGrid  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .generateGrid */ .k_)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .GRID_SIZE */ .k));
    const { 0: currentLevel , 1: setLevel  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);
    const { 0: totalGain , 1: setTotalGain  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: started , 1: setStarted  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [initialWager, setInitialWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useWagerInput)();
    const { 0: mines , 1: setMines  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .MINE_SELECT[2] */ .SG[2]);
    const getMultiplierForLevel = (level)=>{
        const remainingCells = _constants__WEBPACK_IMPORTED_MODULE_8__/* .GRID_SIZE */ .k - level;
        return Number(BigInt(remainingCells * gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__.BPS_PER_WHOLE) / BigInt(remainingCells - mines)) / gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__.BPS_PER_WHOLE;
    };
    const levels = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        const totalLevels = _constants__WEBPACK_IMPORTED_MODULE_8__/* .GRID_SIZE */ .k - mines;
        let cumProfit = 0;
        let previousBalance = initialWager;
        return Array.from({
            length: totalLevels
        }).map((_, level)=>{
            const wager = level === 0 ? initialWager : previousBalance;
            const multiplier = getMultiplierForLevel(level);
            const remainingCells = _constants__WEBPACK_IMPORTED_MODULE_8__/* .GRID_SIZE */ .k - level;
            const bet = Array.from({
                length: remainingCells
            }, (_, i)=>i < mines ? 0 : multiplier);
            const profit = wager * (multiplier - 1);
            cumProfit += profit;
            const balance = wager + profit;
            previousBalance = balance;
            return {
                bet,
                wager,
                profit,
                cumProfit,
                balance
            };
        }).filter((x)=>Math.max(...x.bet) * x.wager < pool.maxPayout);
    }, [
        initialWager,
        mines,
        pool.maxPayout
    ]);
    const remainingCells = _constants__WEBPACK_IMPORTED_MODULE_8__/* .GRID_SIZE */ .k - currentLevel;
    const gameFinished = remainingCells <= mines;
    const canPlay = started && !loading && !gameFinished;
    const { wager , bet  } = levels[currentLevel] ?? {};
    const start = ()=>{
        setGrid((0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .generateGrid */ .k_)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .GRID_SIZE */ .k));
        setLoading(false);
        setLevel(0);
        setTotalGain(0);
        setStarted(true);
    };
    const endGame = async ()=>{
        sounds.play("finish");
        reset();
    };
    const reset = ()=>{
        setGrid((0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .generateGrid */ .k_)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .GRID_SIZE */ .k));
        setLoading(false);
        setLevel(0);
        setTotalGain(0);
        setStarted(false);
    };
    const play = async (cellIndex)=>{
        setLoading(true);
        setSelected(cellIndex);
        try {
            sounds.sounds.step.player.loop = true;
            sounds.play("step", {});
            sounds.sounds.tick.player.loop = true;
            sounds.play("tick", {});
            await game.play({
                bet,
                wager,
                metadata: [
                    currentLevel
                ]
            });
            const result = await gamba.result();
            sounds.sounds.tick.player.stop();
            if (result.payout === 0) {
                setStarted(false);
                setGrid((0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .revealAllMines */ .bW)(grid, cellIndex, mines));
                sounds.play("explode");
                return;
            }
            const nextLevel = currentLevel + 1;
            setLevel(nextLevel);
            setGrid((0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .revealGold */ .Of)(grid, cellIndex, result.profit));
            setTotalGain(result.payout);
            if (nextLevel < _constants__WEBPACK_IMPORTED_MODULE_8__/* .GRID_SIZE */ .k - mines) {
                sounds.play("win", {
                    playbackRate: Math.pow(_constants__WEBPACK_IMPORTED_MODULE_8__/* .PITCH_INCREASE_FACTOR */ .Wd, currentLevel)
                });
            } else {
                sounds.play("win", {
                    playbackRate: 0.9
                });
                sounds.play("finish");
            }
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error(`An error occurred: ${err.message}`);
        } finally{
            setLoading(false);
            setSelected(-1);
            sounds.sounds.tick.player.stop();
            sounds.sounds.step.player.stop();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Container2 */ .cG, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Levels */ .Ob, {
                            children: levels.map(({ cumProfit  }, i)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Level */ .aC, {
                                    $active: currentLevel === i,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                "LEVEL ",
                                                i + 1
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                amount: cumProfit
                                            })
                                        })
                                    ]
                                }, i);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .StatusBar */ .A_, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "Mines: ",
                                            mines
                                        ]
                                    }),
                                    totalGain > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "+",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                amount: totalGain
                                            }),
                                            " +",
                                            Math.round(totalGain / initialWager * 100 - 100),
                                            "%"
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Responsive, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Grid */ .rj, {
                                    children: grid.map((cell, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .CellButton */ .Sx, {
                                            status: cell.status,
                                            selected: selected === index,
                                            onClick: ()=>play(index),
                                            disabled: !canPlay || cell.status !== "hidden",
                                            children: cell.status === "gold" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    "+",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                        amount: cell.profit
                                                    })
                                                ]
                                            })
                                        }, index))
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "controls",
                children: !started ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.WagerInput, {
                            value: initialWager,
                            onChange: setInitialWager
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Select, {
                            options: _constants__WEBPACK_IMPORTED_MODULE_8__/* .MINE_SELECT */ .SG,
                            value: mines,
                            onChange: setMines,
                            label: (mines)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        mines,
                                        " Mines"
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            onClick: start,
                            text: "Play"
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    onClick: endGame,
                    text: totalGain > 0 ? "Finish" : "Reset"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mines);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A_": () => (/* binding */ StatusBar),
/* harmony export */   "Ob": () => (/* binding */ Levels),
/* harmony export */   "Sx": () => (/* binding */ CellButton),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "aC": () => (/* binding */ Level),
/* harmony export */   "cG": () => (/* binding */ Container2),
/* harmony export */   "rj": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/games/Mines/styles.ts

const tickingAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0%, 50%, 100% {
    transform: scale(1);
    filter: brightness(1);
    /* background: #764cc4; */
    /* box-shadow: 0 0 1px 1px #ffffff00; */
  }
  25% {
    transform: scale(0.95);
    filter: brightness(1.5);
    /* background: #945ef7; */
    /* box-shadow: 0 0 1px 1px #ffffff99; */
  }
`;
const goldReveal = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0% {
    filter: brightness(1);
    /* background: #ffffff; */
    transform: scale(1.1);
  }
  75% {
    filter: brightness(2);
    /* background: #3fff7a; */
    transform: scale(1.2);
  }
`;
const mineReveal = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  51% {
    background: #ffffff;
    transform: scale(1.6);
  }
`;
const hoverPulse = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;
const Container2 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100%;
`;
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  user-select: none;
  backdrop-filter: blur(20px);
`;
const Grid = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 8px;
`;
const Levels = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  border-radius: 5px;
  color: gray;
  background: #292a307d;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 50px;
`;
const Level = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 0 auto;
  width: 25%;
  text-align: center;
  padding: 5px 0;
  opacity: 0.5;
  text-wrap: nowrap;

  & > div:first-child {
    font-size: 60%;
    color: gray;
  }

  ${(props)=>props.$active && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      background: #ffffff11;
      background: 2px 0px 10px #00000033;
      color: #32cd5e;
      opacity: 1;
    `}
`;
const CellButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  // blue to purple
  background: linear-gradient(to bottom, #764cc4 50%, #945ef7 100%);
  background-size: 100%;
  border: none;
  border-bottom: 5px solid #00000055;
  border-radius: 4px;
  font-weight: bold;
  aspect-ratio: 1;
  width: 60px;
  transition:
    background 0.3s,
    opacity 0.3s,
    filter 0.2s ease;
  font-size: 12px;
  cursor: pointer;

  ${(props)=>props.selected && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      animation: ${tickingAnimation} 0.5s ease infinite;
      z-index: 10;
      opacity: 1 !important;
    `}

  ${(props)=>props.status === "gold" && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      color: #005822;
      color: white;
      /* background: #3fff7a; */
      animation: ${goldReveal} 0.5s ease;
      opacity: 1;
    `}

  ${(props)=>props.status === "mine" && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      background: #ff5252;
      z-index: 10;
      animation: ${mineReveal} 0.3s ease;
      opacity: 1;
    `}

  ${(props)=>props.status === "hidden" && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      /* background: #573c89; */
      &:disabled {
        opacity: 0.5;
      }
    `}

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.5);
    /* background: #764cc4; */
    /* animation: ${hoverPulse} .25s ease infinite; */
  }
`;
const StatusBar = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  & > div:first-child {
    display: flex;
    color: #ffffffcc;
    gap: 20px;
  }
`;


/***/ }),

/***/ 1714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Of": () => (/* binding */ revealGold),
/* harmony export */   "bW": () => (/* binding */ revealAllMines),
/* harmony export */   "k_": () => (/* binding */ generateGrid)
/* harmony export */ });
// src/games/Mines/utils.ts
const generateGrid = (size)=>Array.from({
        length: size
    }).fill({
        status: "hidden",
        profit: 0
    });
const revealGold = (cells, cellIndex, value)=>{
    return cells.map((cell, i)=>{
        if (i === cellIndex) {
            return {
                status: "gold",
                profit: value
            };
        }
        return cell;
    });
};
const revealAllMines = (cells, cellIndex, numberOfMines)=>{
    const mineIndices = cells.map((cell, index)=>({
            cell,
            index
        })).sort((a, b)=>{
        if (a.index === cellIndex) return -1;
        if (b.index === cellIndex) return 1;
        if (a.cell.status === "hidden" && b.cell.status === "hidden") {
            return Math.random() - 0.5;
        }
        if (a.cell.status === "hidden") return -1;
        if (b.cell.status === "hidden") return 1;
        return 0;
    }).map((x)=>x.index).slice(0, numberOfMines);
    return cells.map((cell, i)=>{
        if (mineIndices.includes(i)) {
            return {
                status: "mine",
                profit: 0
            };
        }
        return cell;
    });
};


/***/ })

};
;