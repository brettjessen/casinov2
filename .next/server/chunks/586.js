"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 1979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Chip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const StyledChip = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  width: 18px;
  height: 18px;
  line-height: 16px;
  border-radius: 10px;
  background: var(--chip-color);
  border: 1px dashed var(--border-color);
  color: black;
  font-size: 9px;
  font-weight: bold;
  color: var(--text-color);
  box-shadow: 0 0 0 1px var(--chip-color);
  padding: 0;
  display: inline-block;
  text-align: center;
  user-select: none;

  ${(props)=>props.$color === "white" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      --chip-color: #f0f0ff;
      --border-color: #000000;
      --text-color: #000000;
    `}
  ${(props)=>props.$color === "green" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      --chip-color: #47ff7d;
      --border-color: #000000;
      --text-color: #000000;
    `}
  ${(props)=>props.$color === "red" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      --chip-color: #ff5b72;
      --border-color: #000000;
      --text-color: #000000;
    `}
  ${(props)=>props.$color === "blue" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      --chip-color: #00ffff;
      --border-color: #000000;
      --text-color: #000000;
    `}
    ${(props)=>props.$color === "yellow" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      --chip-color: #fffb00;
      --border-color: #000000;
      --text-color: #000000;
    `}
      ${(props)=>props.$color === "orange" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
      --chip-color: #ffa500;
      --border-color: #000000;
      --text-color: #000000;
    `}
`;
const color = (value)=>{
    if (value <= 1) return "green";
    if (value <= 2) return "red";
    if (value <= 3) return "blue";
    if (value <= 4) return "yellow";
    if (value <= 5) return "orange";
    if (value <= 10) return "white";
    return "white";
};
function Chip({ value  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
        $color: color(value),
        children: value
    });
}


/***/ }),

/***/ 6508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BX": () => (/* binding */ StyledBetButton),
/* harmony export */   "bp": () => (/* binding */ ChipContainer),
/* harmony export */   "k6": () => (/* binding */ StyledTable),
/* harmony export */   "rK": () => (/* binding */ StyledResults)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const resultFlash = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  from { background-color: white;}
  to { background-color: #292a307d;}
`;
const StyledResults = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  border-radius: 10px;
  background: #191c2fa1;
  margin: 0 auto;
  font-weight: bold;
  overflow: hidden;
  width: 100%;
  display: flex;
  height: 50px;

  & > div {
    display: flex;
    padding: 10px;
    width: 40px;
    justify-content: center;
  }

  & > div:first-child {
    font-size: 24px;
    align-items: center;
    width: 60px;
    justify-content: center;
    background: #ffffff11;
    animation: ${resultFlash} 1s;
  }
`;
const StyledBetButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  box-shadow: 0 0 0 1px var(--border-color);
  color: white;
  width: 60px;
  cursor: pointer;
  text-align: center;

  ${(props)=>props.$color === "red" && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      --background-color: #ff3d5e;
      --border-color: #ff2b4e;
    `}

  ${(props)=>props.$color === "black" && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      --background-color: #1b1b25;
      --border-color: #121218;
    `}

  background-color: var(--background-color);
  box-shadow: 0 0 0 1px var(--border-color);

  &::after {
    content: " ";
    transition: background 0.1s;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  &:hover::after {
    background: #9999ff44;
    mix-blend-mode: screen;
  }
  ${(props)=>props.$highlighted && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      &::after {
        background: #9999ff44;
        mix-blend-mode: screen;
      }
    `}
