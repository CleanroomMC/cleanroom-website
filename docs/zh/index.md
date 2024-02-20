---
layout: home

hero:
  name: CleanroomMC
  text: 模组、特性及相关工具链
  tagline: 现代、快速、高性能
  actions:
    - theme: brand
      text: 介绍
      link: guide/
    - theme: alt
      text: 快速开始
      link: guide/
  image:
    src: /cleanroom.png
    alt: CleanroomMC Logo
features:
  - title: Cleanroom Loader
    details: 拥抱 1.12.2，迎接现代化模组体验。
    icon: 🏃🏻‍♀️
  - title: Template for 1.12.2
    details: 全新旅程，始于这里。
    icon: 📦
  - title: 先进的 API
    details: 精雕细琢，只为更方便、更自由。
    icon: 🔥
---

<style>
.feat-center {
    display: flex;
    justify-content: center;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
