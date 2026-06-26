const narratives = {
  aiCapex: {
    title: "AI Capex",
    trigger: "Hyperscaler capex cut",
    impulse: 72,
    crowding: 68,
    catalysts: [
      { type: "earnings", impact: 82, text: "Cloud capex guide still implies accelerated GPU digestion." },
      { type: "macro", impact: 56, text: "Power constraints are pushing winners into infrastructure suppliers." },
      { type: "flow", impact: 71, text: "ETF flow is crowded in core semis, quieter in second-order names." },
    ],
    replay: [
      { label: "T-10", stage: "Early", impulse: 44, crowding: 28 },
      { label: "T-5", stage: "Expanding", impulse: 63, crowding: 46 },
      { label: "T+0", stage: "Expanding", impulse: 72, crowding: 68 },
      { label: "T+5", stage: "Crowded", impulse: 76, crowding: 82 },
    ],
    nodes: [
      { ticker: "NVDA", role: "Core winner", price: 126.4, heat: 92, lag: 0, side: "LONG", weight: 4.2 },
      { ticker: "AVGO", role: "Core winner", price: 179.8, heat: 82, lag: 8, side: "LONG", weight: 3.5 },
      { ticker: "VRT", role: "Power laggard", price: 94.2, heat: 58, lag: 31, side: "LONG", weight: 2.8 },
      { ticker: "DELL", role: "Server laggard", price: 118.7, heat: 51, lag: 38, side: "LONG", weight: 2.3 },
      { ticker: "SNOW", role: "Budget loser", price: 142.5, heat: 29, lag: -18, side: "SHORT", weight: -2.4 },
      { ticker: "MDB", role: "Budget loser", price: 243.4, heat: 34, lag: -10, side: "SHORT", weight: -1.9 },
    ],
  },
  glp1: {
    title: "GLP-1",
    trigger: "Drug pricing or adherence disappointment",
    impulse: 66,
    crowding: 74,
    catalysts: [
      { type: "policy", impact: 64, text: "Pricing scrutiny raises tail risk around the core winners." },
      { type: "channel", impact: 58, text: "Adherence data keeps the long-term story alive but less clean." },
      { type: "flow", impact: 79, text: "Defensive healthcare flows are already heavy in the leaders." },
    ],
    replay: [
      { label: "T-10", stage: "Early", impulse: 39, crowding: 34 },
      { label: "T-5", stage: "Expanding", impulse: 61, crowding: 58 },
      { label: "T+0", stage: "Crowded", impulse: 66, crowding: 74 },
      { label: "T+5", stage: "Crowded", impulse: 60, crowding: 86 },
    ],
    nodes: [
      { ticker: "LLY", role: "Core winner", price: 884.1, heat: 88, lag: 0, side: "LONG", weight: 4.0 },
      { ticker: "NVO", role: "Core winner", price: 132.6, heat: 84, lag: 5, side: "LONG", weight: 3.4 },
      { ticker: "DXCM", role: "Second-order health", price: 75.8, heat: 42, lag: 35, side: "LONG", weight: 1.8 },
      { ticker: "MCD", role: "Consumption hedge", price: 259.4, heat: 32, lag: -28, side: "SHORT", weight: -2.2 },
      { ticker: "KO", role: "Consumption hedge", price: 63.8, heat: 36, lag: -20, side: "SHORT", weight: -1.6 },
      { ticker: "PEP", role: "Consumption hedge", price: 168.2, heat: 35, lag: -21, side: "SHORT", weight: -1.7 },
    ],
  },
  rateCut: {
    title: "Rate Cut",
    trigger: "Hot CPI or hawkish Fed repricing",
    impulse: 59,
    crowding: 47,
    catalysts: [
      { type: "macro", impact: 74, text: "CPI and Fed language are the primary drivers of duration beta." },
      { type: "rates", impact: 62, text: "Two-year yield drift has not fully reached small-cap beta yet." },
      { type: "flow", impact: 41, text: "Positioning is cleaner than megacap growth narratives." },
    ],
    replay: [
      { label: "T-10", stage: "Fading", impulse: 36, crowding: 52 },
      { label: "T-5", stage: "Early", impulse: 48, crowding: 44 },
      { label: "T+0", stage: "Early", impulse: 59, crowding: 47 },
      { label: "T+5", stage: "Expanding", impulse: 71, crowding: 61 },
    ],
    nodes: [
      { ticker: "QQQ", role: "Duration winner", price: 463.2, heat: 69, lag: 0, side: "LONG", weight: 3.0 },
      { ticker: "TLT", role: "Duration winner", price: 92.4, heat: 62, lag: 15, side: "LONG", weight: 2.7 },
      { ticker: "IWM", role: "Laggard beta", price: 205.5, heat: 44, lag: 34, side: "LONG", weight: 2.0 },
      { ticker: "KRE", role: "Regional bank beta", price: 51.4, heat: 39, lag: 41, side: "LONG", weight: 1.6 },
      { ticker: "XLF", role: "Net-interest hedge", price: 41.6, heat: 36, lag: -18, side: "SHORT", weight: -1.7 },
      { ticker: "DXY", role: "Macro hedge", price: 104.1, heat: 31, lag: -22, side: "SHORT", weight: -1.4 },
    ],
  },
  defense: {
    title: "Defense Spending",
    trigger: "Budget delay or ceasefire headline",
    impulse: 61,
    crowding: 39,
    catalysts: [
      { type: "policy", impact: 68, text: "Budget language supports primes while smaller suppliers lag." },
      { type: "geopolitics", impact: 72, text: "Headline risk is high, but spend visibility remains sticky." },
      { type: "flow", impact: 38, text: "Crowding is modest, leaving room for relative-value expression." },
    ],
    replay: [
      { label: "T-10", stage: "Early", impulse: 42, crowding: 24 },
      { label: "T-5", stage: "Early", impulse: 52, crowding: 31 },
      { label: "T+0", stage: "Early", impulse: 61, crowding: 39 },
      { label: "T+5", stage: "Expanding", impulse: 69, crowding: 48 },
    ],
    nodes: [
      { ticker: "LMT", role: "Prime contractor", price: 468.2, heat: 66, lag: 4, side: "LONG", weight: 2.8 },
      { ticker: "NOC", role: "Prime contractor", price: 503.4, heat: 64, lag: 8, side: "LONG", weight: 2.6 },
      { ticker: "RTX", role: "Systems laggard", price: 104.3, heat: 49, lag: 30, side: "LONG", weight: 2.2 },
      { ticker: "HII", role: "Naval laggard", price: 256.7, heat: 41, lag: 42, side: "LONG", weight: 1.7 },
      { ticker: "ITA", role: "Crowding hedge", price: 132.1, heat: 52, lag: -6, side: "SHORT", weight: -1.2 },
      { ticker: "SPY", role: "Market hedge", price: 542.9, heat: 46, lag: -10, side: "SHORT", weight: -1.4 },
    ],
  },
};

const state = {
  narrative: "aiCapex",
  style: "balanced",
  lang: "en",
  scan: null,
  basket: [],
  position: null,
  pnl: 0,
  replayIndex: 2,
  selectedProduct: "NVDA",
  customSymbol: null,
  marketData: {},
  timeframe: "1h",
  candles: {},
  bitgetSymbols: null,
  tradeLog: [],
};

const $ = (id) => document.getElementById(id);
const PAPER_STARTING_BALANCE = 100000;

const productProfiles = {
  NVDA: { en: "Nvidia: AI chip leader powering data centers.", zh: "英伟达：AI 芯片龙头，主要受益于数据中心建设。" },
  AVGO: { en: "Broadcom: chip and networking supplier for AI infrastructure.", zh: "博通：芯片和网络设备供应商，受益于 AI 基建。" },
  VRT: { en: "Vertiv: power and cooling equipment for data centers.", zh: "Vertiv：数据中心电力和散热设备供应商。" },
  DELL: { en: "Dell: servers and hardware used in AI buildouts.", zh: "戴尔：提供服务器和硬件，参与 AI 基建建设。" },
  SNOW: { en: "Snowflake: cloud data software that can face budget pressure.", zh: "Snowflake：云数据软件公司，可能受到企业预算压力影响。" },
  MDB: { en: "MongoDB: database software company exposed to software spending.", zh: "MongoDB：数据库软件公司，和软件预算周期相关。" },
  LLY: { en: "Eli Lilly: obesity and diabetes drug leader.", zh: "礼来：减重和糖尿病药物龙头。" },
  NVO: { en: "Novo Nordisk: global GLP-1 drug leader.", zh: "诺和诺德：全球 GLP-1 药物龙头。" },
  DXCM: { en: "Dexcom: glucose monitoring device maker.", zh: "Dexcom：血糖监测设备公司。" },
  MCD: { en: "McDonald's: food demand can be used as a consumer hedge.", zh: "麦当劳：食品消费代表，可作为消费对冲观察。" },
  KO: { en: "Coca-Cola: beverage company used as a consumer hedge.", zh: "可口可乐：饮料公司，可作为消费对冲观察。" },
  PEP: { en: "PepsiCo: snacks and beverages, another consumer hedge.", zh: "百事：食品饮料公司，可作为消费对冲观察。" },
  QQQ: { en: "QQQ: Nasdaq 100 ETF, sensitive to growth and rates.", zh: "QQQ：纳指 100 ETF，对成长股和利率变化敏感。" },
  TLT: { en: "TLT: long-term Treasury ETF, sensitive to rate-cut expectations.", zh: "TLT：长期美债 ETF，对降息预期敏感。" },
  IWM: { en: "IWM: small-cap ETF, often reacts after the rate story improves.", zh: "IWM：小盘股 ETF，常在降息预期改善后补涨。" },
  KRE: { en: "KRE: regional bank ETF, tied to rate and credit conditions.", zh: "KRE：区域银行 ETF，和利率及信用环境相关。" },
  XLF: { en: "XLF: financial sector ETF, used here as a hedge.", zh: "XLF：金融板块 ETF，在这里作为对冲观察。" },
  DXY: { en: "DXY: US dollar index, used as a macro hedge.", zh: "DXY：美元指数，可作为宏观对冲观察。" },
  LMT: { en: "Lockheed Martin: major defense contractor.", zh: "洛克希德马丁：大型防务承包商。" },
  NOC: { en: "Northrop Grumman: major defense contractor.", zh: "诺斯罗普格鲁曼：大型防务承包商。" },
  RTX: { en: "RTX: aerospace and defense systems supplier.", zh: "RTX：航空航天和防务系统供应商。" },
  HII: { en: "HII: naval shipbuilder tied to defense spending.", zh: "HII：军舰制造商，和防务支出相关。" },
  ITA: { en: "ITA: aerospace and defense ETF.", zh: "ITA：航空航天与防务 ETF。" },
  SPY: { en: "SPY: S&P 500 ETF, broad market hedge.", zh: "SPY：标普 500 ETF，可作为大盘对冲。" },
};

const productAliases = {
  NVDA: ["nvidia", "英伟达", "辉达", "黄仁勋"],
  AVGO: ["broadcom", "博通"],
  VRT: ["vertiv", "维谛", "电力散热"],
  DELL: ["dell", "戴尔"],
  SNOW: ["snowflake", "雪花"],
  MDB: ["mongodb"],
  LLY: ["eli lilly", "lilly", "礼来"],
  NVO: ["novo nordisk", "novo", "诺和诺德"],
  DXCM: ["dexcom", "德康"],
  MCD: ["mcdonald", "mcdonalds", "麦当劳"],
  KO: ["coca cola", "coke", "可口可乐"],
  PEP: ["pepsico", "pepsi", "百事"],
  QQQ: ["nasdaq", "纳指", "纳斯达克"],
  TLT: ["treasury", "美债", "长期美债"],
  IWM: ["small cap", "小盘股"],
  KRE: ["regional bank", "区域银行"],
  XLF: ["financial", "金融"],
  DXY: ["dollar", "美元"],
  LMT: ["lockheed", "lockheed martin", "洛克希德"],
  NOC: ["northrop", "诺斯罗普"],
  RTX: ["raytheon", "航空防务"],
  HII: ["huntington", "造船", "军舰"],
  ITA: ["defense etf", "防务etf"],
  SPY: ["s&p 500", "sp500", "标普"],
};

