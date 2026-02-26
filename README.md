

## Getting Started

First clone the repo:
```bash
git clone https://github.com/mercy-korir600/FeastRush.git

cd FeastRush

code .

npm install
```

To create a new role, eg admin:

``` bash
git checkout -b users


npm run create:role users

```


To create a new feature, eg authentication under the role folder admin run the following in the terminal:

``` bash
git checkout -b users/ft/restaurants


npm run create:feature admin restaurants

```


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To push your changes to github:

if working under a role folder such as admin:

```bash
git add .
git commit -m "users/ft/restaurants => commit message"

git push origin users/ft/restaurants
```

```bash
On github open a PR and request review from either SebbieMzingKe or 1king-sly and await for updates

```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


