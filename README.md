<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/userscript-github-unmute-images/refs/heads/main/media/script.png" alt="Icon of Unmute Images on GitHub" width="256" height="256">
  <h1>Unmute Images on GitHub</h1>
</div>

<br>

<blockquote align="center">
  Fix Muted Images • Lightweight UserScript • Instant Auto-Apply • Works On GitHub
</blockquote>

<h4 align="center">
  A UserScript that removes the muted background color from images on GitHub.
</h4>

<br>

## Table of Contents

- ✨ [**Features**](#features)
- 🕵🏼 [**Usage**](#usage)
- 🧩 [**Compatibility**](#compatibility)
- 🎯 [**Motivation**](#motivation)
- 📝 [**Changelog**](#changelog)
- 🪪 [**License**](#license)
- 💖 [**Support**](#support)
- 👨🏻‍💻 [**Author**](#author)

<br>

## Features

- 🖼️ Removes the muted gray background from GitHub's broken/fallback images
- ⚡ Works instantly on page load, no delay or flicker
- 🔄 Keeps working across GitHub's soft page navigation, no re-triggering needed
- 🪶 Zero dependencies, tiny footprint, nothing to configure
- 🎯 Targets only fallback images, no side effects on other GitHub UI elements
- 🔓 No special permissions required, works with `@grant none`
- 🌐 Works across all of GitHub's pages automatically

<br>

## Usage

Install the script via Greasyfork or another UserScript manager (Tampermonkey, Violentmonkey, Greasemonkey).  
The script runs automatically on `github.com` and requires no configuration. Once installed, the muted gray background applied to broken or fallback images is removed on page load and persists across GitHub's soft navigation without needing a manual refresh.

<br>

## Compatibility

- Chrome
- Firefox
- Safari
- Edge
- Opera

<br>

## Motivation

GitHub applies a muted gray background to images that fail to load or fall back to a placeholder state. This background is visually inconsistent with dark themes and custom color schemes, making broken image placeholders stand out in an unintended way.  

This script overrides that background with a single injected CSS rule, targeting only the fallback image class so no other GitHub UI elements are affected.

<br>

## Changelog

Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/userscript-github-unmute-images/blob/main/CHANGELOG.md).

<br>

## License

Licensed under the [**GPL-3.0-or-later**](https://github.com/igorskyflyer/userscript-github-unmute-images/blob/main/LICENSE) license.

<br>

## Support

<div align="center">
  If this open-source project has saved you time or improved your workflow, consider supporting its continued development via <a href="https://liberapay.com/igorskyflyer/donate"><strong>LiberaPay</a> or <a href="https://ko-fi.com/igorskyflyer"><strong>Ko-Fi</strong></a>.
  <br>
  <br>
  <a href="https://liberapay.com/igorskyflyer/donate"><img alt=" Igor Dimitrijević (igorskyflyer) - Donate via Liberapay to Sustain Open-Source Projects" src="https://liberapay.com/assets/widgets/donate.svg" loading="lazy"></a> <a href="https://ko-fi.com/igorskyflyer"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Support Igor Dimitrijević (igorskyflyer) - Donate via Ko-Fi to Sustain Open-Source Projects" width="120" height="30" loading="lazy"></a>
  <br>
  <br>
  <blockquote>
    Support helps fund new open-source tools, maintenance, and documentation, thank you!
  </blockquote>
</div>

<br>

## Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.