const translations = {
  en: {
    brandSubtitle: "US stock AI trading assistant",
    narrative: "Market theme",
    theme: "Theme",
    agentStyle: "Agent style",
    balanced: "Balanced",
    contrarian: "Contrarian",
    momentum: "Momentum",
    grossExposure: "Paper size",
    scanNarrative: "Analyze",
    deployBasket: "Start paper trade",
    reset: "Reset",
    demoBoundary: "Demo boundary",
    demoBoundaryBody: "BTCUSDT/ETHUSDT can use live Bitget data. US-stock chain analysis is a demo unless Bitget lists that symbol.",
    heroEyebrow: "US Stock AI Trading",
    heroTitle: "Find overlooked opportunities in a stock chain.",
    heroSubtitle: "Search a stock, see its industry chain, check price action, and get a simple AI trading idea.",
    productSearch: "Product search",
    productPrompt: "Try NVDA, Nvidia, 英伟达, or BTCUSDT / ETHUSDT for real Bitget data.",
    liveData: "Market data",
    bitgetLive: "Bitget live",
    demoFallback: "Demo US-stock price",
    dataUnavailable: "Bitget does not list this US-stock symbol. This is not a live stock quote.",
    liveDataUnavailable: "This symbol is not available in Bitget public spot data.",
    dataChecking: "Checking Bitget...",
    liveTradable: "Bitget tradable",
    notListedOnBitget: "Not listed on Bitget",
    dataQuality: "Data status",
    advancedDetails: "Advanced details",
    advancedDetailsHint: "Agent notes, risks, replay and what-if checks",
    modeDemoTitle: "US-stock chain demo",
    modeDemoBody: "AI maps the stock, suppliers, related names, and overlooked catch-up ideas. US-stock price/K-line is demo when Bitget has no matching symbol.",
    modeLiveTitle: "Bitget live market mode",
    modeLiveBody: "This view uses Bitget public ticker and candle data for the selected spot symbol.",
    modeEmptyTitle: "Choose a market",
    modeEmptyBody: "Use NVDA for the US-stock chain demo, or BTCUSDT / ETHUSDT for live Bitget data.",
    flowSearch: "Search stock",
    flowChain: "Map chain",
    flowOpportunity: "Get AI setup",
    customSymbolDescription: "Real Bitget spot symbol. Theme map is not used for this asset.",
    realSymbolLoaded: "Real Bitget symbol loaded",
    priceChart: "Price chart",
    lastPrice: "Last price",
    chartChange: "Move",
    supportLevel: "Support",
    resistanceLevel: "Resistance",
    chartLoading: "Loading chart...",
    chartDemo: "Demo chart",
    chartLive: "Bitget candles",
    chartEmpty: "Search a product to load its price chart.",
    chartDemoComment: "Bitget has no matching public spot candles for this symbol. This is a demo US-stock path, not a live quote.",
    chartLiveComment: "Last price uses Bitget ticker; range, support and resistance use Bitget candles.",
    chartTradeHintLong: "Price is holding above short-term support. Watch for continuation before adding risk.",
    chartTradeHintShort: "Price is close to resistance. Wait for a breakout or use it as a hedge.",
    chartTradeHintNeutral: "Price is in the middle of the range. Wait for a cleaner level.",
    change24h: "24h change",
    updated: "Updated",
    stockBriefTitle: "Stock quick view",
    stockBriefEmpty: "Search a ticker to see what it is and why it belongs to this theme.",
    roleInTheme: "Role in theme",
    relatedStocks: "Related stocks",
    simpleTakeaway: "Simple takeaway",
    takeawayLong: "If this theme keeps working, this name is one to watch on the upside.",
    takeawayShort: "This name is used as a hedge if the theme cools down or spending shifts.",
    mapSummaryEmpty: "Search a ticker to explain where it sits in the industry chain.",
    mapSummaryCustom: "{ticker} is loaded as a real Bitget symbol. Use NVDA / LLY / QQQ to see the US-stock industry-chain demo.",
    mapSummary: "{ticker} is a {role} in {theme}. It connects to {upstream} on one side and {downstream} on the other.",
    upstream: "Upstream",
    downstream: "Downstream",
    supportedOnBitget: "Bitget market data",
    bitgetSymbol: "Symbol",
    matchedNarrative: "Related theme",
    stage: "Stage",
    pricedIn: "Heat level",
    basketPnl: "Paper PnL",
    agentDecision: "AI view",
    aiOpportunity: "AI opportunity",
    tradeTicket: "Trade setup",
    ticketAction: "Action",
    ticketTarget: "Target",
    ticketConfidence: "Confidence",
    ticketRisk: "Risk",
    ticketPrice: "Price signal",
    ticketTrigger: "Trigger",
    ticketStop: "Stop",
    ticketDistance: "To trigger",
    scoreBreakdown: "Why this score",
    scoreTheme: "Theme",
    scoreGap: "Gap",
    scorePrice: "Price",
    evidenceTitle: "Usage evidence",
    evidenceSubtitle: "Runnable demo proof",
    evidenceLiveData: "Live data",
    evidenceSimRecord: "Sim record",
    evidencePaperPnl: "Paper PnL",
    evidenceNoTrade: "No paper trade yet",
    evidenceNoTradeBody: "Click Start paper trade to generate a verifiable sim record.",
    evidenceDemoData: "US-stock demo path",
    evidenceBitgetData: "Bitget public ticker + candles",
    evidenceCandidate: "AI candidate",
    evidenceUpdated: "Updated",
    evidenceAccount: "Account",
    evidenceTradeLog: "Audit log",
    evidenceExport: "Download JSON",
    evidenceLogEmpty: "No audit records yet.",
    evidenceBalanceBefore: "Before",
    evidenceBalanceAfter: "After",
    evidenceBalanceChange: "Change",
    evidenceNotional: "Notional",
    evidenceQuantity: "Qty",
    actionWatchLong: "Watch long",
    actionWatchShort: "Watch weak side",
    actionWait: "Wait",
    upsideMode: "Upside setup",
    downsideMode: "Downside setup",
    ignoredName: "Overlooked name",
    opportunityRank: "Opportunity ranking",
    leaderLabel: "Leader",
    catchUpLabel: "Catch-up",
    hedgeLabel: "Weak side",
    chainLeaders: "Leaders",
    chainCatchUp: "Catch-up names",
    chainWeak: "Weak / hedge",
    setupReason: "Why it matters",
    simpleStrategy: "Simple strategy",
    invalidation: "Risk line",
    noOpportunityYet: "Search a US-stock demo ticker and scan the theme to find overlooked names.",
    opportunityReason: "{ticker} is still behind the leaders by {gap} pts while the theme remains active.",
    opportunityStrategy: "Watch {ticker}. If price holds support and the theme score stays above {score}, use a small paper long.",
    opportunityRisk: "Stop watching if {trigger} appears or if the stock fails to follow the leaders.",
    downsideReason: "{ticker} sits on the weak side. If the theme cools, it may move first or protect the trade.",
    downsideStrategy: "Use {ticker} as a hedge candidate. If leaders lose support and risk stays above {risk}, watch the downside.",
    downsideRisk: "Do not chase downside if the theme recovers or leaders reclaim support.",
    priceNearSupport: "Near support",
    priceNearResistance: "Near resistance",
    priceMidRange: "Mid range",
    priceSignalBody: "{ticker} chart: {signal}. Support {support}, resistance {resistance}.",
    customOpportunity: "This is a real Bitget market-data view. Use it to verify price and K-line plumbing; US-stock theme opportunity appears on NVDA / LLY / QQQ demos.",
    decisionLong: "Watch long",
    decisionShort: "Use as hedge",
    decisionNeutral: "Wait",
    confidence: "Confidence",
    decisionReasonLong: "Theme is still healthy and this name sits on the winner side.",
    decisionReasonShort: "This name is more useful as a hedge if the theme cools down.",
    decisionReasonNeutral: "Crowding is high, so the agent waits for a cleaner setup.",
    executionPlan: "Paper plan",
    executionPlanBody: "Analyze first, then run it as a paper trade.",
    narrativePropagation: "Industry chain",
    coreHeat: "Main names",
    laggardGap: "Catch-up room",
    crowding: "Crowding",
    breakTrigger: "Break trigger",
    relativeBasket: "AI strategy",
    standBy: "Stand by",
    waiting: "Waiting",
    arbitrageThesis: "Plain-English idea",
    thesisEmpty: "Click Analyze to get a simple trade idea.",
    narrativeAgents: "Agent team",
    specialistDebate: "Team view",
    livePaperBasket: "Paper trade",
    noActiveBasket: "No paper trade yet",
    pricedInMeter: "Heat check",
    earlyVsCrowded: "Still early?",
    breaksStory: "What can go wrong",
    invalidationMap: "Risk checklist",
    shockLab: "What-if lab",
    repriceStory: "Test the idea",
    coreMiss: "Core miss",
    macroDrag: "Macro drag",
    crowdingUnwind: "Crowding unwind",
    agentMemory: "Agent Memory",
    decisionTimeline: "Decision timeline",
    ready: "Ready",
    waitingScan: "Search a stock, then click Analyze.",
    unscanned: "Unscanned",
    crowdedRisk: "- crowded risk",
    narrativeImpulse: "+ theme strength",
    coreToHedge: "Leaders -> suppliers -> hedges",
    scanBasketEmpty: "Analyze the theme to build a sample trade.",
    stageCrowded: "Crowded",
    stageExpanding: "Expanding",
    stageFading: "Fading",
    stageEarly: "Early",
    long: "Long",
    short: "Short",
    trim: "Trim",
    add: "Add",
    laggards: "Laggards",
    balancedSide: "Balanced",
    narrativeCartographer: "Theme reader",
    crowdingDetective: "Crowding check",
    secondOrderScout: "Supplier scout",
    hedgeRouter: "Hedge planner",
    cartographerReason: "{title} is {stage} with impulse {impulse}/100.",
    crowdingReason: "Crowding reads {crowding}/100, so the basket {action}.",
    crowdingNeedsHedges: "needs hedges",
    crowdingHasRoom: "has room to spread",
    scoutReason: "Laggard gap is {gap} pts; second-order names may still reprice.",
    hedgeReason: "Pairs the story winners against crowded losers or market hedges.",
    narrativeImpulseLabel: "Theme strength",
    pricedInRisk: "Heat risk",
    laggardSpread: "Laggard spread",
    impulseBody: "{score}/100: how strong this theme looks.",
    pricedBody: "{score}/100: how crowded the theme looks.",
    laggardBody: "{gap} pts: room for second-order catch-up.",
    coreBreak: "Core break",
    coreBreakBody: "{trigger} would weaken this trade idea.",
    crowdingUnwindTitle: "Crowding unwind",
    crowdingUnwindBody: "If heat risk rises above {score}/100, reduce paper size.",
    laggardFailure: "Laggard failure",
    laggardFailureBody: "If related stocks fail to follow, keep only leaders or stop the paper trade.",
    planTitle: "{stage} setup",
    planThesis: "{title} is {stage}. AI looks for suppliers or smaller names that have not fully followed the leader yet.",
    scanComplete: "Analysis complete",
    scanCompleteBody: "{title} marked {stage}; paper trade generated with {crowding}/100 heat risk.",
    paperBasketDeployed: "Paper trade started",
    paperBasketDeployedBody: "{title} paper trade is now tracking simulated PnL.",
    noPositionBody: "Start a paper trade to watch simulated PnL by stock.",
    paperBasketLive: "Paper trade live",
    activePositive: "Active +",
    activeNegative: "Active -",
    flat: "Flat",
    verdict: "Verdict",
    repriceScore: "Reprice score",
    agentNote: "Agent note",
    pressWinners: "Press winners",
    closeBasket: "Stop paper trade",
    keepHedged: "Keep hedged",
    pressBody: "This theme still has room to spread.",
    closeBody: "Story break risk is too high.",
    keepBody: "Keep the paper trade small and balanced.",
    resetBody: "Paper trade cleared.",
    narrativeChanged: "Theme changed",
    narrativeChangedBody: "AI switched to {title}.",
    styleChanged: "Agent style changed",
    styleChangedBody: "Style switched to {style}.",
    catalystFeed: "News inputs",
    eventInputs: "What moved it",
    whyNow: "Why trade it",
    tradeBrief: "Trade brief",
    replayMode: "Replay Mode",
    narrativeLifecycle: "Theme timeline",
    inputsCount: "{count} inputs",
    conviction: "Conviction",
    readThrough: "What it means",
    action: "Action",
    riskControl: "Risk control",
    whyReadThrough: "{title} is in the {stage} stage, with laggards still {gap} pts behind the core.",
    whyActionLong: "Build a small paper trade: watch the beneficiaries and protect with weaker names.",
    whyActionHedged: "This theme is already hot, so keep the paper trade small.",
    whyRisk: "Recheck the idea if {trigger}; keep paper size at {gross}% until confirmation improves.",
    typeEarnings: "Earnings",
    typeMacro: "Macro",
    typeFlow: "Flow",
    typePolicy: "Policy",
    typeChannel: "Channel",
    typeRates: "Rates",
    typeGeopolitics: "Geopolitics",
    scanning: "Scanning",
    grossUnit: "gross",
    pointsUnit: "pts",
    toneGood: "Good",
    toneWatch: "Watch",
    toneBad: "Risk",
    triggerHyperscalerCapexCut: "Hyperscaler capex cut",
    triggerDrugPricingOrAdherenceDisappointment: "Drug pricing or adherence disappointment",
    triggerHotCpiOrHawkishFedRepricing: "Hot CPI or hawkish Fed repricing",
    triggerBudgetDelayOrCeasefireHeadline: "Budget delay or ceasefire headline",
    catalystCloudCapexGuideStillImpliesAcceleratedGpuDigestion: "Cloud capex guide still implies accelerated GPU digestion.",
    catalystPowerConstraintsArePushingWinnersIntoInfrastructureSuppliers: "Power constraints are pushing winners into infrastructure suppliers.",
    catalystEtfFlowIsCrowdedInCoreSemisQuieterInSecondOrderNames: "ETF flow is crowded in core semis, quieter in second-order names.",
    catalystPricingScrutinyRaisesTailRiskAroundTheCoreWinners: "Pricing scrutiny raises tail risk around the core winners.",
    catalystAdherenceDataKeepsTheLongTermStoryAliveButLessClean: "Adherence data keeps the long-term story alive but less clean.",
    catalystDefensiveHealthcareFlowsAreAlreadyHeavyInTheLeaders: "Defensive healthcare flows are already heavy in the leaders.",
    catalystCpiAndFedLanguageAreThePrimaryDriversOfDurationBeta: "CPI and Fed language are the primary drivers of duration beta.",
    catalystTwoYearYieldDriftHasNotFullyReachedSmallCapBetaYet: "Two-year yield drift has not fully reached small-cap beta yet.",
    catalystPositioningIsCleanerThanMegacapGrowthNarratives: "Positioning is cleaner than megacap growth narratives.",
    catalystBudgetLanguageSupportsPrimesWhileSmallerSuppliersLag: "Budget language supports primes while smaller suppliers lag.",
    catalystHeadlineRiskIsHighButSpendVisibilityRemainsSticky: "Headline risk is high, but spend visibility remains sticky.",
    catalystCrowdingIsModestLeavingRoomForRelativeValueExpression: "Crowding is modest, leaving room for relative-value expression.",
    roleCoreWinner: "Leader",
    rolePowerLaggard: "Power supplier",
    roleServerLaggard: "Server supplier",
    roleBudgetLoser: "Budget risk",
    roleSecondOrderHealth: "Health supplier",
    roleConsumptionHedge: "Food hedge",
    roleDurationWinner: "Rate winner",
    roleLaggardBeta: "Catch-up trade",
    roleRegionalBankBeta: "Bank beta",
    roleNetInterestHedge: "Bank hedge",
    roleMacroHedge: "Macro hedge",
    rolePrimeContractor: "Prime",
    roleSystemsLaggard: "Systems",
    roleNavalLaggard: "Naval",
    roleCrowdingHedge: "Crowding hedge",
    roleMarketHedge: "Market hedge",
  },
  zh: {
    brandSubtitle: "美股 AI 交易助手",
    narrative: "市场热点",
    theme: "主题",
    agentStyle: "分析风格",
    balanced: "均衡",
    contrarian: "逆向",
    momentum: "动量",
    grossExposure: "模拟投入",
    scanNarrative: "开始分析",
    deployBasket: "开始模拟",
    reset: "重置",
    demoBoundary: "Demo 边界",
    demoBoundaryBody: "BTCUSDT/ETHUSDT 可走 Bitget 实时数据；美股产业链分析默认是 demo，除非 Bitget 收录该交易对。",
    heroEyebrow: "美股 AI 交易",
    heroTitle: "从产业链里找被忽略的机会。",
    heroSubtitle: "输入股票，查看行情、上下游、相关股票，并获得一个直观的 AI 交易建议。",
    productSearch: "产品搜索",
    productPrompt: "可输入 NVDA / Nvidia / 英伟达；真实 Bitget 行情可试 BTCUSDT / ETHUSDT。",
    liveData: "行情数据",
    bitgetLive: "Bitget 实时",
    demoFallback: "美股演示价格",
    dataUnavailable: "Bitget 没有收录这个美股代码，这不是实时美股报价。",
    liveDataUnavailable: "Bitget 公开现货数据里没有这个交易对。",
    dataChecking: "正在查询 Bitget...",
    liveTradable: "Bitget 可交易",
    notListedOnBitget: "Bitget 未收录",
    dataQuality: "数据状态",
    advancedDetails: "更多细节",
    advancedDetailsHint: "AI 观点、风险、回放和假设测试",
    modeDemoTitle: "美股产业链 Demo",
    modeDemoBody: "AI 识别股票、上下游、相关标的，并寻找可能被忽略的补涨机会；Bitget 没有匹配交易对时，美股价格/K线为演示。",
    modeLiveTitle: "Bitget 实时行情模式",
    modeLiveBody: "当前视图使用 Bitget 公开 ticker 和 K 线数据。",
    modeEmptyTitle: "选择一个市场",
    modeEmptyBody: "输入 NVDA 看美股产业链 demo；输入 BTCUSDT / ETHUSDT 看 Bitget 实时行情。",
    flowSearch: "搜索股票",
    flowChain: "查看产业链",
    flowOpportunity: "获得 AI 策略",
    customSymbolDescription: "这是 Bitget 真实现货交易对，不使用美股主题地图。",
    realSymbolLoaded: "已载入真实 Bitget 交易对",
    priceChart: "价格走势",
    lastPrice: "最新价",
    chartChange: "区间涨跌",
    supportLevel: "支撑位",
    resistanceLevel: "压力位",
    chartLoading: "正在加载走势...",
    chartDemo: "演示走势",
    chartLive: "Bitget K 线",
    chartEmpty: "搜索一个产品后，这里会显示价格走势。",
    chartDemoComment: "Bitget 没有匹配的公开现货 K 线。这里是美股演示走势，不是实时美股报价。",
    chartLiveComment: "最新价来自 Bitget ticker；区间、支撑和压力来自 Bitget K 线。",
    chartTradeHintLong: "价格还在短期支撑上方，可以观察是否继续走强。",
    chartTradeHintShort: "价格接近压力位，适合等突破，或作为保护观察。",
    chartTradeHintNeutral: "价格在区间中间，先等更清楚的位置。",
    change24h: "24h 涨跌",
    updated: "更新时间",
    stockBriefTitle: "股票速览",
    stockBriefEmpty: "搜索一个代码，这里会解释它是什么、为什么属于这个主题。",
    roleInTheme: "主题里的角色",
    relatedStocks: "相关股票",
    simpleTakeaway: "一句话理解",
    takeawayLong: "如果这个主题继续走强，这个标的值得重点观察。",
    takeawayShort: "如果主题降温或资金转向，它可以作为对冲观察。",
    mapSummaryEmpty: "搜索股票后，这里会解释它在产业链里的位置。",
    mapSummaryCustom: "{ticker} 是真实 Bitget 交易对。美股产业链分析请试 NVDA / LLY / QQQ。",
    mapSummary: "{ticker} 在 {theme} 里属于「{role}」。它一边连接 {upstream}，另一边对应 {downstream}。",
    upstream: "上游",
    downstream: "下游",
    supportedOnBitget: "Bitget 行情数据",
    bitgetSymbol: "交易对",
    matchedNarrative: "相关热点",
    stage: "状态",
    pricedIn: "热度",
    basketPnl: "模拟盈亏",
    agentDecision: "AI 观点",
    aiOpportunity: "AI 机会",
    tradeTicket: "交易建议",
    ticketAction: "动作",
    ticketTarget: "标的",
    ticketConfidence: "信心",
    ticketRisk: "风险",
    ticketPrice: "价格信号",
    ticketTrigger: "买入观察位",
    ticketStop: "止损参考",
    ticketDistance: "距离触发",
    scoreBreakdown: "为什么推荐",
    scoreTheme: "主题",
    scoreGap: "空间",
    scorePrice: "价格",
    evidenceTitle: "使用证据",
    evidenceSubtitle: "可运行 demo 证明",
    evidenceLiveData: "实时数据",
    evidenceSimRecord: "模拟记录",
    evidencePaperPnl: "模拟盈亏",
    evidenceNoTrade: "还没有模拟交易",
    evidenceNoTradeBody: "点击“开始模拟”后，这里会生成可验证的模拟记录。",
    evidenceDemoData: "美股演示路径",
    evidenceBitgetData: "Bitget 公开 ticker + K 线",
    evidenceCandidate: "AI 候选标的",
    evidenceUpdated: "更新时间",
    evidenceAccount: "账户",
    evidenceTradeLog: "审计日志",
    evidenceExport: "下载 JSON",
    evidenceLogEmpty: "还没有审计记录。",
    evidenceBalanceBefore: "交易前",
    evidenceBalanceAfter: "交易后",
    evidenceBalanceChange: "变化",
    evidenceNotional: "名义金额",
    evidenceQuantity: "数量",
    actionWatchLong: "观察做多",
    actionWatchShort: "观察偏弱",
    actionWait: "先观望",
    upsideMode: "上涨机会",
    downsideMode: "下跌/降温机会",
    ignoredName: "可能被忽略",
    opportunityRank: "机会排行",
    leaderLabel: "龙头",
    catchUpLabel: "补涨",
    hedgeLabel: "偏弱",
    chainLeaders: "龙头",
    chainCatchUp: "补涨标的",
    chainWeak: "偏弱/保护",
    setupReason: "为什么值得看",
    simpleStrategy: "简单策略",
    invalidation: "风险线",
    noOpportunityYet: "输入美股 demo 代码并点击分析，系统会找可能被忽略的补涨标的。",
    opportunityReason: "{ticker} 还落后龙头 {gap} 点，但这个主题仍然有热度。",
    opportunityStrategy: "重点观察 {ticker}。如果价格守住支撑位，主题分数还在 {score} 以上，可以小仓位模拟做多。",
    opportunityRisk: "如果出现「{trigger}」，或者它一直跟不上龙头，就停止观察。",
    downsideReason: "{ticker} 属于偏弱一侧。如果主题降温，它可能先下跌，也可以用来保护组合。",
    downsideStrategy: "把 {ticker} 作为保护候选。如果龙头跌破支撑，风险分还在 {risk} 以上，就观察下跌方向。",
    downsideRisk: "如果主题重新走强，或者龙头重新站稳支撑，就不要追空。",
    priceNearSupport: "接近支撑",
    priceNearResistance: "接近压力",
    priceMidRange: "区间中部",
    priceSignalBody: "{ticker} 图表：{signal}。支撑 {support}，压力 {resistance}。",
    customOpportunity: "这是 Bitget 真实行情视图，用来验证价格和 K 线接入；美股产业链机会请用 NVDA / LLY / QQQ 这类 demo。",
    decisionLong: "关注做多",
    decisionShort: "作为对冲",
    decisionNeutral: "先观望",
    confidence: "置信度",
    decisionReasonLong: "主题仍然健康，这个标的处在受益一侧。",
    decisionReasonShort: "如果主题降温，这个标的更适合作为对冲观察。",
    decisionReasonNeutral: "当前热度偏高，先等更清晰的机会。",
    executionPlan: "模拟方案",
    executionPlanBody: "先分析主题，再开始模拟，观察结果。",
    narrativePropagation: "产业链地图",
    coreHeat: "核心标的",
    laggardGap: "补涨空间",
    crowding: "是否过热",
    breakTrigger: "主要风险",
    relativeBasket: "AI 策略",
    standBy: "待命",
    waiting: "等待",
    arbitrageThesis: "一句话策略",
    thesisEmpty: "点击开始分析后，这里会给出一个简单交易想法。",
    narrativeAgents: "分析小队",
    specialistDebate: "系统观点",
    livePaperBasket: "模拟交易",
    noActiveBasket: "还没有开始模拟",
    pricedInMeter: "热度检查",
    earlyVsCrowded: "还早吗",
    breaksStory: "可能出错的地方",
    invalidationMap: "风险提示",
    shockLab: "假设测试",
    repriceStory: "测试交易想法",
    coreMiss: "核心落空",
    macroDrag: "宏观拖累",
    crowdingUnwind: "热度回落",
    agentMemory: "AI 记录",
    decisionTimeline: "决策时间线",
    ready: "就绪",
    waitingScan: "先选择或搜索一只股票，再点击分析。",
    unscanned: "未扫描",
    crowdedRisk: "- 过热风险",
    narrativeImpulse: "+ 热点强度",
    coreToHedge: "龙头 -> 供应商 -> 对冲",
    scanBasketEmpty: "分析主题后生成模拟交易。",
    stageCrowded: "过热",
    stageExpanding: "扩散",
    stageFading: "衰退",
    stageEarly: "早期",
    long: "做多",
    short: "做空",
    trim: "降仓",
    add: "加仓",
    laggards: "补涨股",
    balancedSide: "均衡",
    narrativeCartographer: "热点判断",
    crowdingDetective: "过热检查",
    secondOrderScout: "供应链扫描",
    hedgeRouter: "对冲方案",
    cartographerReason: "{title} 现在是{stage}状态，热点强度 {impulse}/100。",
    crowdingReason: "热度为 {crowding}/100，所以建议{action}。",
    crowdingNeedsHedges: "更谨慎一些",
    crowdingHasRoom: "继续观察机会",
    scoutReason: "还有 {gap} 点补涨空间，相关股票可能还没完全反应。",
    hedgeReason: "把可能受益的股票，和较弱或过热的股票放在一起模拟。",
    narrativeImpulseLabel: "热点强度",
    pricedInRisk: "过热风险",
    laggardSpread: "补涨空间",
    impulseBody: "{score}/100：这个热点现在有多强。",
    pricedBody: "{score}/100：市场是不是已经太热。",
    laggardBody: "{gap} 点：相关股票还有多少补涨空间。",
    coreBreak: "主要风险",
    coreBreakBody: "如果出现「{trigger}」，这个交易想法就要重新评估。",
    crowdingUnwindTitle: "热度回落",
    crowdingUnwindBody: "如果过热风险升到 {score}/100 以上，就少投入一点。",
    laggardFailure: "补涨失败",
    laggardFailureBody: "如果相关股票没有跟上，就只观察龙头，或者停止模拟。",
    planTitle: "{stage}机会",
    planThesis: "{title} 现在是{stage}状态。AI 会优先找还没完全跟涨的供应商、小票或相关标的。",
    scanComplete: "分析完成",
    scanCompleteBody: "{title} 当前是{stage}；已生成模拟交易，过热程度 {crowding}/100。",
    paperBasketDeployed: "模拟已开始",
    paperBasketDeployedBody: "{title} 的模拟交易已经开始记录盈亏。",
    noPositionBody: "点“开始模拟”后，这里会显示每只股票的模拟盈亏。",
    paperBasketLive: "模拟进行中",
    activePositive: "运行 +",
    activeNegative: "运行 -",
    flat: "空仓",
    verdict: "裁决",
    repriceScore: "变化分",
    agentNote: "AI 备注",
    pressWinners: "加大关注",
    closeBasket: "停止模拟",
    keepHedged: "保持对冲",
    pressBody: "这个热点还有扩散空间。",
    closeBody: "故事破裂风险过高。",
    keepBody: "维持相对价值结构。",
    resetBody: "模拟交易已清空。",
    narrativeChanged: "热点已切换",
    narrativeChangedBody: "已切换到 {title}。",
    styleChanged: "分析风格已切换",
    styleChangedBody: "风格切换为{style}。",
    catalystFeed: "消息输入",
    eventInputs: "为什么波动",
    whyNow: "为什么交易",
    tradeBrief: "交易简报",
    replayMode: "回放模式",
    narrativeLifecycle: "主题时间线",
    inputsCount: "{count} 个输入",
    conviction: "置信度",
    readThrough: "这意味着什么",
    action: "交易动作",
    riskControl: "风险控制",
    whyReadThrough: "{title} 现在是{stage}状态，相关股票还有 {gap} 点补涨空间。",
    whyActionLong: "可以先做一个模拟组合：关注受益股票，同时用较弱股票做保护。",
    whyActionHedged: "这个热点已经比较热，适合先小仓位模拟，不要直接重仓。",
    whyRisk: "如果出现「{trigger}」，就应该重新看这个想法。当前投入比例是 {gross}%。",
    typeEarnings: "财报",
    typeMacro: "宏观",
    typeFlow: "资金流",
    typePolicy: "政策",
    typeChannel: "渠道",
    typeRates: "利率",
    typeGeopolitics: "地缘",
    scanning: "扫描中",
    grossUnit: "投入",
    pointsUnit: "点",
    toneGood: "健康",
    toneWatch: "观察",
    toneBad: "风险",
    triggerHyperscalerCapexCut: "云厂商资本开支下修",
    triggerDrugPricingOrAdherenceDisappointment: "药价或依从性不及预期",
    triggerHotCpiOrHawkishFedRepricing: "CPI 偏热或美联储态度更强硬",
    triggerBudgetDelayOrCeasefireHeadline: "预算延期或停火头条",
    catalystCloudCapexGuideStillImpliesAcceleratedGpuDigestion: "云厂商资本开支指引仍暗示 GPU 消化加速。",
    catalystPowerConstraintsArePushingWinnersIntoInfrastructureSuppliers: "电力约束正在把赢家扩散到基础设施供应商。",
    catalystEtfFlowIsCrowdedInCoreSemisQuieterInSecondOrderNames: "ETF 资金集中在核心半导体，二阶标的相对安静。",
    catalystPricingScrutinyRaisesTailRiskAroundTheCoreWinners: "药价审查提高核心赢家的尾部风险。",
    catalystAdherenceDataKeepsTheLongTermStoryAliveButLessClean: "依从性数据维持长期故事，但路径不再干净。",
    catalystDefensiveHealthcareFlowsAreAlreadyHeavyInTheLeaders: "防御型医疗资金已明显集中在龙头。",
    catalystCpiAndFedLanguageAreThePrimaryDriversOfDurationBeta: "CPI 和美联储措辞是久期 beta 的主驱动。",
    catalystTwoYearYieldDriftHasNotFullyReachedSmallCapBetaYet: "两年期收益率变化还没有完全传导到小盘 beta。",
    catalystPositioningIsCleanerThanMegacapGrowthNarratives: "资金没有像大型成长股那样拥挤。",
    catalystBudgetLanguageSupportsPrimesWhileSmallerSuppliersLag: "预算消息利好大承包商，但小供应商还没完全跟上。",
    catalystHeadlineRiskIsHighButSpendVisibilityRemainsSticky: "头条风险很高，但支出可见度仍具粘性。",
    catalystCrowdingIsModestLeavingRoomForRelativeValueExpression: "热度不算高，还有做模拟组合的空间。",
    roleCoreWinner: "龙头",
    rolePowerLaggard: "电力供应",
    roleServerLaggard: "服务器",
    roleBudgetLoser: "预算压力",
    roleSecondOrderHealth: "医疗配套",
    roleConsumptionHedge: "食品对冲",
    roleDurationWinner: "降息受益",
    roleLaggardBeta: "补涨标的",
    roleRegionalBankBeta: "区域银行",
    roleNetInterestHedge: "银行对冲",
    roleMacroHedge: "宏观对冲",
    rolePrimeContractor: "主承包商",
    roleSystemsLaggard: "系统供应",
    roleNavalLaggard: "船舶供应",
    roleCrowdingHedge: "过热保护",
    roleMarketHedge: "市场对冲",
  },
};

