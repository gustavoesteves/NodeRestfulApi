# 03 - Section

## npm

Install a package

```sh
npm i <packageName>
```

Install a specific version of a package

```sh
npm i <packageName>@<version>
```

Install a package as a development dependency

```sh
npm i <packageName> —save-dev
```

Uninstall a package

```sh
npm un <packageName>
```

List installed packages

```sh
npm list —depth=0
```

View outdated packages

```sh
npm outdated
```

Update packages

```sh
npm update
```

npm-check-updates upgrades your package.json dependencies to the latest versions, ignoring specified versions.

```sh
npm install -g npm-check-updates
```

## Publishing a npm package

. Create a project
. Login on npm
. Publish

```sh
npm init <project>
npm login
npm publish
```

If you want to update the published npm package you just need to change de version on the package.json and publish the project again.
Or we can use npm version <major, minor, patch>.

```sh
npm version <major, minor, patch>
```


