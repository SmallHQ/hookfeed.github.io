## First time pulling down

```bash
$ git clone git@github.com:HookFeed/hookfeed.github.io.git
$ cd hookfeed.github.io
$ git remote rename origin github
$ bundle install --path vendor
```

## Pulling down updates

```bash
$ git pull
$ bundle
```

## Working on a new feature/bug/refactor

#### Create the given feature, refactor, or bug branch, make sure you're currently on the master branch:

```bash
$ git feature [name]
```

Afterwards, the same command will check out the branch:

```bash
$ git feature [name]
```

#### Push to GitHub:

```bash
$ git push -u github feature/[name]
```

#### Do some work, make some commits, push some more. 

```bash
$ git add -A
$ git commit -m 'description of changes'
$ git push
```

#### Open a pull request on github when ready (to merge or to discuss), and mention me if necessary in the description of your pull request:

```bash
$ git pull-request
```

#### Future dialog/merges will take place on GitHub. To make more changes to your feature, just commit to the feature locally and push to GitHub. They will automatically be attached to the open pull request.

*All of this works with `feature`, `bug`, or `refactor`.*

## Running a development server

```bash
$ mm server
```

## Deploying to production

```bash
$ mm deploy
```

