"use strict";
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 9927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sN": () => (/* binding */ Coin)
/* harmony export */ });
/* unused harmony exports TEXTURE_HEADS, TEXTURE_TAILS */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__);




const MODEL_COIN = "/games/flip/Coin.glb";
const TEXTURE_HEADS = "/games/flip/heads.png";
const TEXTURE_TAILS = "/games/flip/tails.png";
function CoinModel({ headsMap , tailsMap  }) {
    const { nodes  } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF)(MODEL_COIN);
    const coinMesh = nodes.Coin.clone();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("primitive", {
                object: coinMesh
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
                "position-z": 0.3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                        args: [
                            1.3,
                            1.3
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshStandardMaterial", {
                        transparent: true,
                        map: headsMap
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("group", {
                "rotation-y": Math.PI,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
                    "position-z": 0.3,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                            args: [
                                1.3,
                                1.3
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshStandardMaterial", {
                            transparent: true,
                            map: tailsMap
                        })
                    ]
                })
            })
        ]
    });
}
function Coin({ flipping , result , scale =1 , rotation =[
    0,
    0,
    0
] , position =[
    0,
    0,
    0
] , onClick  }) {
    const group = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const target = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const [heads, tails] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useTexture)([
        TEXTURE_HEADS,
        TEXTURE_TAILS
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!flipping && group.current) {
            const fullTurns = Math.floor(group.current.rotation.y / (Math.PI * 2));
            target.current = (fullTurns + 1) * Math.PI * 2 + result * Math.PI;
        }
    }, [
        flipping,
        result
    ]);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)((state, dt)=>{
        if (group.current) {
            if (flipping) {
                group.current.rotation.y += 25 * dt;
            } else {
                const clamp = (value, min, max)=>Math.min(Math.max(value, min), max);
                group.current.rotation.y += clamp((target.current - group.current.rotation.y) * 10 * dt, 0, 1);
            }
            const currentScale = flipping ? 1.25 : 1;
            group.current.scale.y += (currentScale - group.current.scale.y) * 0.1;
            group.current.scale.setScalar(group.current.scale.y * scale);
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("group", {
        rotation: rotation,
        ref: group,
        position: position,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CoinModel, {
            headsMap: heads,
            tailsMap: tails
        })
    });
}
_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF.preload(MODEL_COIN);



/***/ }),

/***/ 9293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Effect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_1__]);
three__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/games/Flip/Effect.tsx





