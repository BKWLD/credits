# Credits

A package that logs credits to the console when the app mounts.

Example:
```
      &        .:@@@@@:.
    .@@@.    .x@@@@@@@@%&,
   .@@@@@.  .&@@@@@@@@@@@&.
  :@@@@@@@. .&@@@@@@@@@@@&.
 :@@@@@@@@@: '&@@@@@@@@@&'    Bukwild: Design and technology for innovators.
:@@@@@@@@@@@:  '"@@@@@"'      bukwild.com
```

## Install
npm: `npm install @bkwld/credits`

yarn: `yarn add @bkwld/credits`

## Configure

### Nuxt
In nuxt.config.coffee:
```
modules: [
  '@bkwld/credits/nuxt/module' if !process.env.HIDE_CONSOLE_CREDITS
]
```

In .env (to hide credits during local development):
```
HIDE_CONSOLE_CREDITS=1
```
