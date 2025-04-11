# 📰 The Times Graphics Components

Welcome to **The Times Graphics Components**, a collection of React-based components designed for interactive graphics and data visualizations.

<p style="margin: 50px 0" align="center">
  <img src="./public/logo.png" alt="The Times" width="400">
</p>


---

## ⚠️ Requirements

This library requires **React 19 or higher**.  
Please make sure your project is using React 19+ to avoid runtime errors related to JSX transformations.


---

## 🚀 Installation

To install the dependencies, run:

```bash
yarn install
```

## 🔐 Internal Usage Only

This package is published to **GitHub Packages** under the `@times` scope, and is intended for internal use by teams at The Times / NewsCorp only.

### Local development setup

To install this package locally, you need:

1. A GitHub personal access token (classic) with `read:packages` permission
2. A `.npmrc` file configured like this:

```ini
@times:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
registry=https://registry.npmjs.org/
```

<!-- ## 🚀 Usage

To use the components in your project:

```bash
import { ComponentName } from 'the-times-graphics-components';

<ComponentName prop="value" />
``` -->

## 🏗 Development

To start the Storybook environment:

```bash
yarn storybook
```

## 📦 Deployment

To deploy Storybook to GitHub Pages:

```bash
yarn deploy-storybook
```



## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository.
2. **Create a new branch**:
```bash
   git checkout -b feature-branch
```
3. **Run ESLint and fix issues before committing:**
```bash
   yarn lint
``` 
4. **Make your changes and commit them:**:
```bash
   git commit -m "Add new feature"
   ``` 
5. **Push to your branch:**:
```bash
   git push origin feature-branch
   ```
6. **Open a pull request on GitHub.**