function t(key, replacements = {}) {
  const template = translations[state.lang][key] || translations.en[key] || key;
  return Object.entries(replacements).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), template);
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(value);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / Math.max(values.length, 1);
}

function noise(seed) {
  const x = Math.sin(seed * 777.17) * 10000;
  return x - Math.floor(x);
}

function currentNarrative() {
  return narratives[state.narrative];
}

function productUniverse() {
  return Object.entries(narratives).flatMap(([narrativeKey, narrative]) =>
    narrative.nodes.map((node) => ({
      ...node,
      narrativeKey,
      narrativeTitle: narrative.title,
      upstream: narrative.nodes.filter((item) => item.side === "LONG").slice(0, 3).map((item) => item.ticker),
      downstream: narrative.nodes.filter((item) => item.side === "SHORT").slice(0, 3).map((item) => item.ticker),
    }))
  );
}

function normalizeSearch(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function findProductByInput(value) {
  const raw = value.trim().toUpperCase();
  const normalized = normalizeSearch(value);
  return productUniverse().find((item) => {
    const aliases = productAliases[item.ticker] || [];
    return item.ticker === raw || aliases.some((alias) => normalizeSearch(alias) === normalized || normalizeSearch(alias).includes(normalized) || normalized.includes(normalizeSearch(alias)));
  });
}

function selectedProduct() {
  if (state.customSymbol) return state.customSymbol;
  return productUniverse().find((item) => item.ticker === state.selectedProduct);
}

function marketSnapshot(ticker) {
  return state.marketData[ticker] || null;
}

function marketStatus(market) {
  if (market?.source === "bitget") {
    return { tone: "live", label: t("liveTradable"), detail: `${t("bitgetSymbol")} ${market.symbol}` };
  }
  if (market?.source === "loading") {
    return { tone: "loading", label: t("dataChecking"), detail: t("dataChecking") };
  }
  return {
    tone: "demo",
    label: t("notListedOnBitget"),
    detail: market?.reason === "not-listed" ? t("liveDataUnavailable") : t("dataUnavailable"),
  };
}

function renderModeBanner() {
  const product = selectedProduct();
  const market = product ? marketSnapshot(product.ticker) : null;
  const isLive = product?.role === "Bitget symbol" && market?.source === "bitget";
  const tone = isLive ? "live" : product ? "demo" : "empty";
  const title = isLive ? t("modeLiveTitle") : product ? t("modeDemoTitle") : t("modeEmptyTitle");
  const body = isLive ? t("modeLiveBody") : product ? t("modeDemoBody") : t("modeEmptyBody");
  $("modeBanner").className = `mode-banner ${tone}`;
  $("modeBanner").innerHTML = `<b>${title}</b><span>${body}</span>`;
  document.querySelectorAll("[data-quick-symbol]").forEach((button) => {
    button.classList.toggle("active", button.dataset.quickSymbol === product?.ticker);
  });
}

function productPrice(product) {
  return marketSnapshot(product.ticker)?.price || product.price;
}

function displayPrice(value) {
  return Number.isFinite(value) && value > 0 ? money(value) : "--";
}

function displayPercent(value, scale = 1) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "--";
  const percent = number * scale;
  return `${percent >= 0 ? "+" : ""}${percent.toFixed(2)}%`;
}

