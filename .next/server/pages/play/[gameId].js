"use strict";
(() => {
var exports = {};
exports.id = 806;
exports.ids = [806];
exports.modules = {

/***/ 3358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ CustomRenderer),
/* harmony export */   "sH": () => (/* binding */ CustomError),
/* harmony export */   "zA": () => (/* binding */ GameSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1301);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4442);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7547);
/* harmony import */ var _components_game_GameCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(816);
/* harmony import */ var _components_ui_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5186);
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9081);
/* harmony import */ var _ProvablyFairModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9257);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7270);
/* harmony import */ var _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_fa__WEBPACK_IMPORTED_MODULE_1__, _ProvablyFairModal__WEBPACK_IMPORTED_MODULE_10__, sonner__WEBPACK_IMPORTED_MODULE_11__, _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_12__]);
([react_icons_fa__WEBPACK_IMPORTED_MODULE_1__, _ProvablyFairModal__WEBPACK_IMPORTED_MODULE_10__, sonner__WEBPACK_IMPORTED_MODULE_11__, _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/components/sections/Game/Game.tsx













const TransactionStepper = ({ currentStep  })=>{
    const steps = [
        "Signing",
        "Sending",
        "Settling"
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center",
        children: steps.map((step, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `w-full h-2 rounded-md mx-1 flex items-center justify-center transition-all duration-300 
          ${index < currentStep ? "bg-purple-500" : ""}
          ${index === currentStep ? "bg-purple-700 animate-purplePulse" : ""}
          ${index > currentStep ? "bg-gray-300" : ""}
          `
            }, step))
    });
};
function useLoadingState() {
    const userAddress = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_5__.useWalletAddress)();
    const game = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_5__.useAccount)((0,gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__.getGameAddress)(userAddress), gamba_core_v2__WEBPACK_IMPORTED_MODULE_4__.decodeGame);
    const txStore = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_5__.useTransactionStore)();
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (txStore.label !== "play") {
            return -1;
        }
        if (game?.status.resultRequested) {
            return 2;
        }
        if (txStore.state === "processing" || txStore.state === "sending") {
            return 1;
        }
        if (txStore.state === "simulating" || txStore.state === "signing") {
            return 0;
        }
        return -1;
    }, [
        txStore,
        game
    ]);
}
function GameSlider() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid grid-cols-2 md:flex md:flex-wrap md:justify-center",
            children: _games__WEBPACK_IMPORTED_MODULE_6__/* .GAMES.map */ .W.map((game)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-48 md:w-64 p-2 flex justify-center md:my-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_game_GameCard__WEBPACK_IMPORTED_MODULE_7__/* .GameCard */ .y, {
                        game: game
                    })
                }, game.id))
        })
    });
}
function CustomError() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
            target: "error",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Responsive, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "\uD83D\uDE2D Oh no!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Something went wrong"
                    })
                ]
            })
        })
    });
}
function CustomRenderer() {
    const { game  } = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.useGame();
    const { 0: info , 1: setInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: provablyFair , 1: setProvablyFair  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const audioStore = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useSoundStore)();
    const imagePath = `/games/${game.id}/logo.png`;
    const { newcomer , gamesPlayed , set  } = (0,_hooks_useUserStore__WEBPACK_IMPORTED_MODULE_12__/* .useUserStore */ .L)();
    const currentStep = useLoadingState();
    const { 0: showSplash , 1: setShowSplash  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (newcomer || !gamesPlayed.includes(game.id)) {
            setInfo(true);
            set((state)=>({
                    newcomer: false,
                    gamesPlayed: [
                        ...state.gamesPlayed,
                        game.id
                    ]
                }));
        }
    }, [
        game.id,
        gamesPlayed,
        newcomer,
        set
    ]);
    const VolatilityStars = ({ count  })=>{
        const totalStars = 5;
        const getSizeClass = (index)=>{
            switch(index){
                case 0:
                    return "text-sm";
                case 1:
                    return "text-md";
                case 2:
                    return "text-lg";
                case 3:
                    return "text-xl";
                case 4:
                    return "text-2xl";
                default:
                    return "text-sm";
            }
        };
        const getShadowClass = (index)=>{
            return index < count ? "shadow-lg" : "shadow-sm";
        };
        const filledStars = Array.from({
            length: count
        }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStar, {
                className: `text-yellow-500 ${getSizeClass(index)} ${getShadowClass(index)}`
            }, `filled-${index}`));
        const emptyStars = Array.from({
            length: totalStars - count
        }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaStar, {
                className: `text-gray-300 ${getSizeClass(index)} shadow-sm`
            }, `empty-${index}`));
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex space-x-1 md:space-x-2 items-center",
            children: [
                ...filledStars,
                ...emptyStars
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            info && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_9__/* .Modal */ .u, {
                onClose: ()=>setInfo(false),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        height: "150px",
                        src: imagePath,
                        alt: `${game.meta.name}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: game.meta.description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl",
                                children: "Volatility"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VolatilityStars, {
                                count: game.meta.volatility
                            })
                        ]
                    })
                ]
            }),
            provablyFair && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProvablyFairModal__WEBPACK_IMPORTED_MODULE_10__/* .ProvablyFairModal */ .g, {
                onClose: ()=>setProvablyFair(false)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full relative grid gap-1",
                children: [
                    showSplash && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pointer-events-none rounded-lg absolute inset-0 flex justify-center items-center z-10 bg-[#0c0c11] text-6xl font-bold animate-[splashAnimation_1s_ease-out_forwards]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            height: "150px",
                            src: imagePath,
                            alt: `Splash for ${game.meta.name}`
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative flex-grow bg-[#1A1B28] rounded-lg overflow-hidden transition-height duration-200 md:min-h-[550px] min-h-[500px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.PortalTarget, {
                                target: "error"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.PortalTarget, {
                                target: "screen"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "absolute left-0 bottom-0 p-1 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-2 justify-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "p-2 text-white bg-transparent hover:bg-[#ffffff22] rounded-lg cursor-pointer focus:outline-none",
                                                onClick: ()=>setInfo(true),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icon__WEBPACK_IMPORTED_MODULE_8__/* .Icon.Info */ .J.Info, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "p-2 text-white bg-transparent hover:bg-[#ffffff22] rounded-lg cursor-pointer focus:outline-none",
                                                onClick: ()=>setProvablyFair(true),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icon__WEBPACK_IMPORTED_MODULE_8__/* .Icon.Fairness */ .J.Fairness, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "p-2 text-white bg-transparent hover:bg-[#ffffff22] rounded-lg cursor-pointer focus:outline-none",
                                        onClick: ()=>{
                                            const newVolume = audioStore.volume === 0 ? 1 : 0;
                                            audioStore.set(newVolume);
                                            newVolume === 0 ? sonner__WEBPACK_IMPORTED_MODULE_11__.toast.error("Muted") : sonner__WEBPACK_IMPORTED_MODULE_11__.toast.success("Unmuted");
                                        },
                                        children: audioStore.volume === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaVolumeMute, {
                                                className: "w-6 h-6"
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaVolumeUp, {
                                                className: "w-6 h-6"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TransactionStepper, {
                        currentStep: currentStep
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full overflow-hidden bg-[#1A1B28] p-2 sm:p-5 text-white rounded-lg flex flex-wrap gap-2 sm:gap-5 items-start md:min-h-[5.2rem] min-h-16 sm:flex-row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-grow flex items-center justify-start gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.PortalTarget, {
                                    target: "controls"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.PortalTarget, {
                                    target: "play"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ ProvablyFairModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6380);
/* harmony import */ var _components_ui_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5186);
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__]);
_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/components/sections/Game/ProvablyFairModal.tsx







function ProvablyFairModal(props) {
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_3__.useGamba)();
    const platform = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaPlatformContext);
    const program = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_3__.useGambaProgram)();
    const sendTransaction = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_3__.useSendTransaction)();
    const initialize = async ()=>{
        sendTransaction(program.methods.playerInitialize().accounts({}).instruction());
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_6__/* .Modal */ .u, {
        onClose: ()=>props.onClose(),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold",
                children: "Provably Fair"
            }),
            !gamba.userCreated && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Provably Fair allows you to verify that the result of each game was randomly generated. Since you are playing from this wallet for the first time, you can request the initial hashed seed ahead of time. After this it will be done automatically for each play."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        onClick: initialize,
                        text: "Get hashed seed"
                    })
                ]
            }),
            gamba.userCreated && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Your client seed will affect the result of the next game you play."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "grid",
                            gap: "10px",
                            width: "100%",
                            padding: "20px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Next RNG Seed (sha256)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.TextInput, {
                                value: gamba.nextRngSeedHashed || "",
                                disabled: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Client Seed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.TextInput, {
                                        style: {
                                            flexGrow: "1"
                                        },
                                        value: platform.clientSeed,
                                        disabled: gamba.isPlaying,
                                        maxLength: 32,
                                        onChange: platform.setClientSeed
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                                        disabled: gamba.isPlaying,
                                        onClick: ()=>platform.setClientSeed(String(Math.random() * 1e9 | 0)),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icon.Shuffle */ .J.Shuffle, {})
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useUserStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3602);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/hooks/useUserStore.ts


/**
 * Store client settings here
 */ const useUserStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((set)=>({
        agreedToTerms: false,
        newcomer: true,
        gamesPlayed: [],
        priorityFee: 400201,
        isPriorityFeeEnabled: true,
        set
    }), {
    name: "user",
    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.createJSONStorage)(()=>sessionStorage)
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_game_GameRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3358);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2660);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7547);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_game_GameRenderer__WEBPACK_IMPORTED_MODULE_1__]);
_components_game_GameRenderer__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/pages/play/[gameId].tsx








const GamePage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { gameId  } = router.query;
    const { 0: currentGameId , 1: setCurrentGameId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(gameId);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const game = _games__WEBPACK_IMPORTED_MODULE_4__/* .GAMES.find */ .W.find((x)=>x.id === gameId);
    const gameName = game?.meta?.name;
    const imagePath = `/games/${gameId}/logo.png`;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleRouteChangeStart = ()=>{
            setIsLoading(true);
        };
        const handleRouteChangeComplete = ()=>{
            setIsLoading(false);
            setCurrentGameId(gameId);
        };
        router.events.on("routeChangeStart", handleRouteChangeStart);
        router.events.on("routeChangeComplete", handleRouteChangeComplete);
        if (gameId) {
            setIsLoading(false);
            setCurrentGameId(gameId);
        }
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChangeStart);
            router.events.off("routeChangeComplete", handleRouteChangeComplete);
        };
    }, [
        gameId,
        router.events
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__.NextSeo, {
                title: `${_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.defaultTitle */ .sK.defaultTitle} | ${gameName}`,
                description: _constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.description */ .sK.description,
                canonical: `${_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.openGraph.url */ .sK.openGraph.url}/${currentGameId}`,
                openGraph: {
                    ..._constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.openGraph */ .sK.openGraph,
                    title: `${_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.defaultTitle */ .sK.defaultTitle} | ${gameName}`,
                    url: `${_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.openGraph.url */ .sK.openGraph.url}/${currentGameId}`,
                    description: _constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.openGraph.description */ .sK.openGraph.description,
                    images: [
                        {
                            url: `${_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.openGraph.url */ .sK.openGraph.url}/${imagePath}`,
                            alt: `${_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.defaultTitle */ .sK.defaultTitle} | ${gameName}`
                        }, 
                    ]
                },
                twitter: _constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.twitter */ .sK.twitter,
                additionalMetaTags: _constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_SEO_CONFIG.additionalMetaTags */ .sK.additionalMetaTags
            }),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-black mt-20 flex flex-col justify-center items-center mx-auto max-w-sm md:max-w-6xl pb-1 min-h-[580px] md:min-h-[650px] rounded-lg shadow-xl",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col justify-center items-center max-w-lg rounded-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                            src: "/gamba.mp4",
                            className: "w-full h-full",
                            autoPlay: true,
                            muted: true,
                            playsInline: true,
                            loop: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-2xl text-white mt-5",
                            children: "Loading..."
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: game ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col justify-center items-center mx-auto max-w-6xl max-sm:max-w-sm pt-20",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_5__.GambaUi.Game, {
                        game: game,
                        errorFallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_game_GameRenderer__WEBPACK_IMPORTED_MODULE_1__/* .CustomError */ .sH, {}),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_game_GameRenderer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {})
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-black mt-20 flex flex-col justify-center items-center mx-auto max-w-sm md:max-w-6xl pb-1 min-h-[580px] md:min-h-[650px] rounded-lg shadow-xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-center items-center max-w-lg rounded-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                src: "/gamba.mp4",
                                className: "w-full h-full",
                                autoPlay: true,
                                muted: true,
                                playsInline: true,
                                loop: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-2xl text-white mt-5",
                                children: "Invalid game ID..."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col justify-center items-center mx-auto max-w-6xl max-sm:max-w-sm mb-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_game_GameRenderer__WEBPACK_IMPORTED_MODULE_1__/* .GameSlider */ .zA, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 8438:
/***/ ((module) => {

module.exports = require("matter-js");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

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

/***/ 1301:
/***/ ((module) => {

module.exports = import("react-icons/fa");;

/***/ }),

/***/ 7270:
/***/ ((module) => {

module.exports = import("sonner");;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = import("three");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,152,380,697,347,816], () => (__webpack_exec__(2283)));
module.exports = __webpack_exports__;

})();