(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2660);
// src/components/layout/Footer.tsx


function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-gradient-to-br from-blue-800 to-purple-800 rounded-t-2xl shadow-t-3xl",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full max-w-screen-xl mx-auto p-4 md:py-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "sm:flex sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://gamba.so/",
                            className: "flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo.svg",
                                className: "h-10",
                                alt: "Gamba Logo"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400",
                            children: _constants__WEBPACK_IMPORTED_MODULE_1__/* .FOOTER_LINKS.map */ .bc.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: link.href,
                                        className: "hover:underline me-4 md:me-6",
                                        children: link.title
                                    })
                                }, link.href))
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block text-sm text-gray-500 sm:text-center dark:text-gray-400",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: _constants__WEBPACK_IMPORTED_MODULE_1__/* .FOOTER_TWITTER_LINK.href */ .Ft.href,
                        className: "hover:underline",
                        children: _constants__WEBPACK_IMPORTED_MODULE_1__/* .FOOTER_TWITTER_LINK.title */ .Ft.title
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 2936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9081);
/* harmony import */ var _ui_TokenSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4200);
/* harmony import */ var _ui_UserButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_TokenSelect__WEBPACK_IMPORTED_MODULE_5__, _ui_UserButton__WEBPACK_IMPORTED_MODULE_6__]);
([_ui_TokenSelect__WEBPACK_IMPORTED_MODULE_5__, _ui_UserButton__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/components/sections/Header.tsx







function Header() {
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentPool)();
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentToken)();
    const balance = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useTokenBalance)();
    const { 0: bonusHelp , 1: setBonusHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: jackpotHelp , 1: setJackpotHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-between w-full p-2.5 bg-gradient-to-br from-blue-800 to-purple-800 fixed top-0 left-0 z-50 rounded-b-2xl shadow-lg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute top-0 left-0 right-0 backdrop-blur w-full h-full rounded-b-2xl -z-20"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex gap-5 items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-9 m-0 cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: "Gamba logo",
                                src: "/logo.svg",
                                className: "h-full"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-sm:text-xs max-sm:gap-1 flex gap-2.5 items-center relative",
                    children: [
                        bonusHelp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                            onClose: ()=>setBonusHelp(false),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "You have a bonus!"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "You have",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                amount: balance.bonusBalance
                                            })
                                        }),
                                        " ",
                                        "worth of free plays. This bonus will be applied automatically when you play."
                                    ]
                                })
                            ]
                        }),
                        jackpotHelp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                            onClose: ()=>setJackpotHelp(false),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-lg font-semibold text-center",
                                    children: [
                                        token.name,
                                        " Jackpot Details"
                                    ]
                                }),
                                pool.jackpotBalance > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 uppercase font-bold",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                        amount: pool.jackpotBalance
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "The Jackpot grows with each game played, funded by fees from unsuccessful attempts to win it. Winning the jackpot not only grants substantial rewards but also recycles a tiny portion of the winnings back into the main liquidity pool, sustaining the games economy."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "Pool Fee:"
                                                        }),
                                                        " ",
                                                        pool.poolFee,
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "Liquidity:"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                            amount: Number(pool.liquidity)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "Minimum Wager:"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                            amount: pool.minWager
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "Maximum Payout:"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                            amount: pool.maxPayout
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                                                main: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: `https://explorer.gamba.so/pool/${pool.publicKey.toString()}`,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "View Pool on Explorer"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        pool.jackpotBalance > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setJackpotHelp(true),
                            className: "hidden md:flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                amount: pool.jackpotBalance
                            })
                        }),
                        balance.bonusBalance > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>setBonusHelp(true),
                            className: "hidden md:flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white",
                            children: [
                                "+",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                    amount: balance.bonusBalance
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TokenSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_UserButton__WEBPACK_IMPORTED_MODULE_6__/* .UserButton */ .l, {})
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TokenSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6380);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9081);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2660);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7270);
/* harmony import */ var _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__, sonner__WEBPACK_IMPORTED_MODULE_6__, _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_7__]);
([_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__, sonner__WEBPACK_IMPORTED_MODULE_6__, _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// components/ui/TokenSelect.tsx








function TokenSelect() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaPlatformContext);
    const { 0: modalVisible , 1: setModalVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: bonusHelp , 1: setBonusHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: jackpotHelp , 1: setJackpotHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const selectedToken = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentToken)();
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentToken)();
    const pool = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useCurrentPool)();
    const balance = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useTokenBalance)();
    const tokensArray = Object.values(_constants__WEBPACK_IMPORTED_MODULE_5__/* .TOKENLIST */ .EX);
    const { isPriorityFeeEnabled , priorityFee , set  } = (0,_hooks_useUserStore__WEBPACK_IMPORTED_MODULE_7__/* .useUserStore */ .L)((state)=>({
            isPriorityFeeEnabled: state.isPriorityFeeEnabled,
            priorityFee: state.priorityFee,
            set: state.set
        }));
    const { 0: newPriorityFee , 1: setNewPriorityFee  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(priorityFee);
    const handleSetPriorityFee = ()=>{
        try {
            set({
                priorityFee: newPriorityFee
            });
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success(`Priority fee set to ${newPriorityFee}`);
        } catch (error) {
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error("Error setting priority fee");
            console.error("Error setting priority fee:", error);
        }
    };
    const setToken = (token)=>{
        try {
            if (token && token.poolAuthority) {
                context.setPool(token.mint, token.poolAuthority);
            } else {
                context.setPool(token.mint);
            }
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success(`Token set to ${token.name}`);
            setModalVisible(false);
        } catch (error) {
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error("Error setting token");
            console.error("Error setting token:", error);
        }
    };
    const toggleModal = ()=>{
        setModalVisible(!modalVisible);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                onClick: toggleModal,
                children: selectedToken && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "min-w-32 max-sm:text-xs whitespace-nowrap flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "w-5 h-5 rounded-full",
                            src: selectedToken.image,
                            alt: "Token"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                            amount: balance.balance
                        })
                    ]
                })
            }),
            modalVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                onClose: ()=>setModalVisible(false),
                children: [
                    bonusHelp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                        onClose: ()=>setBonusHelp(false),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-lg md:text-3xl",
                                children: "You have a bonus!"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-sm md:text-lg mt-4",
                                children: [
                                    "You have",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: "all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                            amount: balance.bonusBalance
                                        })
                                    }),
                                    " ",
                                    "worth of free plays. This bonus will be applied automatically when you play."
                                ]
                            })
                        ]
                    }),
                    jackpotHelp && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                        onClose: ()=>setJackpotHelp(false),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-lg font-semibold text-center",
                                children: [
                                    token.name,
                                    " Jackpot Details"
                                ]
                            }),
                            pool.jackpotBalance > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 uppercase font-bold",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                    amount: pool.jackpotBalance
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-sm md:text-base mt-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-4",
                                        children: "The Jackpot grows with each game played, funded by fees from unsuccessful attempts to win it. Winning the jackpot not only grants substantial rewards but also recycles a tiny portion of the winnings back into the main liquidity pool, sustaining the game’s economy."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: "Pool Fee:"
                                                    }),
                                                    " ",
                                                    pool.poolFee,
                                                    "%"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: "Liquidity:"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                        amount: Number(pool.liquidity)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: "Minimum Wager:"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                        amount: pool.minWager
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: "Maximum Payout:"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                                        amount: pool.maxPayout
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Button, {
                                            main: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: `https://explorer.gamba.so/pool/${pool.publicKey.toString()}`,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "View Pool on Explorer"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    pool.jackpotBalance > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>setJackpotHelp(true),
                        className: "md:hidden flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white",
                        children: [
                            "Jackpot - ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                amount: pool.jackpotBalance
                            })
                        ]
                    }),
                    balance.bonusBalance > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>setBonusHelp(true),
                        className: "md:hidden flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white",
                        children: [
                            "+",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.TokenValue, {
                                amount: balance.bonusBalance
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-w-64",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-lg md:text-2xl font-bold",
                                children: "Select Token"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "min-w-full flex flex-col gap-2",
                                children: tokensArray.map((token, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "hover:outline hover:outline-1 flex items-center gap-2.5 px-2.5 py-2 rounded-lg w-full text-left",
                                        onClick: ()=>setToken(token),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "w-8 h-8 rounded-full",
                                                src: token.image,
                                                alt: token.symbol
                                            }),
                                            token.symbol
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-2 mt-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-lg md:text-2xl font-bold",
                                        children: "Priority Fee"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Switch, {
                                            checked: isPriorityFeeEnabled,
                                            onChange: (checked)=>{
                                                set({
                                                    isPriorityFeeEnabled: checked
                                                });
                                                if (checked) {
                                                    sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success("Priority fee enabled");
                                                } else {
                                                    sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error("Priority fee disabled");
                                                }
                                            }
                                        })
                                    })
                                ]
                            }),
                            isPriorityFeeEnabled && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Priority Fee (Microlamports):"
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
                                                type: "number",
                                                value: newPriorityFee,
                                                onChange: (value)=>{
                                                    const parsedValue = parseInt(value, 10);
                                                    if (!isNaN(parsedValue)) {
                                                        setNewPriorityFee(parsedValue);
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GambaPlayButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                text: "Set",
                                                onClick: handleSetPriorityFee
                                            })
                                        ]
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

