## First time pulling down

```bash
$ git clone git@github.com:HookFeed/hookfeed.github.io.git
$ bundle install --path vendor
```

## Pulling down updates

```bash
$ git pull
$ bundle
```

## Working on a new feature/bug/refactor

Create the given feature, refactor, or bug branch, make sure you're currently on the master branch:

```bash
$ git feature [name]
```

Afterwards, the same command will check out the branch:

```bash
$ git feature [name]
```

When finished, we can `feature finish` to merge it into the current branch:

```bash
$ git checkout master
$ git feature finish [name]
```

All of this works with `feature`, `bug`, or `refactor`.

## Running a development server

```bash
$ mm server
```

## Deploying to production

```bash
$ mm deploy
```

