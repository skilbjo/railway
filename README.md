# railway

## what

use railway.app to demo functionality. railway provides on-demand data stores,
which can be easily pointed-to during development.

ie, instead of needing to load env vars in your local shell, you configure your
railway setup to point your development infrastructure to dev. wrap the rest of
your code in a `railway run` call.

ie if normally you run

```
DATABASE_URL=postgresql://user:pass@host:port/db node main.mjs 'select now()'
```

with railway, it's

```
railway run node main.mjs 'select now()'
```

sample app here takes in a sql query, and returns the results.

## run it

```bash
railway-run-it 'select now()'
```

returns:

```bash
[ { now: 2020-12-17T19:14:45.093Z } ]
```
