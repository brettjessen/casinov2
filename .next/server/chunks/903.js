"use strict";
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 5636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dx": () => (/* binding */ barrierHeight),
/* harmony export */   "Kf": () => (/* binding */ barrierWidth),
/* harmony export */   "Tl": () => (/* binding */ PEG_RADIUS),
/* harmony export */   "Ze": () => (/* binding */ Plinko),
/* harmony export */   "mI": () => (/* binding */ PLINKO_RAIUS),
/* harmony export */   "ob": () => (/* binding */ bucketHeight)
/* harmony export */ });
/* unused harmony export bucketWallHeight */
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8438);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
// src/games/Plinko/game.ts

const WIDTH = 700;
const HEIGHT = 700;
// How many plinkos to simulate to find desired result. More is slower but more likely to yield desired result
const SIMULATIONS = 100;
// Size of the plinko
const PLINKO_RAIUS = 9;
const PEG_RADIUS = 11;
const RESTISTUTION = 0.4;
const GRAVITY = 1;
// How far from the center plinkos can spawn
const SPAWN_OFFSET_RANGE = 10;
const bucketWallHeight = 60;
const bucketHeight = bucketWallHeight;
const barrierHeight = bucketWallHeight * 1.2;
const barrierWidth = 4;
class Plinko {
    width = WIDTH;
    height = HEIGHT;
    engine = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine.create({
        gravity: {
            y: GRAVITY
        },
        timing: {
            timeScale: 1
        }
    });
    runner = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.create();
    ballComposite = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.create();
    bucketComposite = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.create();
    makeBuckets() {
        const unique = Array.from(new Set(this.props.multipliers));
        const secondHalf = [
            ...unique
        ].slice(1);
        const firstHalf = [
            ...secondHalf
        ].reverse();
        const center = [
            unique[0],
            unique[0],
            unique[0]
        ];
        const buckets = [
            ...firstHalf,
            ...center,
            ...secondHalf
        ];
        const numBuckets = buckets.length;
        const bucketWidth = this.width / numBuckets;
        const barriers = Array.from({
            length: numBuckets + 1
        }).map((_, i)=>{
            const x = i * bucketWidth;
            return matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(x, this.height - barrierHeight / 2, barrierWidth, barrierHeight, {
                isStatic: true,
                label: "Barrier",
                chamfer: {
                    radius: 2
                }
            });
        });
        const sensors = buckets.map((bucketMultiplier, bucketIndex)=>{
            const x = bucketIndex * bucketWidth + bucketWidth / 2;
            return matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.rectangle(x, this.height - bucketHeight / 2, bucketWidth - barrierWidth, bucketHeight, {
                isStatic: true,
                isSensor: true,
                label: "Bucket",
                plugin: {
                    bucketIndex,
                    bucketMultiplier
                }
            });
        });
        return [
            ...sensors,
            ...barriers
        ];
    }
    makePlinko = (offsetX, index)=>{
        const x = this.width / 2 + offsetX;
        const y = -10;
        return matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.circle(x, y, PLINKO_RAIUS, {
            restitution: RESTISTUTION,
            collisionFilter: {
                group: -6969
            },
            label: "Plinko",
            plugin: {
                startPositionIndex: index
            }
        });
    };
    single() {
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.off(this.engine, "collisionStart", this.collisionHandler);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.stop(this.runner);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.on(this.engine, "collisionStart", this.collisionHandler);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.ballComposite, this.makePlinko(matter_js__WEBPACK_IMPORTED_MODULE_0___default().Common.random(-SPAWN_OFFSET_RANGE, SPAWN_OFFSET_RANGE), 0));
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.run(this.runner, this.engine);
    }
    cleanup() {
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().World.clear(this.engine.world, false);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine.clear(this.engine);
    }
    makePlinkos() {
        return this.startPositions.map(this.makePlinko);
    }
    getBodies() {
        return matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.allBodies(this.engine.world);
    }
    constructor(props){
        this.props = props;
        this.startPositions = Array.from({
            length: SIMULATIONS
        }).map((_, i)=>matter_js__WEBPACK_IMPORTED_MODULE_0___default().Common.random(-SPAWN_OFFSET_RANGE / 2, SPAWN_OFFSET_RANGE / 2));
        const rowSize = this.height / (this.props.rows + 2);
        const pegs = Array.from({
            length: this.props.rows
        }).flatMap((_, row, jarr)=>{
            const cols = 1 + row;
            const rowWidth = this.width * (row / (jarr.length - 1));
            const colSpacing = cols === 1 ? 0 : rowWidth / (cols - 1);
            return Array.from({
                length: cols
            }).map((_, column, arr)=>{
                const x = this.width / 2 - rowWidth / 2 + colSpacing * column;
                const y = rowSize * row + rowSize / 2;
                return matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies.circle(x, y, PEG_RADIUS, {
                    isStatic: true,
                    label: "Peg",
                    plugin: {
                        pegIndex: row * arr.length + column
                    }
                });
            });
        }).slice(1);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.bucketComposite, this.makeBuckets());
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.engine.world, [
            ...pegs,
            this.ballComposite,
            this.bucketComposite, 
        ]);
    }
    reset() {
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.stop(this.runner);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.clear(this.ballComposite, false);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.ballComposite, this.makePlinkos());
    }
    simulate(desiredBucketIndex) {
        const results = this.startPositions.map((_, i)=>-1);
        const handleCollision = (plinko, bucket)=>{
            results[plinko.plugin.startPositionIndex] = bucket.plugin.bucketIndex;
        };
        const handler = (event)=>{
            event.pairs.forEach((pair)=>{
                if (pair.bodyA.label === "Bucket" && pair.bodyB.label === "Plinko") {
                    handleCollision(pair.bodyB, pair.bodyA);
                }
                if (pair.bodyA.label === "Plinko" && pair.bodyB.label === "Bucket") {
                    handleCollision(pair.bodyA, pair.bodyB);
                }
            });
        };
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.on(this.engine, "collisionStart", handler);
        // 1. Simulate
        this.reset();
        for(let i = 0; i < 1000; i++){
            matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.tick(this.runner, this.engine, 1);
        }
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.off(this.engine, "collisionStart", handler);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.stop(this.runner);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.clear(this.ballComposite, false);
        const desiredResults = results.map((bucketIndex, plinkoIndex)=>({
                bucketIndex,
                plinkoIndex
            })).filter(({ bucketIndex  })=>bucketIndex === desiredBucketIndex);
        return desiredResults;
    }
    collisionHandler = (event)=>{
        const contactEvent = {};
        for (const pair of event.pairs){
            const assignBody = (key, label)=>{
                if (pair.bodyA.label === label) contactEvent[key] = pair.bodyA;
                if (pair.bodyB.label === label) contactEvent[key] = pair.bodyB;
            };
            assignBody("peg", "Peg");
            assignBody("bucket", "Bucket");
            assignBody("barrier", "Barrier");
            assignBody("plinko", "Plinko");
        }
        this.props.onContact && this.props.onContact(contactEvent);
    };
    runAll() {
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.off(this.engine, "collisionStart", this.collisionHandler);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.stop(this.runner);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.clear(this.ballComposite, false);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.on(this.engine, "collisionStart", this.collisionHandler);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.ballComposite, this.makePlinkos());
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.run(this.runner, this.engine);
    }
    run(desiredMultiplier) {
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.off(this.engine, "collisionStart", this.collisionHandler);
        const bucket = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Common.choose(this.bucketComposite.bodies.filter((x)=>x.plugin.bucketMultiplier === desiredMultiplier));
        // 1. Simulate
        const candidates = this.simulate(bucket.plugin.bucketIndex);
        if (!candidates.length) throw new Error("Failed to simulate");
        console.log(candidates);
        const chosen = matter_js__WEBPACK_IMPORTED_MODULE_0___default().Common.choose(candidates);
        // 2. Run simulation with desired outcome
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Events.on(this.engine, "collisionStart", this.collisionHandler);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite.add(this.ballComposite, this.makePlinko(this.startPositions[chosen.plinkoIndex], chosen.plinkoIndex));
        matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner.run(this.runner, this.engine);
    }
}


