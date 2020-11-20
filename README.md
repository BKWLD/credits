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
  '@bkwld/credits/nuxt/module'
]
```

In .env:
```
# Hide the credits during dev
DISABLE_BUKWILD_CREDITS=true
```