/***/ 2024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ UserButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GambaPlayButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6380);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9081);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1247);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GambaPlayButton__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_7__]);
([_GambaPlayButton__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/components/sections/UserButton.tsx








function UserButton() {
    const walletModal = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_7__.useWalletModal)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();
    const address = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__.useWalletAddress)();
    const { 0: modal , 1: setModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const truncateString = (s, startLen = 4, endLen = startLen)=>s.slice(0, startLen) + "..." + s.slice(-endLen);
    const connect = ()=>{
        if (wallet.wallet) {
            wallet.connect();
        } else {
            walletModal.setVisible(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            modal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u, {
                onClose: ()=>setModal(false),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "min-w-64",
                        children: truncateString(address.toBase58(), 8, 8)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GambaPlayButton__WEBPACK_IMPORTED_MODULE_2__/* .GambaButton */ .B, {
                        onClick: ()=>(wallet.disconnect(), setModal(false)),
                        text: "Disconnect"
                    })
                ]
            }),
            wallet.connected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3__.GambaUi.Button, {
                    onClick: ()=>setModal(true),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: wallet.wallet?.adapter.icon,
                                width: 20
                            }),
                            truncateString(address.toBase58(), 3)
                        ]
                    })
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_3__.GambaUi.Button, {
                onClick: connect,
                children: wallet.connecting ? "Connecting" : "Connect"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useDisclaimer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9081);