/***/ }),

/***/ 3903:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plinko)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5923);
/* harmony import */ var gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5636);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6380);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7270);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6545);
/* harmony import */ var gamba_react_v2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__, sonner__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__, sonner__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/games/Plinko/index.tsx







function usePlinko(props, deps) {
    const { 0: plinko , 1: set  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const p = new _game__WEBPACK_IMPORTED_MODULE_2__/* .Plinko */ .Ze(props);
        set(p);
        return ()=>p.cleanup();
    }, deps);
    return plinko;
}
const BUMP = "/games/plinko/bump.mp3";
const WIN = "/games/plinko/win.mp3";
const FALL = "/games/plinko/fall.mp3";
const DEGEN_BET = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    10,
    10,
    10,
    15, 
];
const BET = [
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    1.5,
    1.5,
    1.5,
    1.5,
    1.5,
    1.5,
    1.5,
    1.5,
    1.5,
    1.5,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    6, 
];
function Plinko() {
    const game = gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.useGame();
    const gamba = (0,gamba_react_v2__WEBPACK_IMPORTED_MODULE_6__.useGamba)();
    const [wager, setWager] = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useWagerInput)();
    const { 0: debug , 1: setDebug  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: degen , 1: setDegen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const sounds = (0,gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.useSound)({
        bump: BUMP,
        win: WIN,
        fall: FALL
    });
    const pegAnimations = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({});
    const bucketAnimations = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({});
    const bet = degen ? DEGEN_BET : BET;
    const rows = degen ? 12 : 14;
    const multipliers = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>Array.from(new Set(bet)), [
        bet
    ]);
    const plinko = usePlinko({
        rows,
        multipliers,
        onContact (contact) {
            if (contact.peg && contact.plinko) {
                pegAnimations.current[contact.peg.plugin.pegIndex] = 1;
                sounds.play("bump", {
                    playbackRate: 1 + Math.random() * 0.05
                });
            }
            if (contact.barrier && contact.plinko) {
                sounds.play("bump", {
                    playbackRate: 0.5 + Math.random() * 0.05
                });
            }
            if (contact.bucket && contact.plinko) {
                bucketAnimations.current[contact.bucket.plugin.bucketIndex] = 1;
                sounds.play(contact.bucket.plugin.bucketMultiplier >= 1 ? "win" : "fall");
            }
        }
    }, [
        rows,
        multipliers
    ]);
    const play = async ()=>{
        try {
            plinko.reset();
            await game.play({
                wager,
                bet
            });
            const result = await gamba.result();
            plinko.run(result.multiplier);
        } catch (err) {
            sonner__WEBPACK_IMPORTED_MODULE_5__.toast.error(`An error occurred: ${err.message}`);
            plinko.reset();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "screen",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Canvas, {
                    render: ({ ctx , size  }, clock)=>{
                        if (!plinko) return;
                        const bodies = plinko.getBodies();
                        const xx = size.width / plinko.width;
                        const yy = size.height / plinko.height;
                        const s = Math.min(xx, yy);
                        ctx.clearRect(0, 0, size.width, size.height);
                        ctx.fillStyle = "#1A1B28";
                        ctx.fillRect(0, 0, size.width, size.height);
                        ctx.save();
                        ctx.translate(size.width / 2 - plinko.width / 2 * s, size.height / 2 - plinko.height / 2 * s);
                        ctx.scale(s, s);
                        if (debug) {
                            ctx.beginPath();
                            bodies.forEach(({ vertices  }, i)=>{
                                ctx.moveTo(vertices[0].x, vertices[0].y);
                                for(let j = 1; j < vertices.length; j += 1){
                                    ctx.lineTo(vertices[j].x, vertices[j].y);
                                }
                                ctx.lineTo(vertices[0].x, vertices[0].y);
                            });
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = "#fff";
                            ctx.stroke();
                        } else {
                            bodies.forEach((body, i)=>{
                                const { label , position  } = body;
                                if (label === "Peg") {
                                    ctx.save();
                                    ctx.translate(position.x, position.y);
                                    const animation = pegAnimations.current[body.plugin.pegIndex] ?? 0;
                                    if (pegAnimations.current[body.plugin.pegIndex]) {
                                        pegAnimations.current[body.plugin.pegIndex] *= 0.9;
                                    }
                                    ctx.scale(1 + animation * 0.4, 1 + animation * 0.4);
                                    const pegHue = (position.y + position.x + Date.now() * 0.05) % 360;
                                    ctx.fillStyle = "hsla(" + pegHue + ", 75%, 60%, " + (1 + animation * 2) * 0.2 + ")";
                                    ctx.beginPath();
                                    ctx.arc(0, 0, _game__WEBPACK_IMPORTED_MODULE_2__/* .PEG_RADIUS */ .Tl + 4, 0, Math.PI * 2);
                                    ctx.fill();
                                    const light = 75 + animation * 25;
                                    ctx.fillStyle = "hsla(" + pegHue + ", 85%, " + light + "%, 1)";
                                    ctx.beginPath();
                                    ctx.arc(0, 0, _game__WEBPACK_IMPORTED_MODULE_2__/* .PEG_RADIUS */ .Tl, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.restore();
                                }
                                if (label === "Plinko") {
                                    ctx.save();
                                    ctx.translate(position.x, position.y);
                                    ctx.fillStyle = "hsla(" + i * 420 % 360 + ", 75%, 90%, .2)";
                                    ctx.beginPath();
                                    ctx.arc(0, 0, _game__WEBPACK_IMPORTED_MODULE_2__/* .PLINKO_RAIUS */ .mI * 1.5, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.fillStyle = "hsla(" + i * 420 % 360 + ", 75%, 75%, 1)";
                                    ctx.beginPath();
                                    ctx.arc(0, 0, _game__WEBPACK_IMPORTED_MODULE_2__/* .PLINKO_RAIUS */ .mI, 0, Math.PI * 2);
                                    ctx.fill();
                                    ctx.restore();
                                }
                                if (label === "Bucket") {
                                    const animation1 = bucketAnimations.current[body.plugin.bucketIndex] ?? 0;
                                    if (bucketAnimations.current[body.plugin.bucketIndex]) {
                                        bucketAnimations.current[body.plugin.bucketIndex] *= 0.9;
                                    }
                                    ctx.save();
                                    ctx.translate(position.x, position.y);
                                    const bucketHue = 25 + multipliers.indexOf(body.plugin.bucketMultiplier) / multipliers.length * 125;
                                    const bucketAlpha = 0.05 + animation1;
                                    ctx.save();
                                    ctx.translate(0, _game__WEBPACK_IMPORTED_MODULE_2__/* .bucketHeight */ .ob / 2);
                                    ctx.scale(1, 1 + animation1 * 2);
                                    ctx.fillStyle = "hsla(" + bucketHue + ", 75%, 75%, " + bucketAlpha + ")";
                                    ctx.fillRect(-25, -_game__WEBPACK_IMPORTED_MODULE_2__/* .bucketHeight */ .ob, 50, _game__WEBPACK_IMPORTED_MODULE_2__/* .bucketHeight */ .ob);
                                    ctx.restore();
                                    ctx.font = "20px Arial";
                                    ctx.textAlign = "center";
                                    ctx.fillStyle = "hsla(" + bucketHue + ", 50%, 75%, 1)";
                                    ctx.lineWidth = 5;
                                    ctx.lineJoin = "miter";
                                    ctx.miterLimit = 2;
                                    const brightness = 75 + animation1 * 25;
                                    ctx.fillStyle = "hsla(" + bucketHue + ", 75%, " + brightness + "%, 1)";
                                    ctx.strokeText("x" + body.plugin.bucketMultiplier, 0, 0);
                                    ctx.stroke();
                                    ctx.fillText("x" + body.plugin.bucketMultiplier, 0, 0);
                                    ctx.fill();
                                    ctx.restore();
                                }
                                if (label === "Barrier") {
                                    ctx.save();
                                    ctx.translate(position.x, position.y);
                                    ctx.fillStyle = "#cccccc22";
                                    ctx.fillRect(-_game__WEBPACK_IMPORTED_MODULE_2__/* .barrierWidth */ .Kf / 2, -_game__WEBPACK_IMPORTED_MODULE_2__/* .barrierHeight */ .Dx / 2, _game__WEBPACK_IMPORTED_MODULE_2__/* .barrierWidth */ .Kf, _game__WEBPACK_IMPORTED_MODULE_2__/* .barrierHeight */ .Dx);
                                    ctx.restore();
                                }
                            });
                        }
                        ctx.restore();
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Portal, {
                target: "controls",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.WagerInput, {
                        value: wager,
                        onChange: setWager
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Degen:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(gamba_react_ui_v2__WEBPACK_IMPORTED_MODULE_1__.GambaUi.Switch, {
                        disabled: gamba.isPlaying,
                        checked: degen,
                        onChange: setDegen
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_GambaPlayButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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

/***/ })

};
;