function productDescription(ticker) {
  if (state.customSymbol?.ticker === ticker) return t("customSymbolDescription");
  const profile = productProfiles[ticker];
  if (!profile) return "";
  return profile[state.lang] || profile.en;
}

async function loadBitgetSymbols() {
  if (state.bitgetSymbols) return state.bitgetSymbols;
  try {
    const response = await fetch("https://api.bitget.com/api/v2/spot/public/symbols");
    if (!response.ok) throw new Error("symbols unavailable");
    const payload = await response.json();
    state.bitgetSymbols = Array.isArray(payload.data) ? payload.data : [];
  } catch (error) {
    state.bitgetSymbols = [];
  }
  return state.bitgetSymbols;
}

function symbolText(row) {
  return String(row?.symbol || row?.symbolName || row?.baseCoin || "").toUpperCase();
}

function bitgetSymbolValue(row) {
  return row?.symbol || row?.symbolName || null;
}

function isLikelyStockTicker(ticker) {
  return /^[A-Z]{1,5}$/.test(ticker) && !ticker.endsWith("USDT");
}

async function resolveBitgetSymbol(ticker) {
  const upper = ticker.toUpperCase();
  const symbols = await loadBitgetSymbols();
  const direct = symbols.find((row) => symbolText(row) === upper);
  if (direct) return bitgetSymbolValue(direct);
  if (isLikelyStockTicker(upper)) return null;
  const exact = symbols.find((row) => symbolText(row) === `${upper}USDT`);
  if (exact) return bitgetSymbolValue(exact);
  const baseQuote = symbols.find((row) => {
    const base = String(row?.baseCoin || "").toUpperCase();
    const quote = String(row?.quoteCoin || "").toUpperCase();
    return base === upper && quote === "USDT";
  });
  if (baseQuote) return bitgetSymbolValue(baseQuote);
  return null;
}

async function bitgetSymbolCandidatesFor(ticker) {
  const resolved = await resolveBitgetSymbol(ticker);
  return resolved ? [resolved] : [];
}

function bitgetGranularity(timeframe) {
  return {
    "15m": "15min",
    "1h": "1h",
    "4h": "4h",
    "1d": "1day",
  }[timeframe] || "1h";
}

function candleCacheKey(ticker, timeframe) {
  return `${ticker}:${timeframe}`;
}

function timeframeMs(timeframe) {
  return {
    "15m": 15 * 60 * 1000,
    "1h": 60 * 60 * 1000,
    "4h": 4 * 60 * 60 * 1000,
    "1d": 24 * 60 * 60 * 1000,
  }[timeframe] || 60 * 60 * 1000;
}

function normalizeCandle(row) {
  const values = Array.isArray(row) ? row : Object.values(row || {});
  const [time, open, high, low, close, volume] = values.map(Number);
  if (![time, open, high, low, close].every(Number.isFinite)) return null;
  return { time, open, high, low, close, volume: Number.isFinite(volume) ? volume : 0 };
}

function makeDemoCandles(product, timeframe) {
  if (!product) return [];
  const count = 64;
  const step = timeframeMs(timeframe);
  const base = product.price;
  const trend = product.side === "LONG" ? 0.0018 : -0.0009;
  return Array.from({ length: count }, (_, index) => {
    const seed = product.ticker.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) + index * 7;
    const swing = Math.sin(index / 4) * 0.012 + (noise(seed) - 0.5) * 0.018;
    const close = base * (1 + (index - count + 1) * trend + swing);
    const open = index === 0 ? close * (1 - (noise(seed + 2) - 0.5) * 0.012) : null;
    const bodyOpen = open ?? close * (1 - (noise(seed + 3) - 0.5) * 0.01);
    const high = Math.max(bodyOpen, close) * (1 + 0.004 + noise(seed + 4) * 0.01);
    const low = Math.min(bodyOpen, close) * (1 - 0.004 - noise(seed + 5) * 0.01);
    return {
      time: Date.now() - (count - index) * step,
      open: bodyOpen,
      high,
      low,
      close,
      volume: 100000 + noise(seed + 6) * 800000,
    };
  });
}

