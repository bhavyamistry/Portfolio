<h1 align="center"> Software Developer Portfolio 🔥 </h1> 
<h3 align="center"> A clean, beautiful, responsive, and 100% customizable portfolio <br /> template for Software Developers! </h3>

<p align="center">
  <a href="http://hits.dwyl.com/bhavyamistry/Portfolio"><img alt="HitCounts" src="http://hits.dwyl.com/bhavyamistry/Portfolio.svg" /></a>
  <a href="https://nodejs.org/en/blog/release/v20.11.1"><img alt="NodeJS" src="https://img.shields.io/badge/node-20.11.1-important?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/npm/v/10.2.4"><img alt="NPM" src="https://img.shields.io/badge/npm-10.2.4-blueviolet?style=flat-square" /></a>
  <a href="https://reactjs.org/"><img alt="Made With React" src="https://img.shields.io/badge/made%20with-react-61DAFB?style=flat-square" /></a>
  <a href="https://join.slack.com/t/Portfolio/shared_invite/zt-g772n1fo-Ns4usanURF8jVb8wk2lRAA"><img alt="Join Slack Channel For Support" src="https://img.shields.io/badge/slack-Portfolio-yellow.svg?logo=slack?style=flat-square" /></a>
  <a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square?style=flat-square" /></a>
  <br/>
  <a href="https://app.netlify.com/sites/bhavyamistryportfolio/deploys"><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/abf59f82-3251-4040-b24c-949b86691642/deploy-status?style=flat-square" /></a>
  <a href="https://travis-ci.org/badges/badgerbadgerbadger"><img alt="Build Status" src="http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square?style=flat-square" /></a>
  <a href="http://badges.mit-license.org/"><img alt="License" src="http://img.shields.io/:license-mit-blue.svg?style=flat-square?style=flat-square" /></a>
  <a href="https://github.com/bhavyamistry/Portfolio/commits/master"><img alt="Maintenance" src="https://img.shields.io/badge/maintained-yes-green.svg?style=flat-square" /></a>
  <a href="http://badges.mit-license.org/"><img alt="Website" src="https://img.shields.io/badge/website-up-yellow?style=flat-square" /></a>
  <a href="https://bhavyamistry.github.io/"><img alt="License" src="http://img.shields.io/:license-mit-blue.svg?style=flat-square?style=flat-square" /></a>
  <a href="https://img.shields.io/badge/price-free-ff69b4"><img alt="Price" src="https://img.shields.io/badge/price-free-ff69b4?style=flat-square" /></a>
</p>

<p align="center"> 
    <a href="https://bhavyamistry.github.io" target="_blank">
    <img src="https://github.com/bhavyamistry/Portfolio/assets/58860047/10425e7a-9abf-40a7-8621-3d35dd444997"></img>
  </a>
</p>

:star: Star us on GitHub — it helps!

# Sections 📚

✔️ Summary and About me\
✔️ Skills \
✔️ Experience\
✔️ Certifications 🏆\
✔️ Education\

