# vite-vs-turbo-benchmarks
Why not a try?

## How I create the two major?

Almost like Evan You ([methodology](https://github.com/yyx990803/vite-vs-next-turbo-hmr#methodology)) mentioned about.

## Test suites

0. 100 ~ 10000 components first load render and HMR.  

```
// more are wiping
1. 100 ~ 10000 components first load render and HMR.
2. 100 ~ 10000 components HMR with dynamic additions and deletions.
```
details please see the file in folder `scripts`

## Environment

+ **Node** v14.20.0
+ **pnpm** 7.9.0 **npm** 6.14.17
+ **System** Windows 10 21H1 19043.2130
+ **Hardware** Intel(R) Core(TM) i7-9700 CPU @ 3.00GHz 3.00 GHz, 32GB RAM, Disk SAMSUNG MZVLB512HAJQ-00000 500GB(C:...Desktop)

## Try now

+ At root dir `pnpm install`.

```bash
> node scripts/cli.js --help
> pnpm vt -c 1000 # test vite 1000 components
> pnpm nt -c 1000 # test nextjs 1000 components
> pnpm vt -r # restore vite (remove components and restore App.jsx)
> pnpm nt -r # restore nextjs (same)
```
## NOTE

When testing first reload, the service worker of **nextjs** should be unregistered from `edge://serviceworker-internals/` (or chrome whatever), to keep page as status **ERR_CONNECTION_REFUSED**

## Results

