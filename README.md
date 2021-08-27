# custom-routing-tester

Simple tester for trying out custom routes and presets.

Read more on the Skynet Developer Documentation for [Framework-Flexible Routing](https://docs.siasky.net/skynet-topics/framework-flexible-routing).

## Running

1. Clone repo and `cd` into dir.
2. Run `yarn`
3. Run `yarn skynet [folderInBuilds] [routingPreset]`

> This uses a `skynet-nodejs` build from the main branch. You can clone it in another repo and run `yarn` then `yarn link`. Then, back this this directory, run `yarn link @skynetlabs/skynet-nodejs` to run your local build of the library. Hopefully this isn't needed with next release.

Currently there are 3 folders in `builds` as sample projects to deploy:

- `react-router` - a simple react-router tutorial taken from web
- `siasky` - Skynet Labs homepage build
- `small-build` - minimal html only site

Currently there are 3 `routingPreset` options:

- `traditional` (Default if arg not supplied.)
- `gatsby`
- `gatsbyStatic`
- `reactRouter`
