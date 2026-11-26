# Install the SanFlash GitHub Profile README

This folder contains a copy-ready GitHub profile README, a custom SVG hero, and an optional contribution-snake workflow.

## 1. Create the special profile repository

GitHub profile READMEs are displayed from a **public repository whose name exactly matches the account username**.

For this account, create:

- Repository name: `SanFlash`
- Owner: `SanFlash`
- Visibility: **Public**
- Initialize with a README: optional (the README in this kit will replace it)

The repository must be named exactly `SanFlash`. A differently named repository will not act as the profile README.

## 2. Add the profile files

In the new `SanFlash/SanFlash` repository, add:

- Copy `profile/README.md` to the repository root as `README.md`.
- Copy `profile/assets/profile-hero.svg` to `assets/profile-hero.svg`.
- Copy `profile/.github/workflows/snake.yml` to `.github/workflows/snake.yml`.

The README expects the hero at `assets/profile-hero.svg`.

## 3. Enable the contribution animation

After adding the workflow:

1. Open the repository's **Actions** tab.
2. Enable GitHub Actions if prompted.
3. Run **Generate contribution snake** once using **Run workflow**.
4. Open **Settings → Actions → General** and ensure workflows are permitted to create and approve pull requests / write repository contents as needed. The workflow uses the repository-provided `GITHUB_TOKEN` with `contents: write`.
5. Once the workflow succeeds, the generated SVGs are published to the `output` branch.

The snake graphic may take a short time to appear after the first run. The rest of the README works without it.

## 4. Verify links and public content

The profile README links to public projects verified during the repository review:

- AI78QA
- Record2POM
- SatyTracker78 (`satyenstg1`)
- SATYON-AI
- SatyOne
- automationExercise
- SanFlash-SatyendraNamdeoPortfolio

Review all public links and the LinkedIn URL before publishing. Do not put API keys, private repository details, personal phone numbers, or other sensitive information in a public README.

## 5. GitHub rendering limitations

GitHub README files support Markdown and embedded images, but do not execute arbitrary JavaScript, React, or GSAP. The hero uses SVG artwork; the animated contribution snake is generated as an SVG by GitHub Actions. Full interactive 3D and GSAP experiences should remain on the separate portfolio website.

## 6. Keep statistics honest

The profile uses live third-party statistic cards. They can be rate-limited or temporarily unavailable, and language statistics are estimates based on repository code. Remove any card that does not load reliably rather than replacing it with manually invented numbers.
