# Segwit2x Insight UI

A Segwit2x blockchain explorer web application service for [Segwit2x Node](https://github.com/SegwitB2X/b2x-node) using the [Insight API](https://github.com/bitpay/insight-api).

## Getting Started

To manually install all of the necessary components, you can run these commands:

```bash
npm install -g b2x-node
b2x-node create mynode
cd mynode
b2x-node install b2x-insight-api
b2x-node install b2x-insight-ui
b2x-node start
```

Open a web browser to `http://localhost:3001/b2x-insight/`

## Development

To build Insight UI locally:

```
$ npm run build
```

A watch task is also available:

```
$ npm run watch
```

## Changing routePrefix and apiPrefix

By default, the `insightConfig` in `package.json` is:

```json
  "insightConfig": {
    "apiPrefix": "b2x-insight-api",
    "routePrefix": "b2x-insight-ui"
  }
```

To change these routes, first make your changes to `package.json`, for example:

```json
  "insightConfig": {
    "apiPrefix": "api",
    "routePrefix": ""
  }
```

Then rebuild the `insight-ui` service:

```
$ npm run build
```

## Multilanguage support

Insight UI uses [angular-gettext](http://angular-gettext.rocketeer.be) for multilanguage support.

To enable a text to be translated, add the ***translate*** directive to html tags. See more details [here](http://angular-gettext.rocketeer.be/dev-guide/annotate/). Then, run:

```
grunt compile
```

This action will create a template.pot file in ***po/*** folder. You can open it with some PO editor ([Poedit](http://poedit.net)). Read this [guide](http://angular-gettext.rocketeer.be/dev-guide/translate/) to learn how to edit/update/import PO files from a generated POT file. PO file will be generated inside po/ folder.

If you make new changes, simply run **grunt compile** again to generate a new .pot template and the angular javascript ***js/translations.js***. Then (if use Poedit), open .po file and choose ***update from POT File*** from **Catalog** menu.

Finally changes your default language from ***public/src/js/config***

```
gettextCatalog.currentLanguage = 'es';
```

This line will take a look at any *.po files inside ***po/*** folder, e.g.
**po/es.po**, **po/nl.po**. After any change do not forget to run ***grunt
compile***.


## Note

For more details about the [Segwit2X Insight API](https://github.com/SegwitB2X/b2x-insight-api) configuration and end-points, go to [Segwit2X Insight API GitHub repository](https://github.com/SegwitB2X/b2x-insight-api).

## Contribute

Contributions and suggestions are welcomed at the [Segwit2X Insight UI GitHub repository](https://github.com/SegwitB2X/b2x-insight-ui).
