/**
 * Example class showing how to implement new MarkerClasses
 * uses the glyphicons given by bootstrap
 */
L.StyleEditor.marker.AktionskartenMarker = L.StyleEditor.marker.Marker.extend({

    createMarkerIcon: function (iconOptions) {
        var size = iconOptions.iconSize;
        var icon = iconOptions.icon;
        var color = iconOptions.iconColor;

        return new L.divIcon({
            className: 'leaflet-styleeditor-aktionsmarker-marker' + "-" + this.sizeToName(size),
            icon: icon,
            bgPos: this._backgroundPosition(color, icon, size),
            iconColor: color,
            iconSize: size,
            iconAnchor: [size[0] / 2, size[1] / 2],
            popupAnchor: [0, 0]
        });
    },

    createSelectHTML: function (parentUiElement, iconOptions, icon) {
        var tmpOptions = {};
        tmpOptions.iconSize = this.options.size.medium;
        tmpOptions.icon = icon;
        tmpOptions.iconColor = iconOptions.iconColor;

        parentUiElement.innerHTML = this.createMarkerIcon(tmpOptions).createIcon().outerHTML;
    },

    _backgroundPosition: function(color, icon, size) {
        color = this.options.styleEditorOptions.util.rgbToHex(color);
        size = this.sizeToPixel(size);

        var row = this.options.colorRamp.indexOf(color);
        var colorIcons = this.options.markers[color];
        if (typeof colorIcons === 'undefined') {
            colorIcons = this.options.markers.default;
        }
        var col = colorIcons.indexOf(icon);
        return L.point(col*size[0], row*size[1]);
    },

    options: {
        size: {
            'small': [20, 20],
            'medium': [30, 30],
            'large': [40, 40]
        },

        colorRamp: [
            '#e04f9e', '#fe0000', '#ee9c00', '#ffff00', '#00e13c', '#00a54c', '#00adf0', '#7e55fc', '#1f4199', '#7d3411'
        ],

        markers: {
        	'default': ['train', 'megaphone', 'tent', 'speaker', '?', 'cooking-pot', 'police', 'nuclear', 'empty',
						'point', 'information', 'exclamation-mark', 'star', 'star-megaphone', 'arrow', 'bang'],
            '#7d3411': ['flag', 'megaphone', 'empty', 'point', 'exclamation-mark', 'thor-steinar', 'arrow']
        }
    }


});