`;
const StyledTable = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  gap: 10px;
`;
const ChipContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transform: translate(25%, -25%);
`;


/***/ }),

/***/ 2948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1979);
/* harmony import */ var _Roulette_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6508);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3802);
/* harmony import */ var _signals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(122);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_signals__WEBPACK_IMPORTED_MODULE_7__]);
_signals__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Table() {
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_2__.useGamba)();
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useSound)({
        chip: _constants__WEBPACK_IMPORTED_MODULE_6__/* .SOUND_CHIP */ .cG
    });
    const add = (id)=>{
        if (gamba.isPlaying) return;
        sounds.play("chip", {
            playbackRate: 1
        });
        (0,_signals__WEBPACK_IMPORTED_MODULE_7__/* .addChips */ .y6)(id, _signals__WEBPACK_IMPORTED_MODULE_7__/* .selectedChip.value */ ["in"].value);
    };
    const remove = (id)=>{
        if (gamba.isPlaying) return;
        sounds.play("chip", {
            playbackRate: 0.8
        });
        (0,_signals__WEBPACK_IMPORTED_MODULE_7__/* .removeChips */ .T0)(id);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Roulette_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledTable */ .k6, {
        children: Object.entries(_constants__WEBPACK_IMPORTED_MODULE_6__/* .tableLayout */ .GJ).map(([id, square])=>{
            const amount = (0,_signals__WEBPACK_IMPORTED_MODULE_7__/* .getChips */ .Ze)(id);
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Roulette_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledBetButton */ .BX, {
                onClick: (evt)=>{
                    evt.preventDefault();
                    if (evt.button !== 2) {
                        add(id);
                    } else {
                        remove(id);
                    }
                },
                onContextMenu: ()=>remove(id),
                style: {
                    gridRow: square.row,
                    gridColumn: square.column
                },
                $highlighted: _signals__WEBPACK_IMPORTED_MODULE_7__/* .hovered.value.includes */ .ch.value.includes(Number(id)),
                $color: square.color,
                onMouseOver: ()=>(0,_signals__WEBPACK_IMPORTED_MODULE_7__/* .hover */ .Mr)(square.numbers),
                onMouseLeave: ()=>(0,_signals__WEBPACK_IMPORTED_MODULE_7__/* .hover */ .Mr)([]),
                children: [
                    square.label,
                    amount > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Roulette_styles__WEBPACK_IMPORTED_MODULE_5__/* .ChipContainer */ .bp, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chip__WEBPACK_IMPORTED_MODULE_4__/* .Chip */ .A, {
                            value: amount
                        })
                    }, amount)
                ]
            }, id);
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EV": () => (/* binding */ SOUND_PLAY),
/* harmony export */   "GJ": () => (/* binding */ tableLayout),
/* harmony export */   "Ue": () => (/* binding */ SOUND_WIN),
/* harmony export */   "bD": () => (/* binding */ CHIPS),
/* harmony export */   "cG": () => (/* binding */ SOUND_CHIP),
/* harmony export */   "kK": () => (/* binding */ NUMBERS),
/* harmony export */   "lu": () => (/* binding */ SOUND_LOSE)
/* harmony export */ });
/* unused harmony export NUMBER_COLUMNS */
// src/games/Roulette/constants.ts
const SOUND_PLAY = "/games/roulette/play.mp3";
const SOUND_CHIP = "/games/roulette/chip.mp3";
const SOUND_WIN = "/games/roulette/win.mp3";
const SOUND_LOSE = "/games/roulette/lose.mp3";
const CHIPS = [
    1,
    2,
    3,
    4,
    5,
    10
];
const NUMBERS = 18;
const NUMBER_COLUMNS = Math.ceil(NUMBERS / 3);
const RED_NUMBERS = [
    1,
    3,
    5,
    7,
    9,
    12,
    14,
    16,
    18,
    19,
    21,
    23,
    25,
    27,
    30,
    32,
    34,
    36, 
];
const isRed = (number)=>RED_NUMBERS.includes(number % (RED_NUMBERS.length + 1));
const getRow = (index)=>3 - index % 3;
const allNumbers = Array.from({
    length: NUMBERS
}).map((_, i)=>i + 1);
const makeSquare = (label, numberFilter, [column, row])=>{
    const numbers = allNumbers.filter(numberFilter);
    return {
        label,
        numbers,
        row,
        column
    };
};
const numbersLayout = Array.from({
    length: NUMBERS
}).reduce((prev, _, index)=>({
        ...prev,
        [index + 1]: {
            label: String(index + 1),
            numbers: [
                String(index + 1)
            ],
            row: getRow(index),
            column: 1 + Math.floor(index / 3),
            color: isRed(index + 1) ? "red" : "black"
        }
    }), {});
const tableLayout = {
    ...numbersLayout,
    firstHalf: makeSquare("<" + Math.floor(NUMBERS / 2 + 1), (number)=>number <= NUMBERS / 2, [
        1,
        4
    ]),
    even: makeSquare("Even", (number)=>number % 2 === 0, [
        2,
        4
    ]),
    red: makeSquare("Red", (number)=>isRed(number), [
        3,
        4
    ]),
    black: makeSquare("Black", (number)=>!isRed(number), [
        4,
        4
    ]),
    odd: makeSquare("Odd", (number)=>number % 2 === 1, [
        5,
        4
    ]),
    secondHalf: makeSquare(">" + Math.floor(NUMBERS / 2), (number)=>number > NUMBERS / 2, [
        6,
        4
    ]),
    row1: makeSquare("2:1", (number)=>getRow(number - 1) === 1, [
        NUMBER_COLUMNS + 1,
        1, 
    ]),
    row2: makeSquare("2:1", (number)=>getRow(number - 1) === 2, [
        NUMBER_COLUMNS + 1,
        2, 
    ]),
    row3: makeSquare("2:1", (number)=>getRow(number - 1) === 3, [
        NUMBER_COLUMNS + 1,
        3, 
    ])
};


/***/ }),

/***/ 1586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Roulette)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3802);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(122);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1979);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6380);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Roulette_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6508);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2948);
/* harmony import */ var _preact_signals_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5459);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_signals__WEBPACK_IMPORTED_MODULE_3__, _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, _Table__WEBPACK_IMPORTED_MODULE_8__, _preact_signals_react__WEBPACK_IMPORTED_MODULE_9__, sonner__WEBPACK_IMPORTED_MODULE_11__]);
([_signals__WEBPACK_IMPORTED_MODULE_3__, _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__, _Table__WEBPACK_IMPORTED_MODULE_8__, _preact_signals_react__WEBPACK_IMPORTED_MODULE_9__, sonner__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_10___default().div)`
  display: grid;
  gap: 20px;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  color: white;
