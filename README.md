AktionskartenMarker [![Build Status](https://travis-ci.org/aktionskarten/AktionskartenMarker.svg?branch=gh-pages)](https://travis-ci.org/aktionskarten/AktionskartenMarker)
===================

Implements the markers used by https://aktionskarten.noblogs.org for [Leaflet StyleEditor](https://github.com/dwilhelm89/Leaflet.StyleEditor).

<img width="403" height="250" src="https://aktionskarten.github.io/AktionskartenMarker/AktionskartenMarker.png" alt="markers of aktionskarten.noblogs.org" title="markers with courtesy of https://aktionskarten.noblogs.org" />

Image: [cc-by-nc-nd](https://creativecommons.org/licenses/by-nc-nd/4.0/)  
by https://aktionskarten.noblogs.org


Usage
-----

Include AktionskartenMarker.js and AktionskartenMarkers.css.
```html
<script src="https://aktionskarten.github.io/AktionskartenMarker/AktionskartenMarker.js"></script>
<link rel="stylesheet" href="https://aktionskarten.github.io/AktionskartenMarker/AktionskartenMarker.css" />
```

Initialize the StyleEditor with AktionskartenMarkers.

```javascript
var styleEditor = L.control.styleEditor({
    position: "topleft",
    markerType: L.StyleEditor.marker.AktionskartenMarker,
});
map.addControl(styleEditor);
````

Examples
------

[Without](https://aktionskarten.github.io/AktionskartenMarker/) or [with](https://aktionskarten.github.io/AktionskartenMarker/StyleEditorWithLeafletDraw.html) leaflet.draw.
