"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GameGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7547);
/* harmony import */ var _GameCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(816);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
// src/components/game/GameGrid.tsx




function GameGrid() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4",
        children: _games__WEBPACK_IMPORTED_MODULE_1__/* .GAMES.map */ .W.map((game)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GameCard__WEBPACK_IMPORTED_MODULE_2__/* .GameCard */ .y, {
                game: game
            }, game.id))
    });
}


/***/ }),

/***/ 9381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RecentPlays)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_RecentPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1727);
/* harmony import */ var _ShareModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1366);
/* harmony import */ var _utils_TimeDiff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1520);
/* harmony import */ var _hooks_useRecentPlays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1157);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ShareModal__WEBPACK_IMPORTED_MODULE_3__]);
_ShareModal__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/components/game/RecentPlays/RecentPlays.tsx








const PLATFORM_CREATOR_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.PublicKey("GpP898ZuTt4fMAN1RbimhUuF8rWoY962oPo7s1nc856Y");
function RecentPlays() {
    const events = (0,_hooks_useRecentPlays__WEBPACK_IMPORTED_MODULE_5__/* .useRecentPlays */ .G)(true);
    const { 0: selectedGame , 1: setSelectedGame  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const PLATFORM_EXPLORER_URL = `https://explorer.gamba.so/platform/${PLATFORM_CREATOR_ADDRESS.toString()}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full relative flex flex-col gap-2.5",
        children: [
            selectedGame && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShareModal__WEBPACK_IMPORTED_MODULE_3__/* .ShareModal */ .V, {
                event: selectedGame,
                onClose: ()=>setSelectedGame(null)
            }),
            events.length > 0 ? events.map((tx, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: ()=>setSelectedGame(tx),
                    className: "flex items-center gap-2 p-2.5 rounded-lg bg-[#0f121b] hover:bg-[#131724] justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_RecentPlay__WEBPACK_IMPORTED_MODULE_2__/* .RecentPlay */ .x, {
                                event: tx
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_TimeDiff__WEBPACK_IMPORTED_MODULE_4__/* .TimeDiff */ .K, {
                            time: tx.time
                        })
                    ]
                }, tx.signature + "-" + index)) : Array.from({
                length: 8
            }, (_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-10 w-full rounded-lg animate-Skeleton bg-gray-300"
                }, i)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                main: true,
                onClick: ()=>window.open(PLATFORM_EXPLORER_URL),
                children: "\uD83D\uDE80 Platform Explorer"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ShareModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6380);
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9081);
/* harmony import */ var _utils_RecentPlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1727);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7276);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7270);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__, sonner__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__, sonner__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/components/sections/RecentPlays/ShareModal.tsx









const canvasToClipboard = async (canvas)=>{
    const minDelay = new Promise((resolve)=>setTimeout(resolve, 300));
    const clipboardCopy = new Promise((resolve, reject)=>{
        canvas.toBlob((blob)=>{
            if (!blob) {
                return reject(new Error("Canvas to Blob conversion failed"));
            }
            navigator.clipboard.write([
                new ClipboardItem({
                    "image/png": blob
                })
            ]).then(resolve).catch(reject);
        });
    });
    await Promise.all([
        minDelay,
        clipboardCopy
    ]);
};
function ShareModal({ event , onClose  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const tokenMeta = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useTokenMeta)(event.data.tokenMint);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: copying , 1: setCopying  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: shutterActive , 1: setShutterActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const profit = event.data.payout.sub(event.data.wager).toNumber();
    const percentChange = profit / event.data.wager.toNumber();
    const { game , isFallback  } = (0,_utils_RecentPlay__WEBPACK_IMPORTED_MODULE_5__/* .extractMetadata */ .m)(event);
    const imagePath = isFallback ? "/logo.svg" : `/games/${game.id}/logo.png`;
    const gotoGame = ()=>{
        router.push(`/play/${game?.id}`);
        onClose();
    };
    const copyImage = async ()=>{
        if (ref.current) {
            try {
                setCopying(true);
                setShutterActive(true);
                const canvas = await html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(ref.current, {
                    removeContainer: true,
                    backgroundColor: "transparent",
                    useCORS: true,
                    logging: true
                });
                await canvasToClipboard(canvas);
                sonner__WEBPACK_IMPORTED_MODULE_7__.toast.success("\uD83D\uDCCB Copied image to clipboard. You can paste it in Twitter or Telegram etc.");
            } finally{
                setShutterActive(false);
                setCopying(false);
            }
        }
    };
    if (!game) {
        return null;
    }
    if (!game) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
        onClose: ()=>onClose(),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mt-6 grid gap-2.5 pb-0 w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-lg overflow-hidden",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: ref,
                        className: "border-2 relative bg-gradient-to-br from-blue-800 to-purple-800 rounded-lg overflow-hidden shadow-3xl transform transition duration-500",
                        children: [
                            shutterActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "overflow-hidden absolute inset-0 flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "animate-shutter"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 transform rotate-12 scale-150 blur-xl pointer-events-none"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-5 bg-black bg-opacity-40",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-2 items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-span-1",
                                                children: [
                                                    imagePath && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: imagePath,
                                                        alt: "Game Image",
                                                        className: "h-full w-full"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `text-3xl md:text-5xl font-extrabold ${percentChange >= 0 ? "text-green-400" : "text-red-400"} transition-colors duration-300`,
                                                        children: [
                                                            profit >= 0 ? "+" : "-",
                                                            (Math.abs(percentChange) * 100).toFixed(2),
                                                            "%"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-col justify-between items-center gap-4",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-[0.1rem] text-left text-xs font-semibold text-gray-400",
                                                            children: "WAGER"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "md:min-w-full flex justify-between items-center gap-1 text-sm md:text-xl font-bold text-gray-500 transition-colors duration-300",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: tokenMeta.image,
                                                                    alt: "Token Image",
                                                                    className: "rounded-full border-2 border-gray-700 h-4 w-4 md:h-5 md:w-5",
                                                                    crossOrigin: "anonymous"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                                    exact: true,
                                                                    amount: event.data.wager,
                                                                    mint: event.data.tokenMint
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-[0.1rem] text-left text-xs font-semibold text-gray-400",
                                                            children: "PAYOUT"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `md:min-w-full flex justify-between  items-center gap-1 text-sm md:text-xl font-bold ${profit >= 0 ? "text-green-500" : "text-red-500"} transition-colors duration-300`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: tokenMeta.image,
                                                                    alt: "Token Image",
                                                                    className: "rounded-full border-2 border-gray-700 h-4 w-4 md:h-5 md:w-5",
                                                                    crossOrigin: "anonymous"
                                                                }),
                                                                profit >= 0 ? "+" : " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                                    exact: true,
                                                                    amount: event.data.payout,
                                                                    mint: event.data.tokenMint
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-[0.1rem] text-left text-xs font-semibold text-gray-400",
                                                            children: "PROFIT"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `md:min-w-full flex justify-between items-center gap-1 text-sm md:text-xl font-bold ${profit >= 0 ? "text-green-500" : "text-red-500"} transition-colors duration-300`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: tokenMeta.image,
                                                                    alt: "Token Image",
                                                                    className: "rounded-full border-2 border-gray-700 h-4 w-4 md:h-5 md:w-5",
                                                                    crossOrigin: "anonymous"
                                                                }),
                                                                profit >= 0 ? "+" : "-",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                                    exact: true,
                                                                    amount: Math.abs(profit),
                                                                    mint: event.data.tokenMint
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 items-center justify-center flex",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/logo.svg",
                                            className: "h-6 w-auto",
                                            alt: "Gamba"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-4 flex gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__/* .GambaButton */ .B, {
                            onClick: ()=>window.open(`https://explorer.gamba.so/tx/${event.signature}`, "_blank"),
                            text: "Verify"
                        }),
                        !isFallback && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__/* .GambaButton */ .B, {
                            onClick: gotoGame,
                            text: `Play ${game?.meta?.name}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__/* .GambaButton */ .B, {
                            onClick: copyImage,
                            text: "Share"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useRecentPlays)
/* harmony export */ });
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
// src/components/sections/RecentPlays/useRecentPlays.ts




const PLATFORM_CREATOR_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey("GpP898ZuTt4fMAN1RbimhUuF8rWoY962oPo7s1nc856Y");
function useRecentPlays(platformOnly = false) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const eventFilter = platformOnly ? {
        address: PLATFORM_CREATOR_ADDRESS
    } : {};
    const previousEvents = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_0__.useGambaEvents)("GameSettled", eventFilter);
    const { 0: newEvents , 1: setNewEvents  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_0__.useGambaEventListener)("GameSettled", (event)=>{
        if (platformOnly && !event.data.creator.equals(PLATFORM_CREATOR_ADDRESS)) {
            return;
        }
        const eventExists = newEvents.some((e)=>e.signature === event.signature);
        if (!eventExists) {
            setNewEvents((prevEvents)=>[
                    event,
                    ...prevEvents
                ]);
        }
    }, [
        router.pathname,
        platformOnly
    ]);
    const combinedEvents = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const allEvents = [
            ...newEvents,
            ...previousEvents
        ];
        const uniqueEvents = allEvents.filter((event, index, self)=>index === self.findIndex((e)=>e.signature === event.signature));
        return uniqueEvents.sort((a, b)=>b.time - a.time);
    }, [
        newEvents,
        previousEvents
    ]);
    return combinedEvents;
}


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_game_GameGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2306);
/* harmony import */ var _components_game_RecentPlays_RecentPlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9381);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_game_RecentPlays_RecentPlays__WEBPACK_IMPORTED_MODULE_2__]);
_components_game_RecentPlays_RecentPlays__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/pages/index.tsx



function HomePage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-transparent",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                backgroundImage: "url(/seo.png)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                transform: "perspective(800px) rotateX(40deg)",
                                transformOrigin: "top center",
                                zIndex: -1,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 transform rotate-12 scale-150 blur-xl pointer-events-none"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "lg:col-span-2 text-center lg:text-left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-center md:justify-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-2xl md:text-4xl font-bold text-white drop-shadow-md",
                                            children: "Welcome to Gamba"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/wave.gif",
                                            className: "h-14",
                                            alt: "Gamba Logo"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-4 text-white drop-shadow",
                                    children: "The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>window.open("https://github.com/BankkRoll/Gamba-V2-Next.js"),
                                    className: "rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl",
                                    children: "\uD83D\uDC68‍\uD83D\uDCBB Build your own"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>window.open("https://gamba.so/docs"),
                                    className: "rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl",
                                    children: "\uD83D\uDCD6 Gamba Docs"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>window.open("https://explorer.gamba.so"),
                                    className: "rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl",
                                    children: "\uD83C\uDF10 Explorer"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>window.open("https://discord.com/invite/HSTtFFwR"),
                                    className: "rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl",
                                    children: "\uD83D\uDCAC Join Discord"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-2xl font-bold text-center",
                    children: "Games"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_game_GameGrid__WEBPACK_IMPORTED_MODULE_1__/* .GameGrid */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-2xl font-bold text-center",
                    children: "Recent Plays"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_game_RecentPlays_RecentPlays__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TimeDiff)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// src\utils\TimeDiff.tsx


function TimeDiff({ time , suffix ="ago"  }) {
    const diff = Date.now() - time;
    const timeString = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        if (hours >= 1) {
            return `${hours}h ${suffix}`;
        }
        if (minutes >= 1) {
            return `${minutes}m ${suffix}`;
        }
        return "Just now";
    }, [
        diff,
        suffix
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: timeString
    });
}


/***/ }),

/***/ 4165:
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ 3784:
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ 7831:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 4442:
/***/ ((module) => {

module.exports = require("gamba-core-v2");

/***/ }),

/***/ 5923:
/***/ ((module) => {

module.exports = require("gamba-react-ui-v2");

/***/ }),

/***/ 6545:
/***/ ((module) => {

module.exports = require("gamba-react-v2");

/***/ }),

/***/ 7276:
/***/ ((module) => {

module.exports = require("html2canvas");

/***/ }),

/***/ 8438:
/***/ ((module) => {

module.exports = require("matter-js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5459:
/***/ ((module) => {

module.exports = import("@preact/signals-react");;

/***/ }),

/***/ 1247:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7270:
/***/ ((module) => {

module.exports = import("sonner");;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = import("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,152,380,347,727,816], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();