`;
function Results() {
    const _results = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_9__.computed)(()=>[
            ..._signals__WEBPACK_IMPORTED_MODULE_3__/* .results.value */ .sW.value
        ].reverse());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Roulette_styles__WEBPACK_IMPORTED_MODULE_7__/* .StyledResults */ .rK, {
        children: _results.value.map((index, i)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: index + 1
            }, i);
        })
    });
}
function Stats() {
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentPool)();
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentToken)();
    const balance = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useTokenBalance)();
    const wager = _signals__WEBPACK_IMPORTED_MODULE_3__/* .totalChipValue.value */ .w3.value * token.baseWager / 10000;
    const multiplier = Math.max(..._signals__WEBPACK_IMPORTED_MODULE_3__/* .bet.value */ .aS.value);
    const maxPayout = multiplier * wager;
    const maxPayoutExceeded = maxPayout > pool.maxPayout;
    const balanceExceeded = wager > balance.balance + balance.bonusBalance;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    balanceExceeded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: {
                            color: "#ff0066"
                        },
                        children: "TOO HIGH"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                            amount: wager
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Wager"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: maxPayoutExceeded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: "#ff0066"
                            },
                            children: "TOO HIGH"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                    amount: maxPayout
                                }),
                                "(",
                                multiplier.toFixed(2),
                                "x)"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Potential win"
                    })
                ]
            })
        ]
    });
}
function Roulette() {
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.useGame();
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentToken)();
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentPool)();
    const balance = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useTokenBalance)();
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_12__.useGamba)();
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useSound)({
        win: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SOUND_WIN */ .Ue,
        lose: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SOUND_LOSE */ .lu,
        play: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SOUND_PLAY */ .EV
    });
    const wager = _signals__WEBPACK_IMPORTED_MODULE_3__/* .totalChipValue.value */ .w3.value * token.baseWager / 10000;
    const multiplier = Math.max(..._signals__WEBPACK_IMPORTED_MODULE_3__/* .bet.value */ .aS.value);
    const maxPayout = multiplier * wager;
    const maxPayoutExceeded = maxPayout > pool.maxPayout;
    const balanceExceeded = wager > balance.balance + balance.bonusBalance;
    const play = async ()=>{
        try {
            _signals__WEBPACK_IMPORTED_MODULE_3__/* .results.value */ .sW.value = [];
            sounds.play("play");
            await game.play({
                bet: _signals__WEBPACK_IMPORTED_MODULE_3__/* .bet.value */ .aS.value,
                wager
            });
            const result = await gamba.result();
            (0,_signals__WEBPACK_IMPORTED_MODULE_3__/* .addResult */ .f6)(result.resultIndex);
            if (result.payout > 0) {
                sounds.play("win");
            } else {
                sounds.play("lose");
            }
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_11__.toast.error(`An error occurred: ${err.message}`);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Responsive, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                        onContextMenu: (e)=>e.preventDefault(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Stats, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Results, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Table__WEBPACK_IMPORTED_MODULE_8__/* .Table */ .i, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Select, {
                        options: _constants__WEBPACK_IMPORTED_MODULE_1__/* .CHIPS */ .bD,
                        value: _signals__WEBPACK_IMPORTED_MODULE_3__/* .selectedChip.value */ ["in"].value,
                        onChange: (value)=>_signals__WEBPACK_IMPORTED_MODULE_3__/* .selectedChip.value */ ["in"].value = value,
                        label: (value)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chip__WEBPACK_IMPORTED_MODULE_4__/* .Chip */ .A, {
                                        value: value
                                    }),
                                    " =",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                        amount: token.baseWager * value
                                    })
                                ]
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        disabled: !wager || gamba.isPlaying,
                        onClick: _signals__WEBPACK_IMPORTED_MODULE_3__/* .clearChips */ .jt,
                        text: "Clear"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        disabled: !wager || balanceExceeded || maxPayoutExceeded,
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

/***/ 122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mr": () => (/* binding */ hover),
/* harmony export */   "T0": () => (/* binding */ removeChips),
/* harmony export */   "Ze": () => (/* binding */ getChips),
/* harmony export */   "aS": () => (/* binding */ bet),
/* harmony export */   "ch": () => (/* binding */ hovered),
/* harmony export */   "f6": () => (/* binding */ addResult),
/* harmony export */   "in": () => (/* binding */ selectedChip),
/* harmony export */   "jt": () => (/* binding */ clearChips),
/* harmony export */   "sW": () => (/* binding */ results),
/* harmony export */   "w3": () => (/* binding */ totalChipValue),
/* harmony export */   "y6": () => (/* binding */ addChips)
/* harmony export */ });
/* unused harmony exports chipPlacements, distributedChips */
/* harmony import */ var _preact_signals_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5459);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__]);
_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const chipPlacements = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.signal)({});
const hovered = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
const results = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
const selectedChip = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.signal)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHIPS[0] */ .bD[0]);
const distributedChips = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>{
    const placements = Object.entries(chipPlacements.value);
    const distributed = Array.from({
        length: _constants__WEBPACK_IMPORTED_MODULE_1__/* .NUMBERS */ .kK
    }).map(()=>0);
    for (const [id, amount] of placements){
        const square = _constants__WEBPACK_IMPORTED_MODULE_1__/* .tableLayout */ .GJ[id];
        const divided = Number(BigInt(amount * 10000) / BigInt(square.numbers.length));
        for (const number of square.numbers){
            distributed[number - 1] += divided;
        }
    }
    return distributed;
});
const totalChipValue = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>{
    return Math.floor(distributedChips.value.reduce((a, b)=>a + b, 0));
});
const bet = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>{
    const bet = distributedChips.value.map((amount)=>{
        return Number(BigInt(amount * distributedChips.value.length * 10000) / BigInt(totalChipValue.value || 1)) / 10000;
    });
    return bet;
});
const addResult = (index)=>{
    results.value = [
        ...results.value,
        index
    ];
};
const getChips = (id)=>{
    return chipPlacements.value[id] ?? 0;
};
const hover = (ids)=>{
    hovered.value = ids;
};
const addChips = (id, amount)=>{
    chipPlacements.value = {
        ...chipPlacements.value,
        [id]: getChips(id) + amount
    };
};
const removeChips = (id)=>{
    chipPlacements.value = {
        ...chipPlacements.value,
        [id]: 0
    };
};
const clearChips = ()=>{
    chipPlacements.value = {};
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;