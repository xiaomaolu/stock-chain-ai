# Stock Chain AI

Stock Chain AI is a lightweight US-stock AI trading demo for the Bitget AI Hackathon.

The product helps a user search a US stock, understand what the company does, see its upstream and downstream market chain, check price action, and get a simple AI trading setup. The goal is to find smaller or second-order names that may be ignored while a larger market theme is rising or falling.

## Quick Start

This is a static front-end demo. No build step is required.

```bash
python -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

You can also open `index.html` directly in a browser, but using a local server is recommended because the app calls Bitget public market APIs.

## What It Does

- Search by ticker or common names, such as `NVDA`, `Nvidia`, or `英伟达`.
- Show a short stock introduction in English and Chinese.
- Visualize the industry chain: leaders, catch-up names, weak names, and related stocks.
- Draw a K-line chart with `15m`, `1h`, `4h`, and `1d` views.
- Use Bitget public market data for real Bitget spot symbols such as `BTCUSDT`.
- Clearly mark US-stock chain prices as demo data when Bitget does not list a matching symbol.
- Generate a simple AI opportunity card with action, target, trigger, stop, confidence, risk, and price signal.
- Generate an auditable paper-trading log with timestamp, symbol, direction, price, quantity, notional, account balance change, PnL, and data source.

## Data Boundary

Bitget public spot data is used only when the symbol exists in Bitget's public symbol list.

For example:

- `BTCUSDT` uses live Bitget ticker and K-line data.
- `NVDA` is a US-stock chain demo if Bitget does not list a matching public spot symbol.

The app intentionally avoids fuzzy symbol matching. A Bitget token such as `NVDAONUSDT` is not treated as US stock `NVDA`, because that would create misleading prices.

## Submission Materials

- GitHub repository / demo source: <https://github.com/xiaomaolu/stock-chain-ai>
- README / project explanation: <https://github.com/xiaomaolu/stock-chain-ai/blob/main/README.md>
- Sample paper-trading log: <https://github.com/xiaomaolu/stock-chain-ai/blob/main/sample-trading-log.json>

The in-app **Usage evidence** card also shows the current data source, AI candidate, simulated trade record, paper PnL, account balance, and latest audit records. Click **Download JSON** after starting a paper trade to export the current run.

## Hackathon Fit

Track: US Stock AI Trading / Trading Agent

Submission description, under 200 words:

Stock Chain AI helps users find overlooked opportunities around tokenized US-stock trading themes. A user can search a stock such as NVDA, read a plain-English company brief, inspect upstream/downstream chain exposure, compare related names, and receive a simple AI-generated paper-trading setup. The app separates live Bitget market data from demo US-stock chain data: real Bitget spot symbols such as BTCUSDT use public ticker and K-line data, while US-stock chain examples are clearly marked when Bitget does not list the matching symbol. The strategy loop is perception → chain mapping → candidate ranking → paper trade → risk explanation. The demo includes a visible usage-evidence card showing data source, AI candidate, simulated trade record, and paper PnL.

The demo shows:

- Market perception through Bitget live market data where available.
- AI-style stock recognition and industry-chain mapping.
- Multi-timeframe K-line analysis.
- Strategy suggestions focused on overlooked catch-up or hedge candidates.
- Clear execution boundaries: live market data, demo US-stock chain data, and paper trading only.
- Verifiable demo evidence through visible sim records and paper PnL.

## Demo Flow

1. Open the app and search `NVDA` or `英伟达` to view the US-stock chain demo.
2. Click related stocks to see how the AI maps the theme.
3. Switch between `15m`, `1h`, `4h`, and `1d`.
4. Search `BTCUSDT` to verify live Bitget ticker and K-line integration.
5. Read the AI opportunity card for a simple paper-trading setup.
6. Click **Start paper trade** to generate a visible sim record in the Usage Evidence card.
7. Click **Download JSON** in the Usage Evidence card to export the paper-trading audit log.

## Current Limitations

- The app does not place real orders.
- US-stock chain prices are demo data unless the searched symbol exists in Bitget public spot markets.
- The current strategy is a transparent rule-based Agent demo, not a trained predictive model.
- Backtesting, broker execution, portfolio-level risk, and real US-stock market-data APIs are planned future work.

This demo does not place real orders and does not provide financial advice.
