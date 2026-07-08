# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **pure static landing page** (`index.html`, `style.css`, `script.js`). There is no
package manager, build step, bundler, test suite, or linter — do not look for `package.json` or a lockfile.

### Running the app (development)
Serve the folder with any static file server and open the printed URL. Python 3 is preinstalled:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. There is no hot reload — refresh the browser after editing files.

### Testing / lint / build
There are no automated tests, lint config, or build. "Verification" means loading the page in a browser
and confirming it renders and the nav links + contact form work. Optionally sanity-check that assets serve:

```
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8000/style.css
```

### Notes
- Opening `index.html` via `file://` works for rendering, but serve over HTTP (above) so relative asset
  paths and JS behave exactly as in production.
- No dependencies are installed by the startup update script (nothing to install).
