# IIS Lab Website

React + TypeScript + Vite rebuild of [Interactive Intelligent Systems Laboratory](https://iis-lab.org/) at The University of Tokyo.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/` — route pages (Home, Research, Publications, Members, DLS, What's up?, Contact, Join)
- `src/data/` — site content (news, members, bilingual copy)
- `src/components/` — layout, header, footer, bilingual sections, news timeline

## Deploy

### GitHub Pages（自动部署）

1. 将仓库推送到 GitHub。
2. 打开 **Settings → Pages**，**Build and deployment** 选择 **GitHub Actions**。
3. 向 `main` 分支推送代码后，[Deploy workflow](.github/workflows/deploy.yml) 会自动构建并发布 `dist/`。

- 普通仓库地址：`https://<user>.github.io/<repo>/`
- 若仓库名为 `<user>.github.io`，站点根路径为 `/`（无需子路径前缀）

本地构建与线上一致（子路径示例）：

```bash
VITE_BASE_PATH=/iis-lab/ npm run build
```

`npm run build` 会生成 `dist/404.html`，用于 GitHub Pages 上的客户端路由回退。

### 其他静态托管

`dist/` 也可部署到 Netlify、Vercel 等；需配置 SPA 回退到 `index.html`。