const tmp = new three__WEBPACK_IMPORTED_MODULE_1__.Object3D();
const TEXTURE_STAR = "/games/flip/star.png";
const STARS = 10;
const Effect = ({ color  })=>{
    const texture = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useTexture)(TEXTURE_STAR);
    const mesh = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const animation = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(()=>{
        for(let i = 0; i < STARS; i++){
            const angle = i / STARS * Math.PI * 2;
            const ssss = 0.5 + (1 + Math.cos(i)) * 2;
            tmp.rotation.z = i + Date.now() * 0.001;
            tmp.scale.setScalar(ssss * animation.current * 1 * (1 - animation.current));
            const len = 1 + 2 * animation.current;
            tmp.position.set(Math.cos(angle) * len, Math.sin(angle) * len, 0);
            tmp.updateMatrix();
            mesh.current.setMatrixAt(i, tmp.matrix);
        }
        mesh.current.instanceMatrix.needsUpdate = true;
        animation.current += (1 - animation.current) * 0.1;
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("instancedMesh", {
        ref: mesh,
        args: [
            undefined,
            undefined,
            STARS
        ],
        "position-z": -1,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                transparent: true,
                map: texture,
                color: color
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ BannerWithMessages),
/* harmony export */   "Q": () => (/* binding */ FlipBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_1__]);
three__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/games/Flip/FlipBanner.tsx




const FlashingText = ({ messages , interval =2500 , fontSize =0.4 , position =[
    0,
    0,
    0
] ,  })=>{
    const { 0: messageIndex , 1: setMessageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: flash , 1: setFlash  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const textInterval = setInterval(()=>{
            setMessageIndex((x)=>(x + 1) % messages.length);
        }, interval);
        const flashInterval = setInterval(()=>{
            setFlash((prev)=>!prev);
        }, 500);
        return ()=>{
            clearInterval(textInterval);
            clearInterval(flashInterval);
        };
    }, [
        messages,
        interval
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.Text, {
        position: position,
        fontSize: fontSize,
        color: flash ? "#ffec63" : "#ffec6311",
        anchorX: "center",
        anchorY: "middle",
        children: messages[messageIndex]
    });
};
const YellowBanner = ({ position  })=>{
    const roundedRect = createRoundedRectShape(4, 1, 0.2);
    const extrudeSettings = {
        depth: 0.1,
        bevelEnabled: false
    };
    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(roundedRect, extrudeSettings);
    const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
        color: "#ffec63",
        transparent: true,
        opacity: 0.2
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mesh", {
        position: position,
        geometry: geometry,
        material: material
    });
};
const createRoundedRectShape = (width, height, radius)=>{
    const shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
    const x = -width / 2;
    const y = -height / 2;
    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + radius);
    shape.lineTo(x + width, y + height - radius);
    shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    shape.lineTo(x + radius, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);
    return shape;
};
const createRoundedRectOutline = (width, height, radius)=>{
    const shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
    const x = -width / 2;
    const y = -height / 2;
    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + radius);
    shape.lineTo(x + width, y + height - radius);
    shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    shape.lineTo(x + radius, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);
    const points = shape.getPoints().map((point)=>new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(point.x, point.y, 0));
    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints(points);
    return geometry;
};
const FlipBanner = ({ position ,  })=>{
    const lineRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const geometry = createRoundedRectOutline(1.8, 0.8, 0.2);
        const material = new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({
            color: "#ffec63",
            linewidth: 2
        });
        const line = new three__WEBPACK_IMPORTED_MODULE_1__.Line(geometry, material);
        line.position.set(...position);
        if (lineRef.current) {
            lineRef.current.add(line);
        }
        return ()=>{
            if (lineRef.current) {
                lineRef.current.remove(line);
            }
        };
    }, [
        position
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("group", {
        ref: lineRef
    });
};
const BannerWithMessages = ({ messages  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("group", {
        position: [
            0,
            2,
            0
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(YellowBanner, {
                position: [
                    0,
                    0,
                    0
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FlashingText, {
                messages: messages,
                interval: 2500,
                fontSize: 0.4,
                position: [
                    0,
                    0,
                    0
                ]
            })
        ]
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FlipBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8224);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9927);
/* harmony import */ var _Effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9293);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6380);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FlipBanner__WEBPACK_IMPORTED_MODULE_1__, _Effect__WEBPACK_IMPORTED_MODULE_6__, _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_7__, sonner__WEBPACK_IMPORTED_MODULE_9__]);
([_FlipBanner__WEBPACK_IMPORTED_MODULE_1__, _Effect__WEBPACK_IMPORTED_MODULE_6__, _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_7__, sonner__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Flip/index.tsx











const SIDES = {
    heads: [
        2,
        0
    ],
    tails: [
        0,
        2
    ]
};
const SOUND_COIN = "/games/flip/coin.mp3";
const SOUND_WIN = "/games/flip/win.mp3";
const SOUND_LOSE = "/games/flip/lose.mp3";
function Flip() {
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.useGame();
    const token = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useCurrentToken)();
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_10__.useGamba)();
    const { 0: flipping , 1: setFlipping  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: win , 1: setWin  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);
    const { 0: resultIndex , 1: setResultIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: result , 1: setResult  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: side , 1: setSide  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("heads");
    const WAGER_OPTIONS = [
        1,
        5,
        10,
        50,
        100
    ];
    const { 0: wager , 1: setWager  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(WAGER_OPTIONS[0]);
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.useSound)({
        coin: SOUND_COIN,
        win: SOUND_WIN,
        lose: SOUND_LOSE
    });
    let messages = [
        "Flip to win!"
    ];
    if (flipping) {
        messages = [
            "Flipping!",
            "Good luck!"
        ];
    } else if (win === true) {
        messages = [
            "You win!",
            "Congrats!"
        ];
    } else if (win === false) {
        messages = [
            "You lose!"
        ];
    }
    const play = async ()=>{
        try {
            setWin(undefined);
            setFlipping(true);
            setResult([]);
            sounds.play("coin", {
                playbackRate: 0.5
            });
            await game.play({
                bet: SIDES[side],
                wager,
                metadata: [
                    side
                ]
            });
            sounds.play("coin");
            const result = await gamba.result();
            const win = result.payout > 0;
            setResultIndex(result.resultIndex);
            setResult(result);
            setWin(win ? true : false);
            if (win) {
                sounds.play("win");
            } else {
                sounds.play("lose");
            }
        } catch (err) {
            messages = [
                "Flip to win!"
            ];
            sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error(`An error occurred: ${err.message}`);
        } finally{
            setFlipping(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_2__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, {
                    linear: true,
                    flat: true,
                    orthographic: true,
                    camera: {
                        zoom: 80,
                        position: [
                            0,
                            0,
                            100
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                            fallback: null,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ambientLight", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FlipBanner__WEBPACK_IMPORTED_MODULE_1__/* .BannerWithMessages */ .$, {
                                    messages: messages
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Coin__WEBPACK_IMPORTED_MODULE_5__/* .Coin */ .sN, {
                                    result: resultIndex,
                                    flipping: flipping,
                                    scale: 1,
                                    rotation: [
                                        -0.6,
                                        0,
                                        0
                                    ]
                                }, "main-coin"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FlipBanner__WEBPACK_IMPORTED_MODULE_1__/* .FlipBanner */ .Q, {
                                    position: [
                                        0,
                                        -2.5,
                                        0
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Coin__WEBPACK_IMPORTED_MODULE_5__/* .Coin */ .sN, {
                                    result: side === "heads" ? 0 : 1,
                                    flipping: false,
                                    scale: 0.8,
                                    position: [
                                        -0.4,
                                        -2.5,
                                        0
                                    ],
                                    onClick: ()=>setSide(side === "heads" ? "tails" : "heads")
                                }, "side-coin"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.Text, {
                                    onClick: ()=>setSide(side === "heads" ? "tails" : "heads"),
                                    position: [
                                        0.4,
                                        -2.5,
                                        0
                                    ],
                                    fontSize: 0.25,
                                    children: side === "heads" ? "Heads" : "Tails"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Effect__WEBPACK_IMPORTED_MODULE_6__/* .Effect */ .Q, {
                            color: "white"
                        }),
                        flipping && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Effect__WEBPACK_IMPORTED_MODULE_6__/* .Effect */ .Q, {
                            color: "white"
                        }),
                        win && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Effect__WEBPACK_IMPORTED_MODULE_6__/* .Effect */ .Q, {
                            color: "#42ff78"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ambientLight", {
                            intensity: 3
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("directionalLight", {
                            "position-z": 1,
                            "position-y": 1,
                            castShadow: true,
                            color: "#CCCCCC"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hemisphereLight", {
                            intensity: 0.5,
                            position: [
                                0,
                                1,
                                0
                            ],
                            scale: [
                                1,
                                1,
                                1
                            ],
                            color: "#ffadad",
                            groundColor: "#6666fe"
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        onClick: play,
                        text: "Flip"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flip);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;