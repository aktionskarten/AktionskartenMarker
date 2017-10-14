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
            className: 'leaflet-styleeditor-aktionsmarker-marker',
            icon: icon,
            bgPos: this._backgroundPosition(color, icon, size),
            iconColor: color,
            iconSize: size,
            iconAnchor: [size[0] / 2, size[1] / 2],
            popupAnchor: [0, 0]
        });
    },

	setStyle: function(styleOption, value) {
		if (styleOption !== 'icon') {
			styleOption = 'icon' + styleOption.charAt(0).toUpperCase() + styleOption.slice(1);
		}

		var iconOptions = this.options.iconOptions;
        if(iconOptions[styleOption] !== value) {
            iconOptions[styleOption] = value;
            this.setNewMarker();
        }
	},

    createSelectHTML: function (parentUiElement, iconOptions, icon) {
        var tmpOptions = {};
        tmpOptions.iconSize = this.options.size.small;
        tmpOptions.icon = icon;
        tmpOptions.iconColor = iconOptions.iconColor;

        parentUiElement.innerHTML = this.createMarkerIcon(tmpOptions).createIcon().outerHTML;
    },

	_size: function (size) {
        var keys = Object.keys(this.options.size);
        for (i=0; i<keys.length; i++) {
            if (this.options.size[keys[i]] === size) {
                return keys[i];
            }
        }
        return keys[0];
	},

    _sizeInPixel: function(size) {
        size = this._size(size);
        if (size === 'l') {
            size = 35;
        } else if (size === 'm') {
            size = 30;
        } else {
            size = 20;
        }
        return size;
    },

    _spreadSize: function(size) {
        var size = this._sizeInPixel(size);

        return size*16 + 'px ' + size*10*2.5 + 'px';
    },

    _backgroundPosition: function(color, icon, size) {
        color = this.options.styleEditorOptions.util.rgbToHex(color);
        var size = this._sizeInPixel(size);

        var row = this.options.colorRamp.indexOf(color);
        var colorIcons = this.options.markers[color];
        if (typeof colorIcons === 'undefined') {
            colorIcons = this.options.markers['default'];
        }
        var col = colorIcons.indexOf(icon);

        return L.point(col*(-size), row*(-size*2.5));
    },

    options: {
        size: {
            'small': [30, 30],
            'medium': [40, 40],
            'large': [50, 50]
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