/* harmony import */ var _useUserStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useUserStore__WEBPACK_IMPORTED_MODULE_4__]);
_useUserStore__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// hooks/useDisclaimer.tsx





function useDisclaimer() {
    const { 0: showDisclaimer , 1: setShowDisclaimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { agreedToTerms , set  } = (0,_useUserStore__WEBPACK_IMPORTED_MODULE_4__/* .useUserStore */ .L)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!agreedToTerms) {
            setShowDisclaimer(true);
        } else {
            setShowDisclaimer(false);
        }
    }, [
        agreedToTerms
    ]);
    const handleDisclaimerClose = ()=>{
        set((state)=>({
                ...state,
                agreedToTerms: true
            }));
        setShowDisclaimer(false);
    };
    const DisclaimerModal = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u, {
            onClose: handleDisclaimerClose,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal items-start text-left p-4 overflow-y-auto max-h-[60vh]",
                    style: {
                        maxHeight: "400px"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                        className: "list-decimal list-inside space-y-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "1. Age Requirement:"
                                    }),
                                    " Must be at least 18 years old."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "2. Legal Compliance:"
                                    }),
                                    " Follow local laws responsibly."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "3. Risk Acknowledgement:"
                                    }),
                                    " Games involve risk; no guaranteed winnings."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "4. No Warranty:"
                                    }),
                                    ' Games provided "as is"; operate randomly.'
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "5. Limitation of Liability:"
                                    }),
                                    " ",
                                    "We're not liable for damages."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "6. Licensing Disclaimer:"
                                    }),
                                    " Not a licensed casino; for simulation only."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "7. Fair Play:"
                                    }),
                                    " Games are conducted fairly and transparently."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "8. Data Privacy:"
                                    }),
                                    " Your privacy is important to us."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "text-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "9. Responsible Gaming:"
                                    }),
                                    " Play responsibly; seek help if needed."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-lg py-6",
                    children: "By playing on our platform, you confirm your compliance."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Button, {
                    main: true,
                    onClick: handleDisclaimerClose,
                    children: "Acknowledge"
                })
            ]
        });
    };
    return {
        showDisclaimer,
        DisclaimerModal
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4442);
/* harmony import */ var gamba_core_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_RecentPlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1727);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sonner__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__]);
([sonner__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/hooks/useGameEvent.ts








function RecentPlay({ event  }) {
    const data = event.data;
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useTokenMeta)(data.tokenMint);
    const multiplier = data.bet[data.resultIndex.toNumber()] / gamba_core_v2__WEBPACK_IMPORTED_MODULE_1__.BPS_PER_WHOLE;
    const wager = data.wager.toNumber();
    const payout = multiplier * wager;
    const profit = payout + data.jackpotPayoutToUser.toNumber() - wager;
    const { game  } = (0,_utils_RecentPlay__WEBPACK_IMPORTED_MODULE_4__/* .extractMetadata */ .m)(event);
    if (!game || !token) {
        return null;
    }
    const textColorClass = profit >= 0 ? "text-green-600" : "text-red-600";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `/games/${game.id}/logo.png`,
                alt: "Splash",
                className: "h-10"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: textColorClass,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/logo.svg",
                        alt: "gamba",
                        className: "absolute top-2 right-2 w-24 h-6 rounded-full"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "font-bold text-lg",
                        children: [
                            data.user.toBase58().substring(0, 4),
                            "...",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm",
                                children: profit >= 0 ? "WON" : "LOST"
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                amount: Math.abs(profit),
                                mint: data.tokenMint
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "whitespace-nowrap flex items-center gap-2 mt-2",
                        children: [
                            token.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: token.image,
                                alt: `${token.name}`,
                                className: "w-6 h-6 rounded-full"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block w-6 h-6 border border-white rounded-full items-center justify-center text-xs font-medium text-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-4 h-4 rounded-full border border-white flex items-center justify-center",
                                    children: token.symbol
                                })
                            }),
                            profit >= 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: `text-sm font-semibold text-green-600`,
                                        children: [
                                            "+",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                                amount: data.payout.toNumber(),
                                                mint: data.tokenMint
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-xs font-medium text-gray-500",
                                        children: [
                                            "(",
                                            multiplier.toFixed(2),
                                            "x)"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    data.jackpotPayoutToUser.toNumber() > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-2 animate-jackpotGradient flex items-center gap-2 text-black rounded-lg p-1",
                        children: [
                            "+",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.TokenValue, {
                                mint: data.tokenMint,
                                amount: data.jackpotPayoutToUser.toNumber()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 absolute bottom-2 right-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: `https://explorer.gamba.so/tx/${event.signature}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "bg-[#8851ff] hover:bg-[#9564ff] text-xs rounded-lg p-1",
                                    children: "Verify"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/play/${game.id}`,
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "bg-[#8851ff] hover:bg-[#9564ff] text-xs rounded-lg p-1",
                                    children: "Play"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const GameToast = ()=>{
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();
    (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__.useGambaEventListener)("GameSettled", (event)=>{
        const { game  } = (0,_utils_RecentPlay__WEBPACK_IMPORTED_MODULE_4__/* .extractMetadata */ .m)(event);
        // - Filter events by a specific creator
        // - To enable filtering by a specific creator, uncomment the following lines and
        // - this will auto filter your events from your platform only.
        // const allowedCreator = PLATFORM_CREATOR_ADDRESS;
        // const eventCreatorPublicKeyString = event.data.creator.toBase58();
        // - Swap the line below to add the filter
        // if (game && (allowedCreator.includes(eventCreatorPublicKeyString)) ) {
        if (game) {
            const connectedUserPublicKeyString = publicKey?.toString();
            const eventUserPublicKeyString = event.data.user.toBase58();
            if (!publicKey || eventUserPublicKeyString !== connectedUserPublicKeyString) {
                const isGameWon = event.data.payout.toNumber() > 0;
                const toastType = isGameWon ? sonner__WEBPACK_IMPORTED_MODULE_5__.toast.success : sonner__WEBPACK_IMPORTED_MODULE_5__.toast.error;
                toastType(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RecentPlay, {
                    event: event
                }), {
                    duration: 5000,
                    position: "bottom-right"
                });
            }
        }
    });
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameToast);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2121);
/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2660);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1247);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7963);
/* harmony import */ var _hooks_useGameEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8870);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2936);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7270);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3364);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8847);
/* harmony import */ var _hooks_useDisclaimer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1658);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(257);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _hooks_useGameEvent__WEBPACK_IMPORTED_MODULE_6__, _components_layout_Header__WEBPACK_IMPORTED_MODULE_7__, sonner__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__, _hooks_useDisclaimer__WEBPACK_IMPORTED_MODULE_11__, _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_13__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _hooks_useGameEvent__WEBPACK_IMPORTED_MODULE_6__, _components_layout_Header__WEBPACK_IMPORTED_MODULE_7__, sonner__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_9__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__, _hooks_useDisclaimer__WEBPACK_IMPORTED_MODULE_11__, _hooks_useUserStore__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/pages/_app.tsx


















