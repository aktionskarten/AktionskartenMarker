AktionskartenMarker
===================

Implements the markers used by https://aktionskarten.noblogs.org for [Leaflet StyleEditor](https://github.com/dwilhelm89/Leaflet.StyleEditor).

<img width="403" height="250" src="https://kartographischeaktion.github.io/AktionskartenMarker/dist/images/spreadsheet.png" alt="markers of aktionskarten.noblogs.org" title="markers with courtesy of https://aktionskarten.noblogs.org" />


Usage
-----

Include AktionskartenMarker.js and AktionskartenMarkers.css.
```html
<script src="https://kartographischeaktion.github.io/AktionskartenMarker/AktionskartenMarker.js"></script>
<link rel="stylesheet" href="https://kartographischeaktion.github.io/AktionskartenMarker/AktionskartenMarker.css" />
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

[With](https://kartographischeaktion.github.io/AktionskartenMarker/) or [without](https://kartographischeaktion.github.io/AktionskartenMarker/StyleEditorWithLeafletDraw.html) leaflet.draw.
