"use strict";
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keno)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keno_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8401);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6380);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7270);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__, sonner__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__, sonner__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Keno/index.tsx
/*
 * Author: BankkRoll
 */ 





const GRID_SIZE = 40;
const MAX_SELECTION = 10;
function Keno() {
    const [wager, setWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useWagerInput)();
    const { 0: isPlaying , 1: setIsPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: selectedNumbers , 1: setSelectedNumbers  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: drawnNumbers , 1: setDrawnNumbers  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: revealedBlocks , 1: setRevealedBlocks  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Set());
    const { 0: gameWon , 1: setGameWon  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.useGame();
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useSound)({
        reveal: "/games/keno/reveal.mp3",
        win: "/games/keno/win.mp3",
        lose: "/games/keno/lose.mp3",
        ping: "/games/keno/ping.mp3"
    });
    const toggleNumberSelection = (number)=>{
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter((n)=>n !== number));
        } else if (selectedNumbers.length < MAX_SELECTION) {
            setSelectedNumbers([
                ...selectedNumbers,
                number
            ]);
            sounds.play("ping");
        }
    };
    const resetGame = ()=>{
        setSelectedNumbers([]);
        setRevealedBlocks(new Set());
        setDrawnNumbers([]);
        setGameWon(null);
    };
    const play = async ()=>{
        setRevealedBlocks(new Set());
        setGameWon(null);
        setIsPlaying(true);
        try {
            await game.play({
                bet: generateBetArray(selectedNumbers.length),
                wager: wager
            });
            const gameResult = await game.result();
            const win = gameResult.payout > 0;
            const simulatedDrawnNumbers = simulateDrawnNumbers(win, selectedNumbers);
            setDrawnNumbers(simulatedDrawnNumbers);
            revealDrawnNumbers(simulatedDrawnNumbers, win);
            setGameWon(win);
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_5__.toast.error(`An error occurred: ${err.message}`);
        } finally{
            setIsPlaying(false);
        }
    };
    const revealDrawnNumbers = async (drawnNumbers, win)=>{
        for(let i = 0; i < drawnNumbers.length; i++){
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    setRevealedBlocks((prev)=>new Set(prev).add(drawnNumbers[i]));
                    sounds.play("reveal");
                    resolve(true);
                }, 200);
            });
        }
        setTimeout(()=>{
            win ? sounds.play("win") : sounds.play("lose");
        }, drawnNumbers.length);
    };
    const simulateDrawnNumbers = (win, selected)=>{
        if (win) {
            const remainingNumbers = generateRandomNumbers(GRID_SIZE - 1, selected, GRID_SIZE);
            shuffleArray(remainingNumbers);
            const winningNumbers = remainingNumbers.slice(0, 9);
            return [
                ...winningNumbers,
                selected[0]
            ];
        } else {
            return generateRandomNumbers(10, selected, GRID_SIZE);
        }
    };
    const shuffleArray = (array)=>{
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [
                array[j],
                array[i]
            ];
        }
    };
    const generateRandomNumbers = (count, exclude, max)=>{
        let nums = [];
        while(nums.length < count){
            let n = Math.floor(Math.random() * max) + 1;
            if (!nums.includes(n) && !exclude.includes(n)) {
                nums.push(n);
            }
        }
        return nums;
    };
    const generateBetArray = (selectionCount)=>{
        const validSelectionCount = Math.min(selectionCount, 10);
        const totalBetUnits = 40;
        if (validSelectionCount === 0) {
            return new Array(40).fill(0);
        }
        const baseBetPerSelection = Math.floor(totalBetUnits / validSelectionCount);
        const remainder = totalBetUnits % validSelectionCount;
        const betArray = new Array(validSelectionCount).fill(baseBetPerSelection);
        for(let i = 0; i < remainder; i++){
            betArray[i] += 1;
        }
        for(let i1 = validSelectionCount; i1 < 40; i1++){
            betArray.push(0);
        }
        return betArray;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Responsive, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_keno_styles__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_keno_styles__WEBPACK_IMPORTED_MODULE_1__/* .Grid */ .rj, {
                                children: Array.from({
                                    length: GRID_SIZE
                                }, (_, i)=>i + 1).map((number)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_keno_styles__WEBPACK_IMPORTED_MODULE_1__/* .CellButton */ .Sx, {
                                        disabled: isPlaying || revealedBlocks.has(number) || selectedNumbers.length >= MAX_SELECTION && !selectedNumbers.includes(number) || gameWon !== null,
                                        selected: selectedNumbers.includes(number),
                                        $revealed: revealedBlocks.has(number),
                                        $revealedWin: selectedNumbers.includes(number) && revealedBlocks.has(number),
                                        $revealedLoss: !selectedNumbers.includes(number) && revealedBlocks.has(number),
                                        onClick: ()=>toggleNumberSelection(number),
                                        children: number
                                    }, number))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                textAlign: "center"
                            },
                            children: gameWon === true ? "Clear the board to play again." : gameWon === false ? "Clear the board to play again." : null
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.WagerInput, {
                        value: wager,
                        onChange: setWager
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        disabled: isPlaying,
                        onClick: resetGame,
                        text: "Clear"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        disabled: selectedNumbers.length === 0 || isPlaying || gameWon !== null,
                        onClick: play,
                        text: "Play"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sx": () => (/* binding */ CellButton),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "rj": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/games/Keno/keno.styles.ts
/*
 * Author: BankkRoll
 */ 
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Grid = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  --num-cols: 8;
  display: grid;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  gap: 5px;
  margin: auto;
`;
const pulseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(0, 255, 0, 0.7);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(0, 255, 0, 0);
  }
`;
const CellButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  ${({ selected , $revealedWin , $revealedLoss  })=>{
    if ($revealedWin) return styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
        background: #00ff00;
        animation: ${pulseAnimation} 1s infinite;
      `;
    if ($revealedLoss) return styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
        background: #ff6347;
      `;
    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${selected ? "#9335ff" : "#9358ff"};
    `;
}}
  border: none;
  border-bottom: ${({ selected , $revealedWin , $revealedLoss  })=>{
    if ($revealedWin || $revealedLoss) return "5px solid #00000055";
    return selected ? "5px solid #00000055" : "3px solid transparent";
}};
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
  box-shadow: ${({ selected , $revealedWin , $revealedLoss  })=>{
    if ($revealedWin || $revealedLoss) return "0 2px 4px rgba(0, 0, 0, 0.2)";
    return selected ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none";
}};

  ${({ selected  })=>selected && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      filter: brightness(1.5);
      z-index: 10;
      opacity: 1 !important;
    `}

  &:hover:not(:disabled) {
    filter: brightness(1.5);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;


/***/ })

};
;