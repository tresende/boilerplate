
![](https://badges.aleen42.com/src/react.svg)
![](https://img.shields.io/badge/e2s--test-cypress-red)
![](https://img.shields.io/badge/unit--test-jest-brightgreen)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![](https://badges.aleen42.com/src/eslint.svg)

# boilerplate ๐
Next App :)

## Stack ๐ฅ

#### Main
- Next
- React
- Webpack

#### Style
- Styled components

#### Test

![](./badges/badge-branches.svg)
![](./badges/badge-functions.svg)
![](./badges/badge-lines.svg)
![](./badges/badge-statements.svg)

- Jest + React Testing Library (unit tests)
- Cypress (e2e tests)

## Initialization ๐ 

Clone the repository:
```sh
git clone https://github.com/tresende/boilerplate
```
Install npm packages:

```sh
yarn
```

## Running ๐จโ๐ป

```sh
yarn dev
```
* Open [http://localhost:3000](http://localhost:3000)

* Have fun coding!

## Testing unit ๐งช

```sh
yarn test
```

## Testing e2e ๐งช

```sh
yarn cy:open #for dev

yarn test:e2e:ci #for ci
```

## Build ๐

โ ๏ธ Wait! This step happens automatically in pipeline, it's not necessary run build manually
```sh
yarn build
```

## DevTools ๐ 

### Package Manager

* [YARN](https://yarnpkg.com/)

### Text Editor

* [Visual Studio Code](http://code.visualstudio.com)

### Necessary Packages to configure in editor

* [EditorConfig](http://editorconfig.org)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)


### Folder Structure
๐ฆ **reviwer** <br />
 โฃโ ๐  **.dependabot** | *dependabot settings* <br />
 โฃโ ๐  **.jest** | *test and global mock settings* <br />
 โฃโ ๐  **.vscode** | *vscode debug and eslint settings* <br />
 โฃโ ๐  **badges** | *documentation stuff* <br />
 โฃโ ๐  **cypress** | *end 2 end tests(cypress stuffs)* <br />
 โฃโ ๐  **public** | *static files(img, mp4, etc)* <br />
 โฃโ ๐  **src** <br />
 โ โฃโ ๐  **components** | *react shared components* <br />
 โ โฃโ ๐  **config** | *configuration classes* <br />
 โ โฃโ ๐  **hooks** | *some hooks for global state* <br />
 โ โฃโ ๐  **pages** | *nextjs pages* <br />
 โ โฃโ ๐  **services** | *business rules* <br />
 โ โฃโ ๐  **styles** | *global css settings* <br />
 โ โฃโ ๐  **templates** | *components for pages* <br />
 โ โฃโ ๐  **types** | *common types* <br />
 โ โโ ๐  **utils** | *mappers, converters, etc* <br />


---