async function fetchBitgetCandles(ticker, timeframe) {
  const candidates = await bitgetSymbolCandidatesFor(ticker);
  const granularity = bitgetGranularity(timeframe);
  const endTime = Date.now();
  const startTime = endTime - timeframeMs(timeframe) * 90;
  if (!candidates.length) {
    return {
      source: "demo",
      reason: "not-listed",
      symbol: ticker,
      candles: makeDemoCandles(productUniverse().find((item) => item.ticker === ticker), timeframe),
    };
  }
  for (const symbol of candidates) {
    try {
      const params = new URLSearchParams({
        symbol,
        granularity,
        startTime: String(startTime),
        endTime: String(endTime),
        limit: "80",
      });
      const response = await fetch(`https://api.bitget.com/api/v2/spot/market/candles?${params.toString()}`);
      if (!response.ok) continue;
      const payload = await response.json();
      const candles = (Array.isArray(payload.data) ? payload.data : [])
        .map(normalizeCandle)
        .filter(Boolean)
        .sort((a, b) => a.time - b.time);
      if (candles.length >= 12) return { source: "bitget", symbol, candles };
    } catch (error) {
      // Unsupported tokenized stock symbols fall back to an explicitly marked demo chart.
    }
  }
  return {
    source: "demo",
    reason: "not-listed",
    symbol: ticker,
    candles: makeDemoCandles(productUniverse().find((item) => item.ticker === ticker), timeframe),
  };
}

async function fetchBitgetTicker(ticker) {
  const candidates = await bitgetSymbolCandidatesFor(ticker);
  if (!candidates.length) {
    return {
      source: "demo",
      reason: "not-listed",
      symbol: ticker,
      price: selectedProduct()?.price || productUniverse().find((item) => item.ticker === ticker)?.price || 0,
      change24h: null,
      ts: Date.now(),
    };
  }
  for (const symbol of candidates) {
    try {
      const response = await fetch(`https://api.bitget.com/api/v2/spot/market/tickers?symbol=${encodeURIComponent(symbol)}`);
      if (!response.ok) continue;
      const payload = await response.json();
      const row = Array.isArray(payload.data) ? payload.data[0] : payload.data;
      const last = Number(row?.lastPr || row?.close || row?.last);
      if (!Number.isFinite(last) || last <= 0) continue;
      return {
        source: "bitget",
        symbol,
        price: last,
        change24h: Number(row?.change24h || row?.changeUtc24h || 0),
        ts: Date.now(),
      };
    } catch (error) {
      // Public market data can fail for unsupported tokenized stock symbols; fallback is shown in UI.
    }
  }
  return {
    source: "demo",
    reason: "not-listed",
    symbol: ticker,
    price: selectedProduct()?.price || productUniverse().find((item) => item.ticker === ticker)?.price || 0,
    change24h: null,
    ts: Date.now(),
  };
}

async function refreshMarketData(ticker) {
  if (!ticker) return;
  state.marketData[ticker] = {
    source: "loading",
    symbol: ticker,
    price: productUniverse().find((item) => item.ticker === ticker)?.price || 0,
    change24h: null,
    ts: Date.now(),
  };
  renderProductInsight();
  renderModeBanner();
  renderStockBrief();
  const data = await fetchBitgetTicker(ticker);
  state.marketData[ticker] = data;
  renderProductInsight();
  renderModeBanner();
  renderStockBrief();
  renderAgentDecision();
  renderOpportunity();
  renderEvidence();
}

async function refreshCandles(ticker = state.selectedProduct, timeframe = state.timeframe) {
  if (!ticker) {
    renderPriceChart();
    return;
  }
  const key = candleCacheKey(ticker, timeframe);
  state.candles[key] = {
    source: "loading",
    symbol: ticker,
    candles: makeDemoCandles(productUniverse().find((item) => item.ticker === ticker), timeframe),
  };
  renderPriceChart();
  renderOpportunity();
  const data = await fetchBitgetCandles(ticker, timeframe);
  state.candles[key] = data;
  renderPriceChart();
  renderOpportunity();
  renderEvidence();
}

function stageFrom(score, crowding) {
  if (crowding > 78) return "Crowded";
  if (score > 70 && crowding < 70) return "Expanding";
  if (score < 45) return "Fading";
  return "Early";
}

function stageLabel(stage) {
  return t(`stage${stage}`);
}

function sideLabel(side) {
  if (side === "LONG") return t("long");
  if (side === "SHORT") return t("short");
  if (side === "Trim") return t("trim");
  if (side === "Add") return t("add");
  if (side === "Laggards") return t("laggards");
  if (side === "Balanced") return t("balancedSide");
  return side;
}

function keyFromText(prefix, text) {
  const words = text.toLowerCase().match(/[a-z0-9]+/g) || [];
  return `${prefix}${words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("")}`;
}

function roleLabel(role) {
  return t(keyFromText("role", role));
}

function triggerLabel(trigger) {
  return t(keyFromText("trigger", trigger));
}

function catalystLabel(text) {
  return t(keyFromText("catalyst", text));
}

function typeLabel(type) {
  return t(keyFromText("type", type));
}

function toneLabel(tone) {
  return t(`tone${tone.charAt(0).toUpperCase()}${tone.slice(1)}`);
}

function toneFrom(score) {
  if (score >= 70) return "good";
  if (score >= 45) return "watch";
  return "bad";
}

function log(title, body) {
  const li = document.createElement("li");
  li.innerHTML = `<span>${title}</span><p>${body}</p>`;
  $("decisionLog").prepend(li);
}

function roundNumber(value, digits = 6) {
  return Number(Number(value || 0).toFixed(digits));
}

function paperBalance() {
  return PAPER_STARTING_BALANCE + (state.pnl || 0);
}

function tradeDataSource(ticker) {
  const market = marketSnapshot(ticker);
  return market?.source === "bitget" ? `bitget:${market.symbol}` : "demo:us-stock-chain";
}

function createTradeRecord({ action, leg, sessionId, balanceBefore, balanceAfter }) {
  const balanceChange = balanceAfter - balanceBefore;
  return {
    timestamp: new Date().toISOString(),
    sessionId,
    strategy: currentNarrative().title,
    action,
    symbol: leg.ticker,
    tradingPair: leg.ticker,
    direction: leg.side,
    price: roundNumber(action === "MARK" ? leg.mark : leg.entry, 4),
    quantity: roundNumber(leg.quantity),
    notional: roundNumber(leg.notional, 2),
    accountBalanceBefore: roundNumber(balanceBefore, 2),
    accountBalanceAfter: roundNumber(balanceAfter, 2),
    accountBalanceChange: roundNumber(balanceChange, 2),
    paperPnl: roundNumber(leg.pnl || 0, 2),
    dataSource: tradeDataSource(leg.ticker),
  };
}

function appendTradeRecords(records) {
  state.tradeLog = [...records, ...state.tradeLog].slice(0, 60);
}