To view a live example, **[click here](https://bhavyamistry.github.io/)**

# Clone and Use 📋

- The website is completely built on `react-js` library of `javascript` and that's why we need `nodejs` and `npm` installed
- While installing `nodejs` and `npm`, try to install versions which are equal or greater than the versions mentioned in badges above
- In case you want to help developing it or simply saving it, you can fork the repository just by clicking the button on the top-right corner of this page
- After the successful installation of `nodejs` and `npm`, clone the repository into your local system using below command:
  ```bash
   git clone https://github.com/bhavyamistry/Portfolio.git
  ```
  This will clone the whole repository in your system.
- To download required dependencies to your system, navigate to the directory where the cloned repository resides and execute following command:
  ```node
  npm install
  ```
- Now the project is ready to use
- You can check it using `npm start`, it will open the website locally on your browser.

# Customize it to make your own portfolio ✏️

In this project, there are basically 4 things that you need to change to customize this to anyone else's portfolio: **package.json**, **Personal Information**, **Github Information** and **Splash Logo**.

### package.json

Open this file, which is in the main cloned directory, choose any "name" and change "homepage " to `https://<your-github-username>.github.io`. Do not forget the `https://`, otherwise fonts will not load.

### Personal Information

You will find `src/portfolio.js` file which contains the complete information about the user. The file looks something like below:

```javascript
// Home Page
const greeting = {
    ...
}

// Social Media
const socialMediaLinks = {
    ...
}

...
```

You can change the personal information, experience, education, social media, certifications, blog information, contact information etc. in `src/portfolio.js` to directly reflect them in portfolio website.

### How to change the icons on homepage under what i do section?

1. This section pulls data from `skills` in portfolio.js file.
2. Visit this website: https://icon-sets.iconify.design/
3. Search for the skill you are looking to add.
4. Select the icon of your choice.
5. Copy the text beside **Selected Icon** and replace it with `fontAwesomeClassName` of that particular softwareSkill.

#### How to use custom images instead of Iconify Icons?

1. Add a valid image file into the `public/skills` folder
2. Insert the image name into the `imageSrc` attribute of the particular softwareSkill
3. Remove the `fontAwesomeClassName` property or leave it empty because it takes precedence over `imageSrc`
4. Add custom styling to the `img` using the `style` Property

### Github Information

You will find `git_data_fetcher.mjs` file in the main directory of the repository. This file is used to fetch the data (Pull requests, Issues, Organizations, Pinned projects etc.) from your github.

In the project you will see a `env.example` file, create a new file named `.env` and copy contents of `env.example` into it. In that file, you will see the following environment variables

```javascript
GITHUB_TOKEN = your_token;
GITHUB_USERNAME = your_username;
```

You can get a github token as described [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Give all permissions while generating token. Add your github username and the token generated in `GITHUB_USERNAME` and `GITHUB_TOKEN` variables in the .env file.

Now, you need to run following command. (Make sure you executed `npm install` before this)

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

```node
node git_data_fetcher.mjs
```

This will fetch all the data from your github and it will automatically replace my data with yours.
Whenever you want to update the github related information on the website you need to run this command.

# Choose Theme 🌈

- You can take a look at `src/theme.js` file where all available themes are mentioned with their respective color codes
- At the bottom of this file you will see the below code:
  - `export const chosenTheme = blueTheme;`
  - You need to change the name from `blueTheme` to whatever theme you want to set your website to
  - You can define new theme similarly as other themes and you can assign name of that new defined theme to `chosenTheme`
- That's it. You just need to change the theme name and the code will take care of everything else
- Run `npm start` to check if everything is ok.

# Deployment 📦

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY.
- To deploy your website, you have two options. First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Now, you need to generate a production build and deploy the website.

**Option 1:**

- Run `npm run build` to generate the production build folder.
- Enter the build folder, `git init` and push the generated code to the `master` branch of your new repository on github. That's it. It's Done.
- You may need to `git init` and force push at every new build.

**Option 2 (will not work with [user pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)):**

- Run `npm run deploy` to build and create a branch called `gh-pages`. It will push the `build` files to that branch.
- The last step in deploying is to enable `Github Pages` in settings of the repository and select `gh-pages` branch.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.  
If you are stuck somewhere and want to observe the deployment process in depth, then please watch below video.


# Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

# illustrations 🍥

- [UnDraw](https://undraw.co/illustrations)

# License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

# Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://bhavyamistry.github.io"><img src="https://github.com/bhavyamistry/Portfolio/assets/58860047/4d768d7a-ee9e-4ae8-8eb3-25bbe1bb0225" width="100px;" alt="Bhavya Mistry"/><br /><sub><b>Bhavya Mistry</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=bhavyamistry" title="Code">💻</a> <a href="https://github.com/bhavyamistry/Portfolio/commits?author=bhavyamistry" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://danielmarostica.github.io/"><img src="https://avatars3.githubusercontent.com/u/3595998?v=4?s=100" width="100px;" alt="Daniel Marostica"/><br /><sub><b>Daniel Marostica</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=danielmarostica" title="Documentation">📖</a> <a href="#design-danielmarostica" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dineshnadimpalli.com"><img src="https://avatars2.githubusercontent.com/u/13104926?v=4?s=100" width="100px;" alt="Dinesh Nadimpalli"/><br /><sub><b>Dinesh Nadimpalli</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=dineshnadimpalli" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jivthesh.github.io"><img src="https://avatars3.githubusercontent.com/u/20579980?v=4?s=100" width="100px;" alt="Jivthesh M R"/><br /><sub><b>Jivthesh M R</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=jivthesh" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jatinchauhan.tech"><img src="https://avatars2.githubusercontent.com/u/40722235?v=4?s=100" width="100px;" alt="Jatin Chauhan"/><br /><sub><b>Jatin Chauhan</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=mrjatinchauhan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://th3c0d3br34ker.github.io/"><img src="https://avatars1.githubusercontent.com/u/60807938?v=4?s=100" width="100px;" alt="Jainam Desai"/><br /><sub><b>Jainam Desai</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=th3c0d3br34ker" title="Code">💻</a> <a href="#question-th3c0d3br34ker" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://miftaulmannan.wordpress.com/"><img src="https://avatars0.githubusercontent.com/u/42533823?v=4?s=100" width="100px;" alt="Miftaul Mannan"/><br /><sub><b>Miftaul Mannan</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=Tasin5541" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://a-mishra.github.io"><img src="https://avatars0.githubusercontent.com/u/10567548?v=4?s=100" width="100px;" alt="Ashutosh Mishra"/><br /><sub><b>Ashutosh Mishra</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=a-mishra" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://tamojit.wixsite.com/mrtamojit"><img src="https://avatars0.githubusercontent.com/u/40804626?v=4?s=100" width="100px;" alt="Tamojit"/><br /><sub><b>Tamojit</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=tamojit-123" title="Documentation">📖</a> <a href="https://github.com/bhavyamistry/Portfolio/commits?author=tamojit-123" title="Code">💻</a> <a href="#design-tamojit-123" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://prabin-karki.com.np"><img src="https://avatars.githubusercontent.com/u/43983896?v=4?s=100" width="100px;" alt="Prabin Karki"/><br /><sub><b>Prabin Karki</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=githubprabin143" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://praveen.science/"><img src="https://avatars.githubusercontent.com/u/1830380?v=4?s=100" width="100px;" alt="Praveen Kumar Purushothaman"/><br /><sub><b>Praveen Kumar Purushothaman</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=praveenscience" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://baul.ml"><img src="https://avatars.githubusercontent.com/u/33395806?v=4?s=100" width="100px;" alt="paul"/><br /><sub><b>paul</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=baulml" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SandipDhang"><img src="https://avatars.githubusercontent.com/u/50694884?v=4?s=100" width="100px;" alt="Sandip Dhang"/><br /><sub><b>Sandip Dhang</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=SandipDhang" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ioribrn"><img src="https://avatars.githubusercontent.com/u/43734587?v=4?s=100" width="100px;" alt="Jawad Moustadif"/><br /><sub><b>Jawad Moustadif</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=ioribrn" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/priyanshk20"><img src="https://avatars.githubusercontent.com/u/52736997?v=4?s=100" width="100px;" alt="Priyansh Khandelwal"/><br /><sub><b>Priyansh Khandelwal</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=priyanshk20" title="Code">💻</a> <a href="#design-priyanshk20" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abdslam01"><img src="https://avatars.githubusercontent.com/u/59281502?v=4?s=100" width="100px;" alt="Abdessalam Bahafid"/><br /><sub><b>Abdessalam Bahafid</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=abdslam01" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dhruvkrishnavaid.github.io"><img src="https://avatars.githubusercontent.com/u/69188774?v=4?s=100" width="100px;" alt="Dhruv Krishna Vaid"/><br /><sub><b>Dhruv Krishna Vaid</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=dhruvkrishnavaid" title="Code">💻</a> <a href="https://github.com/bhavyamistry/Portfolio/commits?author=dhruvkrishnavaid" title="Documentation">📖</a> <a href="#ideas-dhruvkrishnavaid" title="Ideas, Planning, & Feedback">🤔</a> <a href="#question-dhruvkrishnavaid" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kasroudra.github.io"><img src="https://avatars.githubusercontent.com/u/78908440?v=4?s=100" width="100px;" alt="KasRoudra"/><br /><sub><b>KasRoudra</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=KasRoudra" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://telegram.dog/AlbertEinstein_TG"><img src="https://avatars.githubusercontent.com/u/73480087?v=4?s=100" width="100px;" alt="Albert Einstein"/><br /><sub><b>Albert Einstein</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=AlbertEinsteinTG" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SurajPratap10"><img src="https://avatars.githubusercontent.com/u/92919173?v=4?s=100" width="100px;" alt="Suraj Pratap"/><br /><sub><b>Suraj Pratap</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=SurajPratap10" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lightmap.dev"><img src="https://avatars.githubusercontent.com/u/40917760?v=4?s=100" width="100px;" alt="Sai Teja"/><br /><sub><b>Sai Teja</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=saiteja13427" title="Code">💻</a> <a href="https://github.com/bhavyamistry/Portfolio/commits?author=saiteja13427" title="Documentation">📖</a> <a href="#maintenance-saiteja13427" title="Maintenance">🚧</a> <a href="#ideas-saiteja13427" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://anirudhpanda.in/"><img src="https://avatars.githubusercontent.com/u/66218496?v=4?s=100" width="100px;" alt="Anirudh Panda"/><br /><sub><b>Anirudh Panda</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=AnirudhPanda" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://hidayat7z.github.io"><img src="https://avatars.githubusercontent.com/u/63554016?v=4?s=100" width="100px;" alt="Md Hidayat Rasool"/><br /><sub><b>Md Hidayat Rasool</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=hidayat7z" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/siddhantsadangi/"><img src="https://avatars.githubusercontent.com/u/41324509?v=4?s=100" width="100px;" alt="Siddhant Sadangi"/><br /><sub><b>Siddhant Sadangi</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=SiddhantSadangi" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://anoopvarghese.in/"><img src="https://avatars.githubusercontent.com/u/59723767?v=4?s=100" width="100px;" alt="Anoop V"/><br /><sub><b>Anoop V</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=vanoop729" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aash1999"><img src="https://avatars.githubusercontent.com/u/39939476?v=4?s=100" width="100px;" alt="Aakash Singh"/><br /><sub><b>Aakash Singh</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=aash1999" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://aherrera3.github.io/"><img src="https://avatars.githubusercontent.com/u/52289646?v=4?s=100" width="100px;" alt="Angélica Herrera Alba"/><br /><sub><b>Angélica Herrera Alba</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=aherrera3" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://davidminkovski.com"><img src="https://avatars.githubusercontent.com/u/1609264?v=4?s=100" width="100px;" alt="David Minkovski"/><br /><sub><b>David Minkovski</b></sub></a><br /><a href="#ideas-dminkovski" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/bhavyamistry/Portfolio/commits?author=dminkovski" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://cdigruttola.it"><img src="https://avatars.githubusercontent.com/u/9153905?v=4?s=100" width="100px;" alt="Carmine Di Gruttola"/><br /><sub><b>Carmine Di Gruttola</b></sub></a><br /><a href="#ideas-cdigruttola" title="Ideas, Planning, & Feedback">🤔</a> <a href="#promotion-cdigruttola" title="Promotion">📣</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Vyomrana02"><img src="https://avatars.githubusercontent.com/u/87069619?v=4?s=100" width="100px;" alt="Vyom Rana"/><br /><sub><b>Vyom Rana</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=Vyomrana02" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/parthrc"><img src="https://avatars.githubusercontent.com/u/101104958?v=4?s=100" width="100px;" alt="Parth Chawande"/><br /><sub><b>Parth Chawande</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=parthrc" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0Armaan025"><img src="https://avatars.githubusercontent.com/u/104704093?v=4?s=100" width="100px;" alt="Armaan"/><br /><sub><b>Armaan</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=0Armaan025" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://varundhand.netlify.app/"><img src="https://avatars.githubusercontent.com/u/110025628?v=4?s=100" width="100px;" alt="Varun Dhand"/><br /><sub><b>Varun Dhand</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=varundhand" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://vjspranav.dev"><img src="https://avatars.githubusercontent.com/u/17949836?v=4?s=100" width="100px;" alt="VJS Pranavasri"/><br /><sub><b>VJS Pranavasri</b></sub></a><br /><a href="https://github.com/bhavyamistry/Portfolio/commits?author=vjspranav" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

# References 👏🏻

- Some Design and Implementation Ideas are taken from [Saad Pasta's Portfolio Project](https://github.com/saadpasta/developerFolio).
- The Logo of Portfolio is inspired from [prettier-logo](https://github.com/prettier/prettier-logo) for [prettier](https://github.com/prettier/prettier) designed by @ianstormtaylor.