// Dynamic imports
// import dynamic from "next/dynamic";
// const GambaPlatformProvider = dynamic(
//   () => import("gamba-react-ui-v2").then((mod) => mod.GambaPlatformProvider),
//   { ssr: false }
// );
// const TokenMetaProvider = dynamic(
//   () => import("gamba-react-ui-v2").then((mod) => mod.TokenMetaProvider),
//   { ssr: false }
// );
// const GambaProvider = dynamic(
//   () => import("gamba-react-v2").then((mod) => mod.GambaProvider),
//   { ssr: false }
// );
// const SendTransactionProvider = dynamic(
//   () => import("gamba-react-v2").then((mod) => mod.SendTransactionProvider),
//   { ssr: false }
// );
function MyApp({ Component , pageProps  }) {
    const { showDisclaimer , DisclaimerModal  } = (0,_hooks_useDisclaimer__WEBPACK_IMPORTED_MODULE_11__/* .useDisclaimer */ .x)();
    const { isPriorityFeeEnabled , priorityFee , set  } = (0,_hooks_useUserStore__WEBPACK_IMPORTED_MODULE_13__/* .useUserStore */ .L)((state)=>({
            isPriorityFeeEnabled: state.isPriorityFeeEnabled,
            priorityFee: state.priorityFee,
            set: state.set
        }));
    const sendTransactionConfig = isPriorityFeeEnabled ? {
        priorityFee
    } : {};
    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_9__.WalletAdapterNetwork.Mainnet;
    const RPC_ENDPOINT = "0039655d-7d65-4694-8d2b-e223443dee82" ?? 0;
    if (false) {}
    const PLATFORM_CREATOR_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_14__.PublicKey("GpP898ZuTt4fMAN1RbimhUuF8rWoY962oPo7s1nc856Y");
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_12__.useMemo)(()=>[], []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.ConnectionProvider, {
        endpoint: RPC_ENDPOINT,
        config: {
            commitment: "processed"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.WalletProvider, {
            autoConnect: true,
            wallets: wallets,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_10__.WalletModalProvider, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_15__.TokenMetaProvider, {
                    tokens: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TOKENLIST */ .EX,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_v2__WEBPACK_IMPORTED_MODULE_16__.SendTransactionProvider, {
                        ...sendTransactionConfig,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_v2__WEBPACK_IMPORTED_MODULE_16__.GambaProvider, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_15__.GambaPlatformProvider, {
                                creator: PLATFORM_CREATOR_ADDRESS,
                                defaultCreatorFee: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PLATFORM_CREATOR_FEE */ .Jr,
                                defaultJackpotFee: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PLATFORM_JACKPOT_FEE */ .cg,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__.DefaultSeo, {
                                        ..._constants__WEBPACK_IMPORTED_MODULE_2__/* .BASE_SEO_CONFIG */ .sK
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sonner__WEBPACK_IMPORTED_MODULE_8__.Toaster, {
                                        position: "bottom-right",
                                        richColors: true,
                                        toastOptions: {
                                            style: {
                                                backgroundImage: "linear-gradient(to bottom right, #1e3a8a, #6b21a8)"
                                            }
                                        }
                                    }),
                                    _constants__WEBPACK_IMPORTED_MODULE_2__/* .LIVE_EVENT_TOAST */ .fT && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_useGameEvent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                    showDisclaimer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DisclaimerModal, {})
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2121:
/***/ (() => {



/***/ }),

/***/ 4165:
/***/ ((module) => {

"use strict";
module.exports = require("@react-three/drei");

/***/ }),

/***/ 3784:
/***/ ((module) => {

"use strict";
module.exports = require("@react-three/fiber");

/***/ }),

/***/ 7831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 4442:
/***/ ((module) => {

"use strict";
module.exports = require("gamba-core-v2");

/***/ }),

/***/ 5923:
/***/ ((module) => {

"use strict";
module.exports = require("gamba-react-ui-v2");

/***/ }),

/***/ 6545:
/***/ ((module) => {

"use strict";
module.exports = require("gamba-react-v2");

/***/ }),

/***/ 8438:
/***/ ((module) => {

"use strict";
module.exports = require("matter-js");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 5459:
/***/ ((module) => {

"use strict";
module.exports = import("@preact/signals-react");;

/***/ }),

/***/ 3364:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 1247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7270:
/***/ ((module) => {

"use strict";
module.exports = import("sonner");;

/***/ }),

/***/ 2949:
/***/ ((module) => {

"use strict";
module.exports = import("three");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

"use strict";
module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,152,380,697,347,727], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();