function downloadTradeLog() {
  const payload = {
    generatedAt: new Date().toISOString(),
    accountCurrency: "USD",
    startingBalance: PAPER_STARTING_BALANCE,
    currentBalance: roundNumber(paperBalance(), 2),
    records: state.tradeLog,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "stock-chain-ai-paper-trading-log.json";
  link.click();
  URL.revokeObjectURL(url);
}

function computeScan() {
  const narrative = currentNarrative();
  const styleBoost = state.style === "momentum" ? 7 : state.style === "contrarian" ? -5 : 0;
  const impulse = clamp(narrative.impulse + styleBoost, 1, 100);
  const crowding = clamp(narrative.crowding + (state.style === "momentum" ? 5 : state.style === "contrarian" ? -10 : 0), 1, 100);
  const laggardGap = Math.round(average(narrative.nodes.filter((node) => node.lag > 0).map((node) => node.lag)));
  const coreHeat = Math.round(average(narrative.nodes.slice(0, 2).map((node) => node.heat)));
  const stage = stageFrom(impulse, crowding);
  return { impulse, crowding, laggardGap, coreHeat, stage };
}

function buildBasket(scan) {
  const gross = Number($("riskSlider").value);
  const narrative = currentNarrative();
  const crowdingPenalty = scan.crowding > 72 ? 0.72 : 1;
  const contrarianFlip = state.style === "contrarian" && scan.stage === "Crowded";
  return narrative.nodes.map((node) => {
    const side = contrarianFlip ? (node.side === "LONG" ? "SHORT" : "LONG") : node.side;
    const absWeight = Math.abs(node.weight) * crowdingPenalty;
    const allocation = (absWeight / 16) * gross;
    const notional = PAPER_STARTING_BALANCE * (allocation / 100);
    const quantity = node.price > 0 ? notional / node.price : 0;
    return {
      ...node,
      side,
      allocation: Number(allocation.toFixed(2)),
      notional: Number(notional.toFixed(2)),
      quantity: roundNumber(quantity),
      mark: node.price,
      entry: node.price,
      pnl: 0,
    };
  });
}

function renderPropagation() {
  const narrative = currentNarrative();
  const scan = state.scan || computeScan();
  const product = selectedProduct();
  $("narrativeTitle").textContent = narrative.title;
  $("narrativeScore").textContent = scan.impulse;
  $("narrativeBadge").textContent = stageLabel(scan.stage);
  $("narrativeChange").textContent = scan.stage === "Crowded" ? `⚠ ${t("crowdedRisk").replace("- ", "")}` : `✦ ${t("narrativeImpulse").replace("+ ", "")}`;
  $("stageStatus").textContent = stageLabel(scan.stage);
  $("pricedInStatus").textContent = `${scan.crowding}/100`;
  $("coreHeat").textContent = `${scan.coreHeat}/100`;
  $("laggardGap").textContent = `${scan.laggardGap} ${t("pointsUnit")}`;
  $("crowdingScore").textContent = `${scan.crowding}/100`;
  $("breakTrigger").textContent = triggerLabel(narrative.trigger);
  $("mapSummary").textContent = product?.role === "Bitget symbol"
    ? t("mapSummaryCustom", { ticker: product.ticker })
    : product
    ? t("mapSummary", {
        ticker: product.ticker,
        role: roleLabel(product.role),
        theme: product.narrativeTitle,
        upstream: product.upstream.join(", "),
        downstream: product.downstream.join(", ") || "--",
      })
    : t("mapSummaryEmpty");

  $("propagationMap").innerHTML = narrative.nodes
    .map((node, index) => {
      const x = 10 + index * 15 + (index % 2) * 6;
      const y = 50 - node.heat * 0.32 + (index % 3) * 11;
      const size = 46 + node.heat * 0.16;
      const tone = node.side === "LONG" ? "long" : "short";
      const selected = state.selectedProduct === node.ticker ? "selected" : "";
      return `
        <button class="map-node ${tone} ${selected}" type="button" data-pick-ticker="${node.ticker}" style="--x:${x}%;--y:${clamp(y, 8, 82)}%;--size:${size}px">
          <strong>${node.ticker}</strong>
          <span>${roleLabel(node.role)}</span>
        </button>
      `;
    })
    .join("");
  renderChainColumns();
}

function renderChainColumns() {
  const narrative = currentNarrative();
  const groups = [
    [t("chainLeaders"), narrative.nodes.filter((node) => node.side === "LONG" && node.lag <= 8)],
    [t("chainCatchUp"), narrative.nodes.filter((node) => node.side === "LONG" && node.lag > 8)],
    [t("chainWeak"), narrative.nodes.filter((node) => node.side === "SHORT")],
  ];
  $("chainColumns").innerHTML = groups
    .map(([label, nodes]) => `
      <section>
        <strong>${label}</strong>
        <div>
          ${nodes
            .map((node) => `
              <button type="button" data-pick-ticker="${node.ticker}" class="${state.selectedProduct === node.ticker ? "active" : ""}">
                <span>${node.ticker}</span>
                <small>${roleLabel(node.role)}</small>
              </button>
            `)
            .join("")}
        </div>
      </section>
    `)
    .join("");
}

function renderBasket() {
  if (!state.basket.length) {
    $("basketList").innerHTML = `<div class="basket-empty">${t("scanBasketEmpty")}</div>`;
    return;
  }
  $("basketList").innerHTML = state.basket
    .map((item) => `
      <div class="basket-row ${item.side.toLowerCase()}" style="--allocation:${clamp(item.allocation, 0, 30)}">
        <span>${item.side === "LONG" ? "↗" : "↘"} ${sideLabel(item.side)}</span>
        <strong>${item.ticker}</strong>
        <em>${item.allocation.toFixed(2)}% ${t("grossUnit")}</em>
        <i></i>
      </div>
    `)
    .join("");
}

function buildAgents(scan) {
  const narrative = currentNarrative();
  return [
    {
      role: "Narrative Cartographer",
      side: scan.stage,
      reason: t("cartographerReason", { title: narrative.title, stage: stageLabel(scan.stage), impulse: scan.impulse }),
    },
    {
      role: "Crowding Detective",
      side: scan.crowding > 72 ? "Trim" : "Add",
      reason: t("crowdingReason", { crowding: scan.crowding, action: t(scan.crowding > 72 ? "crowdingNeedsHedges" : "crowdingHasRoom") }),
    },
    {
      role: "Second-Order Scout",
      side: "Laggards",
      reason: t("scoutReason", { gap: scan.laggardGap }),
    },
    {
      role: "Hedge Router",
      side: "Balanced",
      reason: t("hedgeReason"),
    },
  ];
}

function renderVotes() {
  const scan = state.scan || computeScan();
  const agents = buildAgents(scan);
  $("committeeBadge").textContent = `${stageLabel(scan.stage)} / ${scan.crowding}`;
  $("agentVotes").innerHTML = agents
    .map((agent) => `<div class="vote-card wait"><strong>${t(agent.role === "Narrative Cartographer" ? "narrativeCartographer" : agent.role === "Crowding Detective" ? "crowdingDetective" : agent.role === "Second-Order Scout" ? "secondOrderScout" : "hedgeRouter")}</strong><span>${agent.side === "Crowded" || agent.side === "Expanding" || agent.side === "Fading" || agent.side === "Early" ? stageLabel(agent.side) : sideLabel(agent.side)}</span><p>${agent.reason}</p></div>`)
    .join("");
}

function renderMeters() {
  const scan = state.scan || computeScan();
  const rows = [
    [t("narrativeImpulseLabel"), toneFrom(scan.impulse), t("impulseBody", { score: scan.impulse })],
    [t("pricedInRisk"), toneFrom(100 - scan.crowding), t("pricedBody", { score: scan.crowding })],
    [t("laggardSpread"), toneFrom(scan.laggardGap + 40), t("laggardBody", { gap: scan.laggardGap })],
  ];
  $("eventRadar").innerHTML = rows
    .map(([label, tone, body]) => `<div class="event-card ${tone}"><span>${tone === "good" ? "✓" : tone === "watch" ? "◐" : "!"} ${label}</span><strong>${toneLabel(tone)}</strong><p>${body}</p></div>`)
    .join("");
}

function renderInvalidation() {
  const narrative = currentNarrative();
  const scan = state.scan || computeScan();
  const rows = [
    [t("coreBreak"), t("coreBreakBody", { trigger: triggerLabel(narrative.trigger) })],
    [t("crowdingUnwindTitle"), t("crowdingUnwindBody", { score: Math.min(95, scan.crowding + 12) })],
    [t("laggardFailure"), t("laggardFailureBody")],
  ];
  $("invalidationList").innerHTML = rows.map(([label, body]) => `<div class="invalidation-card"><strong>${label}</strong><p>${body}</p></div>`).join("");
}

function renderCatalysts() {
  const narrative = currentNarrative();
  $("feedBadge").textContent = t("inputsCount", { count: narrative.catalysts.length });
  $("catalystFeed").innerHTML = narrative.catalysts
    .map((item) => `
      <div class="catalyst-card" style="--impact:${item.impact}">
        <span>${item.type === "macro" ? "◌" : item.type === "flow" ? "↔" : item.type === "policy" ? "§" : item.type === "rates" ? "%" : "✦"} ${typeLabel(item.type)}</span>
        <strong>${item.impact}</strong>
        <p>${catalystLabel(item.text)}</p>
        <i></i>
      </div>
    `)
    .join("");
}

function renderTradeBrief() {
  const scan = state.scan || computeScan();
  const gross = Number($("riskSlider").value);
  const conviction = clamp(Math.round(scan.impulse * 0.58 + (100 - scan.crowding) * 0.24 + scan.laggardGap * 0.34), 1, 100);
  const actionKey = scan.crowding > 72 ? "whyActionHedged" : "whyActionLong";
  $("convictionBadge").textContent = `${t("conviction")} ${conviction}`;
  $("tradeBrief").innerHTML = `
    <div><span>① ${t("readThrough")}</span><p>${t("whyReadThrough", { title: currentNarrative().title, stage: stageLabel(scan.stage), gap: scan.laggardGap })}</p></div>
    <div><span>② ${t("action")}</span><p>${t(actionKey, { crowding: scan.crowding })}</p></div>
    <div><span>③ ${t("riskControl")}</span><p>${t("whyRisk", { trigger: triggerLabel(currentNarrative().trigger), gross })}</p></div>
  `;
}

function renderProductInsight() {
  const product = selectedProduct();
  $("productList").innerHTML = productUniverse()
    .map((item) => {
      const alias = (productAliases[item.ticker] || [])[0];
      return `<option value="${item.ticker}">${alias ? `${alias} / ` : ""}${item.narrativeTitle} / ${roleLabel(item.role)}</option>`;
    })
    .join("");
  if (!product) {
    $("productInsight").innerHTML = `<p>${t("productPrompt")}</p>`;
    return;
  }
  const market = marketSnapshot(product.ticker);
  const sourceLabel = market?.source === "bitget" ? t("bitgetLive") : t("demoFallback");
  const status = marketStatus(market);
  $("productInsight").innerHTML = `
    <div>
      <span>${t("supportedOnBitget")}</span>
      <strong>${product.ticker} · ${displayPrice(productPrice(product))}</strong>
      <p>${sourceLabel}${market?.source === "bitget" ? ` · ${t("bitgetSymbol")} ${market.symbol}` : ` · ${t("dataUnavailable")}`}</p>
      <div class="data-status ${status.tone}">
        <b>${status.label}</b>
        <small>${status.detail}</small>
      </div>
    </div>
    <div>
      <span>${t("matchedNarrative")}</span>
      <p>${product.narrativeTitle} / ${product.role === "Bitget symbol" ? t("realSymbolLoaded") : roleLabel(product.role)}</p>
    </div>
    ${
      product.role === "Bitget symbol"
        ? `<div class="chain-row"><span>${t("dataQuality")}</span><p>${status.label} · ${status.detail}</p></div>`
        : `
          <div class="chain-row">
            <span>${t("upstream")}</span>
            <p>${product.upstream.join(" · ")}</p>
          </div>
          <div class="chain-row">
            <span>${t("downstream")}</span>
            <p>${product.downstream.join(" · ") || "--"}</p>
          </div>
        `
    }
  `;
}

function renderStockBrief() {
  const product = selectedProduct();
  if (!product) {
    $("stockBrief").innerHTML = `
      <span>${t("stockBriefTitle")}</span>
      <p>${t("stockBriefEmpty")}</p>
    `;
    return;
  }
  const market = marketSnapshot(product.ticker);
  const sourceLabel = market?.source === "bitget" ? t("bitgetLive") : t("demoFallback");
  const status = marketStatus(market);
  const change = market?.change24h;
  const takeawayKey = product.side === "SHORT" ? "takeawayShort" : "takeawayLong";
  const related = product.role === "Bitget symbol"
    ? `<span>--</span>`
    : currentNarrative().nodes
        .filter((node) => node.ticker !== product.ticker)
        .slice(0, 5)
        .map((node) => `<button type="button" data-pick-ticker="${node.ticker}">${node.ticker}</button>`)
        .join("");
  $("stockBrief").innerHTML = `
    <span>${t("stockBriefTitle")}</span>
    <div class="stock-brief-head">
      <strong>${product.ticker}</strong>
      <em>${displayPrice(productPrice(product))}</em>
    </div>
    <p>${productDescription(product.ticker)}</p>
    <div class="market-source ${status.tone}">
      <b>${status.label}</b>
      <small>${market?.source === "bitget" ? `${market.symbol} · ${t("change24h")} ${displayPercent(change, 100)}` : status.detail}</small>
    </div>
    <div class="stock-brief-grid">
      <div><small>${t("roleInTheme")}</small><b>${product.role === "Bitget symbol" ? t("realSymbolLoaded") : roleLabel(product.role)}</b></div>
      <div><small>${t("matchedNarrative")}</small><b>${product.narrativeTitle}</b></div>
    </div>
    <div class="related-strip"><small>${t("relatedStocks")}</small><div>${related}</div></div>
    <small>${t("simpleTakeaway")}</small>
    <p>${t(takeawayKey)}</p>
  `;
}

function decisionFor(product, scan) {
  if (!product) return { key: "decisionNeutral", tone: "neutral", confidence: 50, reason: "decisionReasonNeutral" };
  const confidence = clamp(Math.round(scan.impulse * 0.55 + (100 - scan.crowding) * 0.25 + Math.max(product.lag, 0) * 0.35), 1, 99);
  if (scan.crowding > 78) return { key: "decisionNeutral", tone: "neutral", confidence, reason: "decisionReasonNeutral" };
  if (product.side === "SHORT") return { key: "decisionShort", tone: "short", confidence, reason: "decisionReasonShort" };
  return { key: "decisionLong", tone: "long", confidence, reason: "decisionReasonLong" };
}

function renderAgentDecision() {
  const product = selectedProduct();
  const scan = state.scan || computeScan();
  const decision = decisionFor(product, scan);
  $("agentDecision").innerHTML = `
    <div class="decision-main ${decision.tone}">
      <span>${t("agentDecision")}</span>
      <strong>${t(decision.key)}</strong>
      <em>${t("confidence")} ${decision.confidence}/100</em>
    </div>
    <p>${t(decision.reason)}</p>
    <div class="decision-plan">
      <span>${t("executionPlan")}</span>
      <p>${t("executionPlanBody")}</p>
    </div>
  `;
}

function findOpportunity(scan) {
  const downside = scan.crowding > 76 || scan.stage === "Crowded";
  const pool = currentNarrative().nodes.filter((node) => downside ? node.side === "SHORT" : node.side === "LONG" && node.lag > 0);
  const pick = pool.sort((a, b) => downside ? (Math.abs(b.lag) + b.heat * 0.2) - (Math.abs(a.lag) + a.heat * 0.2) : b.lag - a.lag)[0];
  return pick ? { ...pick, mode: downside ? "downside" : "upside" } : null;
}

function rankedOpportunities() {
  return currentNarrative()
    .nodes
    .map((node) => {
      const score = node.side === "LONG" ? node.lag + Math.max(0, 70 - node.heat) * 0.25 : Math.abs(node.lag) + node.heat * 0.18;
      const type = node.side === "LONG" && node.lag > 0 ? "catchUpLabel" : node.side === "LONG" ? "leaderLabel" : "hedgeLabel";
      return { ...node, opportunityScore: Math.round(score), type };
    })
    .sort((a, b) => b.opportunityScore - a.opportunityScore)
    .slice(0, 4);
}

function priceSignalFor(ticker) {
  const cacheKey = candleCacheKey(ticker, state.timeframe);
  if (!state.candles[cacheKey]) {
    const product = productUniverse().find((item) => item.ticker === ticker);
    if (product) {
      state.candles[cacheKey] = {
        source: "demo",
        reason: "chain-demo",
        symbol: ticker,
        candles: makeDemoCandles(product, state.timeframe),
      };
    }
  }
  const chart = state.candles[cacheKey];
  const stats = chart?.candles?.length ? candleStats(chart.candles) : null;
  if (!stats) return null;
  const range = Math.max(stats.resistance - stats.support, 0.01);
  const supportDistance = (stats.last - stats.support) / range;
  const resistanceDistance = (stats.resistance - stats.last) / range;
  const signalKey = supportDistance < 0.25 ? "priceNearSupport" : resistanceDistance < 0.25 ? "priceNearResistance" : "priceMidRange";
  return {
    key: signalKey,
    last: stats.last,
    supportRaw: stats.support,
    resistanceRaw: stats.resistance,
    support: money(stats.support),
    resistance: money(stats.resistance),
  };
}

function renderOpportunity() {
  const product = selectedProduct();
  const scan = state.scan || computeScan();
  if (product?.role === "Bitget symbol") {
    $("opportunityCard").innerHTML = `
      <span>${t("aiOpportunity")}</span>
      <p>${t("customOpportunity")}</p>
    `;
    return;
  }
  const opportunity = findOpportunity(scan);
  if (!opportunity) {
    $("opportunityCard").innerHTML = `
      <span>${t("aiOpportunity")}</span>
      <p>${t("noOpportunityYet")}</p>
    `;
    return;
  }
  const isDownside = opportunity.mode === "downside";
  const ticketConfidence = clamp(Math.round(scan.impulse * 0.38 + (isDownside ? scan.crowding : 100 - scan.crowding) * 0.28 + Math.abs(opportunity.lag) * 0.55), 1, 99);
  const ticketAction = isDownside ? t("actionWatchShort") : scan.crowding > 78 ? t("actionWait") : t("actionWatchLong");
  const priceSignal = priceSignalFor(opportunity.ticker);
  const triggerPrice = priceSignal
    ? isDownside
      ? Math.max(priceSignal.supportRaw, priceSignal.last - (priceSignal.last - priceSignal.supportRaw) * 0.5)
      : Math.min(priceSignal.resistanceRaw, priceSignal.last + (priceSignal.resistanceRaw - priceSignal.last) * 0.5)
    : null;
  const stopPrice = priceSignal
    ? isDownside
      ? priceSignal.resistanceRaw * 1.01
      : priceSignal.supportRaw * 0.99
    : null;
  const distanceToTrigger = priceSignal && triggerPrice ? Math.abs((triggerPrice - priceSignal.last) / priceSignal.last) * 100 : null;
  const priceScore = priceSignal?.key === "priceNearSupport" && !isDownside ? 82 : priceSignal?.key === "priceNearResistance" && isDownside ? 82 : priceSignal ? 56 : 42;
  const scoreRows = [
    [t("scoreTheme"), scan.impulse],
    [t("scoreGap"), clamp(Math.round(Math.abs(opportunity.lag) * 2.1), 1, 100)],
    [t("scorePrice"), priceScore],
  ];
  $("opportunityCard").innerHTML = `
    <span>${t("aiOpportunity")}</span>
    <button class="opportunity-target" type="button" data-pick-ticker="${opportunity.ticker}">${opportunity.ticker} · ${roleLabel(opportunity.role)}</button>
    <em class="opportunity-mode ${opportunity.mode}">${t(isDownside ? "downsideMode" : "upsideMode")}</em>
    <section class="trade-ticket">
      <small>${t("tradeTicket")}</small>
      <div>
        <span>${t("ticketAction")}</span>
        <b>${ticketAction}</b>
      </div>
      <div>
        <span>${t("ticketTarget")}</span>
        <b>${opportunity.ticker}</b>
      </div>
      <div>
        <span>${t("ticketConfidence")}</span>
        <b>${ticketConfidence}/100</b>
      </div>
      <div>
        <span>${t("ticketRisk")}</span>
        <b>${scan.crowding}/100</b>
      </div>
      <div>
        <span>${t("ticketPrice")}</span>
        <b>${priceSignal ? t(priceSignal.key) : "--"}</b>
      </div>
      <div>
        <span>${t("ticketTrigger")}</span>
        <b>${triggerPrice ? money(triggerPrice) : "--"}</b>
      </div>
      <div>
        <span>${t("ticketStop")}</span>
        <b>${stopPrice ? money(stopPrice) : "--"}</b>
      </div>
      <div>
        <span>${t("ticketDistance")}</span>
        <b>${distanceToTrigger === null ? "--" : `${distanceToTrigger.toFixed(2)}%`}</b>
      </div>
    </section>
    <section class="score-breakdown">
      <small>${t("scoreBreakdown")}</small>
      ${scoreRows
        .map(([label, value]) => `
          <div style="--score:${value}">
            <span>${label}</span>
            <b>${value}</b>
            <i></i>
          </div>
        `)
        .join("")}
    </section>
    ${priceSignal ? `<div><small>${t("ticketPrice")}</small><p>${t("priceSignalBody", { ticker: opportunity.ticker, signal: t(priceSignal.key), support: priceSignal.support, resistance: priceSignal.resistance })}</p></div>` : ""}
    <div>
      <small>${t("setupReason")}</small>
      <p>${isDownside ? t("downsideReason", { ticker: opportunity.ticker }) : t("opportunityReason", { ticker: opportunity.ticker, gap: opportunity.lag })}</p>
    </div>
    <div>
      <small>${t("simpleStrategy")}</small>
      <p>${isDownside ? t("downsideStrategy", { ticker: opportunity.ticker, risk: scan.crowding }) : t("opportunityStrategy", { ticker: opportunity.ticker, score: scan.impulse })}</p>
    </div>
    <div>
      <small>${t("invalidation")}</small>
      <p>${isDownside ? t("downsideRisk") : t("opportunityRisk", { trigger: triggerLabel(currentNarrative().trigger) })}</p>
    </div>
    <section class="opportunity-rank">
      <small>${t("opportunityRank")}</small>
      ${rankedOpportunities()
        .map((item) => `
          <article>
            <b>${item.ticker}</b>
            <span>${t(item.type)} · ${roleLabel(item.role)}</span>
            <em>${item.opportunityScore}</em>
          </article>
        `)
        .join("")}
    </section>
  `;
}

function renderEvidence() {
  const product = selectedProduct();
  const market = product ? marketSnapshot(product.ticker) : null;
  const scan = state.scan || computeScan();
  const opportunity = product?.role === "Bitget symbol" ? null : findOpportunity(scan);
  const hasPosition = Boolean(state.position?.open);
  const dataLabel = market?.source === "bitget" ? t("evidenceBitgetData") : t("evidenceDemoData");
  const dataTone = market?.source === "bitget" ? "live" : "demo";
  const candidateText = opportunity ? `${opportunity.ticker} · ${roleLabel(opportunity.role)}` : product?.ticker || "--";
  const simText = hasPosition
    ? `${currentNarrative().title} · ${state.position.legs.length} ${state.lang === "zh" ? "个标的" : "legs"}`
    : t("evidenceNoTradeBody");
  const accountBalance = paperBalance();
  const latestRecords = state.tradeLog.slice(0, 5);
  $("evidenceCard").innerHTML = `
    <div class="evidence-head">
      <div>
        <small>${t("evidenceSubtitle")}</small>
        <strong>${t("evidenceTitle")}</strong>
      </div>
      <span class="${dataTone}">${market?.source === "bitget" ? t("bitgetLive") : t("demoFallback")}</span>
    </div>
    <div class="evidence-grid">
      <div>
        <span>${t("evidenceLiveData")}</span>
        <b>${dataLabel}</b>
        <small>${market?.source === "bitget" ? market.symbol : t("dataUnavailable")}</small>
      </div>
      <div>
        <span>${t("evidenceCandidate")}</span>
        <b>${candidateText}</b>
        <small>${opportunity ? t(opportunity.mode === "downside" ? "downsideMode" : "upsideMode") : t("customOpportunity")}</small>
      </div>
      <div>
        <span>${t("evidenceSimRecord")}</span>
        <b>${hasPosition ? t("paperBasketLive") : t("evidenceNoTrade")}</b>
        <small>${simText}</small>
      </div>
      <div>
        <span>${t("evidencePaperPnl")}</span>
        <b class="${state.pnl >= 0 ? "positive" : "negative"}">${money(state.pnl || 0)}</b>
        <small>${t("evidenceUpdated")} ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</small>
      </div>
      <div>
        <span>${t("evidenceAccount")}</span>
        <b>${money(accountBalance)}</b>
        <small>${t("evidenceBalanceChange")} ${money(accountBalance - PAPER_STARTING_BALANCE)}</small>
      </div>
    </div>
    <section class="evidence-log">
      <div class="evidence-log-head">
        <strong>${t("evidenceTradeLog")}</strong>
        <button type="button" data-export-trade-log ${state.tradeLog.length ? "" : "disabled"}>${t("evidenceExport")}</button>
      </div>
      ${
        latestRecords.length
          ? latestRecords
              .map((record) => `
                <article>
                  <span>${record.timestamp}</span>
                  <b>${record.action} ${record.direction} ${record.symbol}</b>
                  <small>${money(record.price)} · ${t("evidenceQuantity")} ${record.quantity} · ${t("evidenceBalanceChange")} ${money(record.accountBalanceChange)}</small>
                </article>
              `)
              .join("")
          : `<p>${t("evidenceLogEmpty")}</p>`
      }
    </section>
  `;
}

function candleStats(candles) {
  if (!candles.length) return null;
  const last = candles[candles.length - 1];
  const first = candles[0];
  const lows = candles.slice(-24).map((item) => item.low);
  const highs = candles.slice(-24).map((item) => item.high);
  return {
    last: last.close,
    change: ((last.close - first.open) / first.open) * 100,
    support: Math.min(...lows),
    resistance: Math.max(...highs),
  };
}

function renderPriceChart() {
  const canvas = $("priceChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const product = selectedProduct();
  const key = product ? candleCacheKey(product.ticker, state.timeframe) : "";
  const chart = product ? state.candles[key] : null;
  const candles = chart?.candles || [];
  document.querySelectorAll("[data-timeframe]").forEach((button) => {
    button.classList.toggle("active", button.dataset.timeframe === state.timeframe);
  });
  $("chartTitle").textContent = product ? `${product.ticker} · ${state.timeframe}` : "--";
  $("chartSourceBadge").textContent = chart?.source === "bitget" ? `${t("chartLive")} · ${chart.symbol}` : chart?.source === "loading" ? t("chartLoading") : t("chartDemo");
  $("chartComment").textContent = !product ? t("chartEmpty") : chart?.source === "bitget" ? t("chartLiveComment") : t("chartDemoComment");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!product || candles.length < 2) {
    $("chartLastPrice").textContent = "--";
    $("chartMove").textContent = "--";
    $("supportLevel").textContent = "--";
    $("resistanceLevel").textContent = "--";
    ctx.fillStyle = "#70657f";
    ctx.font = "700 22px Inter, sans-serif";
    ctx.fillText(t("chartEmpty"), 32, canvas.height / 2);
    return;
  }

  const stats = candleStats(candles);
  const decision = decisionFor(product, state.scan || computeScan());
  const market = marketSnapshot(product.ticker);
  const liveLast = market?.source === "bitget" && Number.isFinite(market.price) && market.price > 0 ? market.price : stats.last;
  $("chartLastPrice").textContent = money(liveLast);
  $("chartMove").textContent = `${stats.change >= 0 ? "+" : ""}${stats.change.toFixed(2)}%`;
  $("chartMove").className = stats.change >= 0 ? "positive" : "negative";
  $("supportLevel").textContent = money(stats.support);
  $("resistanceLevel").textContent = money(stats.resistance);
  $("chartComment").textContent = `${$("chartComment").textContent} ${t(decision.tone === "long" ? "chartTradeHintLong" : decision.tone === "short" ? "chartTradeHintShort" : "chartTradeHintNeutral")}`;

  const width = canvas.width;
  const height = canvas.height;
  const pad = { top: 20, right: 56, bottom: 54, left: 22 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const high = Math.max(...candles.map((item) => item.high));
  const low = Math.min(...candles.map((item) => item.low));
  const range = Math.max(high - low, 0.01);
  const xStep = plotW / candles.length;
  const y = (price) => pad.top + (high - price) / range * plotH;

  ctx.fillStyle = "#fbfaff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#e4ddf5";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i += 1) {
    const yy = pad.top + (plotH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, yy);
    ctx.lineTo(width - pad.right, yy);
    ctx.stroke();
  }

  ctx.setLineDash([5, 5]);
  ctx.strokeStyle = "rgba(15, 159, 110, 0.45)";
  ctx.beginPath();
  ctx.moveTo(pad.left, y(stats.support));
  ctx.lineTo(width - pad.right, y(stats.support));
  ctx.stroke();
  ctx.strokeStyle = "rgba(217, 74, 106, 0.45)";
  ctx.beginPath();
  ctx.moveTo(pad.left, y(stats.resistance));
  ctx.lineTo(width - pad.right, y(stats.resistance));
  ctx.stroke();
  ctx.setLineDash([]);

  candles.forEach((candle, index) => {
    const x = pad.left + index * xStep + xStep / 2;
    const up = candle.close >= candle.open;
    const color = up ? "#0f9f6e" : "#d94a6a";
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(x, y(candle.high));
    ctx.lineTo(x, y(candle.low));
    ctx.stroke();
    const bodyTop = y(Math.max(candle.open, candle.close));
    const bodyBottom = y(Math.min(candle.open, candle.close));
    const bodyHeight = Math.max(bodyBottom - bodyTop, 2);
    ctx.fillRect(x - Math.max(2, xStep * 0.32), bodyTop, Math.max(3, xStep * 0.64), bodyHeight);
  });

  const lastY = y(stats.last);
  ctx.fillStyle = "#201a2e";
  ctx.font = "800 12px Inter, sans-serif";
  ctx.fillText(money(stats.last), width - pad.right + 8, lastY + 4);
  ctx.fillStyle = "#70657f";
  ctx.font = "700 11px Inter, sans-serif";
  ctx.fillText(money(high), width - pad.right + 8, pad.top + 4);
  ctx.fillText(money(low), width - pad.right + 8, pad.top + plotH);
}

function renderReplay() {
  const narrative = currentNarrative();
  const activeIndex = clamp(state.replayIndex, 0, narrative.replay.length - 1);
  const active = narrative.replay[activeIndex];
  $("replayBadge").textContent = `${active.label} / ${stageLabel(active.stage)}`;
  $("replayTrack").innerHTML = narrative.replay
    .map((point, index) => `
      <button class="replay-step ${index === activeIndex ? "active" : ""}" type="button" data-replay="${index}" style="--impulse:${point.impulse};--crowding:${point.crowding}">
        <span>${point.label}</span>
        <strong>${stageLabel(point.stage)}</strong>
        <em>${point.impulse}/${point.crowding}</em>
        <i></i>
      </button>
    `)
    .join("");
  document.querySelectorAll(".replay-step").forEach((button) => {
    button.addEventListener("click", () => {
      state.replayIndex = Number(button.dataset.replay);
      const replayPoint = currentNarrative().replay[state.replayIndex];
      state.scan = {
        ...computeScan(),
        impulse: replayPoint.impulse,
        crowding: replayPoint.crowding,
        stage: replayPoint.stage,
      };
      state.basket = buildBasket(state.scan);
      if (state.position?.open) {
        state.position.legs = state.basket.map((item) => ({ ...item }));
        state.pnl = 0;
        state.tradeLog = [];
        $("sessionPnl").textContent = money(0);
        $("sessionPnl").className = "";
      }
      $("planTitle").textContent = t("planTitle", { stage: stageLabel(state.scan.stage) });
      $("planBadge").textContent = `${state.scan.impulse}/100`;
      $("tradeThesis").textContent = t("planThesis", { title: currentNarrative().title, stage: stageLabel(state.scan.stage) });
      renderPropagation();
      renderBasket();
      renderVotes();
      renderMeters();
      renderInvalidation();
      renderTradeBrief();
      renderAgentDecision();
  renderOpportunity();
      renderPriceChart();
      renderPosition();
      renderReplay();
    });
  });
}

function scanNarrative() {
  $("stageStatus").textContent = t("scanning");
  state.scan = computeScan();
  state.basket = buildBasket(state.scan);
  $("planTitle").textContent = t("planTitle", { stage: stageLabel(state.scan.stage) });
  $("planBadge").textContent = `${state.scan.impulse}/100`;
  $("tradeThesis").textContent = t("planThesis", { title: currentNarrative().title, stage: stageLabel(state.scan.stage) });
  renderPropagation();
  renderBasket();
  renderVotes();
  renderMeters();
  renderInvalidation();
  renderTradeBrief();
  renderAgentDecision();
  renderOpportunity();
  renderPriceChart();
  log(t("scanComplete"), t("scanCompleteBody", { title: currentNarrative().title, stage: stageLabel(state.scan.stage), crowding: state.scan.crowding }));
}

function deployBasket() {
  if (!state.basket.length) scanNarrative();
  const sessionId = `paper-${Date.now()}`;
  const balanceBefore = paperBalance();
  state.position = {
    open: true,
    sessionId,
    openedAt: new Date().toISOString(),
    startingBalance: balanceBefore,
    legs: state.basket.map((item) => ({ ...item })),
  };
  appendTradeRecords(state.position.legs.map((leg) => createTradeRecord({
    action: "OPEN",
    leg,
    sessionId,
    balanceBefore,
    balanceAfter: balanceBefore,
  })));
  renderPosition();
  log(t("paperBasketDeployed"), t("paperBasketDeployedBody", { title: currentNarrative().title }));
}

function legMove(leg, index) {
  const scan = state.scan || computeScan();
  const direction = leg.side === "LONG" ? 1 : -1;
  const crowdingDrag = scan.crowding > 72 ? -0.0018 : 0.0005;
  const impulse = (scan.impulse - 50) / 10000;
  return direction * (impulse + crowdingDrag + (noise(Date.now() / 10000 + index) - 0.45) * 0.006);
}

function updatePosition() {
  if (!state.position?.open) return;
  const balanceBefore = paperBalance();
  let total = 0;
  state.position.legs.forEach((leg, index) => {
    leg.mark *= 1 + legMove(leg, index);
    leg.pnl = (leg.side === "LONG" ? leg.mark - leg.entry : leg.entry - leg.mark) * leg.quantity;
    total += leg.pnl;
  });
  state.pnl = total;
  const balanceAfter = paperBalance();
  const leader = [...state.position.legs].sort((a, b) => Math.abs(b.pnl) - Math.abs(a.pnl))[0];
  if (leader) {
    appendTradeRecords([createTradeRecord({
      action: "MARK",
      leg: leader,
      sessionId: state.position.sessionId,
      balanceBefore,
      balanceAfter,
    })]);
  }
  $("sessionPnl").textContent = money(total);
  $("sessionPnl").className = total >= 0 ? "positive" : "negative";
  renderPosition();
}

function renderPosition() {
  if (!state.position) {
    $("positionTitle").textContent = t("noActiveBasket");
    $("positionBadge").textContent = t("flat");
    $("positionBoard").innerHTML = `<div><p>${t("noPositionBody")}</p></div>`;
    renderEvidence();
    return;
  }
  const total = state.position.legs.reduce((sum, leg) => sum + leg.pnl, 0);
  $("positionTitle").textContent = t("paperBasketLive");
  $("positionBadge").textContent = t(total >= 0 ? "activePositive" : "activeNegative");
  $("positionBoard").innerHTML = state.position.legs
    .map((leg) => `
      <div>
        <span>${leg.side === "LONG" ? "↗" : "↘"} ${sideLabel(leg.side)} ${leg.ticker}</span>
        <strong class="${leg.pnl >= 0 ? "positive" : "negative"}">${money(leg.pnl)}</strong>
      </div>
    `)
    .join("");
  renderEvidence();
}

function drawScenario() {
  const scan = state.scan || computeScan();
  const coreMiss = Number($("guidanceShock").value);
  const macroDrag = Number($("rateShock").value);
  const unwind = Number($("ivCrush").value);
  const reprice = scan.impulse + coreMiss * 4 - macroDrag * 5 - unwind * 3;
  const verdict = reprice > 68 ? "Press winners" : reprice < 45 ? "Close basket" : "Keep hedged";
  $("scenarioResult").innerHTML = `
    <div><span>${t("verdict")}</span><strong>${t(verdict === "Press winners" ? "pressWinners" : verdict === "Close basket" ? "closeBasket" : "keepHedged")}</strong></div>
    <div><span>${t("repriceScore")}</span><strong>${Math.round(reprice)}</strong></div>
    <div><span>${t("agentNote")}</span><p>${t(verdict === "Press winners" ? "pressBody" : verdict === "Close basket" ? "closeBody" : "keepBody")}</p></div>
  `;
}

function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("narrativeArbLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll(".lang-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  $("stageStatus").textContent = state.scan ? stageLabel(state.scan.stage) : t("unscanned");
  $("planTitle").textContent = state.scan ? t("planTitle", { stage: stageLabel(state.scan.stage) }) : t("standBy");
  $("planBadge").textContent = state.scan ? `${state.scan.impulse}/100` : t("waiting");
  $("tradeThesis").textContent = state.scan ? t("planThesis", { title: currentNarrative().title, stage: stageLabel(state.scan.stage) }) : t("thesisEmpty");
  $("propagationMap").dataset.axis = t("coreToHedge");
  renderPropagation();
  renderBasket();
  renderVotes();
  renderMeters();
  renderInvalidation();
  renderPosition();
  renderCatalysts();
  renderTradeBrief();
  renderAgentDecision();
  renderOpportunity();
  renderProductInsight();
  renderModeBanner();
  renderStockBrief();
  renderPriceChart();
  renderReplay();
  drawScenario();
}

function reset() {
  state.narrative = "aiCapex";
  state.selectedProduct = "NVDA";
  state.scan = computeScan();
  state.basket = buildBasket(state.scan);
  state.position = null;
  state.customSymbol = null;
  state.pnl = 0;
  state.tradeLog = [];
  state.replayIndex = 2;
  $("sessionPnl").textContent = "$0.00";
  $("sessionPnl").className = "";
  $("productSearch").value = "NVDA";
  $("narrativeSelect").value = "aiCapex";
  $("planTitle").textContent = t("planTitle", { stage: stageLabel(state.scan.stage) });
  $("planBadge").textContent = `${state.scan.impulse}/100`;
  $("tradeThesis").textContent = t("planThesis", { title: currentNarrative().title, stage: stageLabel(state.scan.stage) });
  renderPropagation();
  renderBasket();
  renderVotes();
  renderMeters();
  renderInvalidation();
  renderPosition();
  renderCatalysts();
  renderProductInsight();
  renderModeBanner();
  renderStockBrief();
  renderTradeBrief();
  renderAgentDecision();
  renderOpportunity();
  renderPriceChart();
  renderReplay();
  refreshMarketData(state.selectedProduct);
  refreshCandles(state.selectedProduct, state.timeframe);
  log(t("reset"), t("resetBody"));
}

function init() {
  state.scan = computeScan();
  $("productSearch").value = state.selectedProduct || "";
  state.basket = buildBasket(state.scan);
  renderPropagation();
  renderBasket();
  renderVotes();
  renderMeters();
  renderInvalidation();
  renderPosition();
  renderCatalysts();
  renderProductInsight();
  renderModeBanner();
  renderStockBrief();
  renderTradeBrief();
  renderAgentDecision();
  renderOpportunity();
  renderPriceChart();
  renderReplay();
  drawScenario();
  $("planTitle").textContent = t("planTitle", { stage: stageLabel(state.scan.stage) });
  $("planBadge").textContent = `${state.scan.impulse}/100`;
  $("tradeThesis").textContent = t("planThesis", { title: currentNarrative().title, stage: stageLabel(state.scan.stage) });
  refreshMarketData(state.selectedProduct);
  refreshCandles(state.selectedProduct, state.timeframe);
}

$("narrativeSelect").addEventListener("change", (event) => {
  state.narrative = event.target.value;
  state.replayIndex = 2;
  state.selectedProduct = currentNarrative().nodes[0]?.ticker || null;
  state.customSymbol = null;
  state.scan = computeScan();
  state.basket = buildBasket(state.scan);
  state.position = null;
  state.pnl = 0;
  state.tradeLog = [];
  $("productSearch").value = state.selectedProduct || "";
  $("sessionPnl").textContent = "$0.00";
  $("sessionPnl").className = "";
  $("planTitle").textContent = t("planTitle", { stage: stageLabel(state.scan.stage) });
  $("planBadge").textContent = `${state.scan.impulse}/100`;
  $("tradeThesis").textContent = t("planThesis", { title: currentNarrative().title, stage: stageLabel(state.scan.stage) });
  renderPropagation();
  renderBasket();
  renderVotes();
  renderMeters();
  renderInvalidation();
  renderPosition();
  renderCatalysts();
  renderTradeBrief();
  renderAgentDecision();
  renderOpportunity();
  renderProductInsight();
  renderModeBanner();
  renderStockBrief();
  renderPriceChart();
  renderReplay();
  drawScenario();
  refreshMarketData(state.selectedProduct);
  refreshCandles(state.selectedProduct, state.timeframe);
  log(t("narrativeChanged"), t("narrativeChangedBody", { title: currentNarrative().title }));
});
$("styleSelect").addEventListener("change", (event) => {
  state.style = event.target.value;
  state.scan = computeScan();
  state.basket = buildBasket(state.scan);
  $("planTitle").textContent = t("planTitle", { stage: stageLabel(state.scan.stage) });
  $("planBadge").textContent = `${state.scan.impulse}/100`;
  $("tradeThesis").textContent = t("planThesis", { title: currentNarrative().title, stage: stageLabel(state.scan.stage) });
  renderPropagation();
  renderBasket();
  renderVotes();
  renderMeters();
  renderInvalidation();
  renderTradeBrief();
  renderAgentDecision();
  renderOpportunity();
  renderPriceChart();
  renderReplay();
  log(t("styleChanged"), t("styleChangedBody", { style: t(state.style) }));
});
$("riskSlider").addEventListener("input", (event) => {
  $("riskValue").textContent = `${event.target.value}%`;
  renderTradeBrief();
});
$("productSearch").addEventListener("input", async (event) => {
  const query = event.target.value.trim();
  const ticker = query.toUpperCase();
  const product = findProductByInput(query);
  if (!product) {
    state.selectedProduct = ticker || null;
    state.customSymbol = ticker
      ? {
          ticker,
          role: "Bitget symbol",
          price: 0,
          heat: 50,
          lag: 0,
          side: "LONG",
          weight: 1,
          narrativeKey: state.narrative,
          narrativeTitle: "Bitget Spot",
          upstream: [],
          downstream: [],
        }
      : null;
    renderProductInsight();
    renderModeBanner();
    renderStockBrief();
    renderPropagation();
    renderAgentDecision();
    renderOpportunity();
    renderPriceChart();
    if (ticker) {
      refreshMarketData(ticker);
      refreshCandles(ticker, state.timeframe);
    }
    return;
  }
  state.customSymbol = null;
  state.selectedProduct = product.ticker;
  if (ticker !== product.ticker) $("productSearch").value = product.ticker;
  if (state.narrative !== product.narrativeKey) {
    state.narrative = product.narrativeKey;
    $("narrativeSelect").value = product.narrativeKey;
    state.scan = null;
    state.basket = [];
    state.position = null;
    state.pnl = 0;
    state.tradeLog = [];
    state.replayIndex = 2;
    $("sessionPnl").textContent = "$0.00";
    $("sessionPnl").className = "";
    $("planTitle").textContent = t("standBy");
    $("planBadge").textContent = t("waiting");
    $("tradeThesis").textContent = t("thesisEmpty");
  }
  renderPropagation();
  renderBasket();
  renderVotes();
  renderMeters();
  renderInvalidation();
  renderPosition();
  renderCatalysts();
  renderTradeBrief();
  renderAgentDecision();
  renderOpportunity();
  renderProductInsight();
  renderModeBanner();
  renderStockBrief();
  renderPriceChart();
  renderReplay();
  drawScenario();
  refreshMarketData(product.ticker);
  refreshCandles(product.ticker, state.timeframe);
});
document.querySelectorAll(".lang-option").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});
document.querySelectorAll("[data-quick-symbol]").forEach((button) => {
  button.addEventListener("click", () => {
    $("productSearch").value = button.dataset.quickSymbol;
    $("productSearch").dispatchEvent(new Event("input", { bubbles: true }));
  });
});
document.addEventListener("click", (event) => {
  const picker = event.target.closest("[data-pick-ticker]");
  if (!picker) return;
  $("productSearch").value = picker.dataset.pickTicker;
  $("productSearch").dispatchEvent(new Event("input", { bubbles: true }));
});
document.addEventListener("click", (event) => {
  const exporter = event.target.closest("[data-export-trade-log]");
  if (!exporter || exporter.disabled) return;
  downloadTradeLog();
});
document.querySelectorAll("[data-timeframe]").forEach((button) => {
  button.addEventListener("click", () => {
    state.timeframe = button.dataset.timeframe;
    refreshCandles(selectedProduct()?.ticker, state.timeframe);
  });
});
$("scanBtn").addEventListener("click", scanNarrative);
$("deployBtn").addEventListener("click", deployBasket);
$("resetBtn").addEventListener("click", reset);
["guidanceShock", "rateShock", "ivCrush"].forEach((id) => $(id).addEventListener("input", drawScenario));
window.setInterval(updatePosition, 2800);

init();
applyLanguage(localStorage.getItem("narrativeArbLang") || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en"));
