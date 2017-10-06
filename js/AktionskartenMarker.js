/**
 * Example class showing how to implement new MarkerClasses
 * uses the glyphicons given by bootstrap
 */
L.StyleEditor.marker.AktionskartenMarker = L.StyleEditor.marker.Marker.extend({



    getMarkerHtml: function(size, color, icon) {
        return this._getMarkerHtml(size, color, icon, false);
    },

    _getMarkerHtml: function(size, color, icon, select) {
        var html = '<div class="leaflet-styleeditor-marker leaflet-styleeditor-marker-' +
            this._size(size) +'" ' +
            'style="background-image: url(https://kartographischeaktion.github.io/AktionskartenMarker/dist/images/spreadsheet.png); ' +
            'background-size: '+ this._spreadSize(size) + ';' +
            'background-position: ' + this._backgroundPosition(color, icon, size) + ';';

       if (select) {
           html = html + 'margin-top: -10px;';
       }

        html = html + '">' +
            '</div>';
        return html;
    },

    createMarkerIcon: function (iconOptions) {
        var iconSize = iconOptions.iconSize;
        return new L.divIcon({
            className: 'leaflet-styleeditor-aktionsmarker-marker-wrapper',
            html:  this.getMarkerHtml(iconSize, iconOptions.iconColor, iconOptions.icon),
            icon: iconOptions.icon,
            iconColor: iconOptions.iconColor,
            iconSize: iconSize,
            iconAnchor: [iconSize[0] / 2, iconSize[1] / 2],
            popupAnchor: [0, -iconSize[1] / 2]
        });
    },

	setStyle: function(styleOption, value) {
		if (styleOption != 'icon') {
			styleOption = 'icon' + styleOption.charAt(0).toUpperCase() + styleOption.slice(1);
		}

		var iconOptions = this.options.iconOptions;
        if(iconOptions[styleOption] != value) {
            iconOptions[styleOption] = value;
            this.setNewMarker();
        }
	},

    createSelectHTML: function (parentUiElement, iconOptions, icon) {
        parentUiElement.innerHTML = this._getMarkerHtml('s', iconOptions.iconColor, icon, true);
    },

	_size: function (size) {
		if (size[0] >= 30) {
			if(size[0] >= 35) {
				return 'l';
			} else {
				return 'm';
			}
		} else {
			return 's';
		}
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

        var row = this.colorRamp.indexOf(color);
        var colorIcons = this.options.markers[color];
        if (typeof colorIcons === 'undefined') {
            colorIcons = this.options.markers['default'];
        }
        var col = colorIcons.indexOf(icon);

        return col*(-size)+ 'px ' + row*(-size*2.5)+ 'px';
    },

    options: {
        markers: {
        	'default': ['train', 'megaphone', 'tent', 'speaker', '?', 'cooking-pot', 'police', 'nuclear', 'empty',
						'point', 'information', 'exclamation-mark', 'star', 'star-megaphone', 'arrow', 'bang'],
            '#7d3411': ['flag', 'megaphone', 'empty', 'point', 'exclamation-mark', 'thor-steinar', 'arrow']
        }
    },

    colorRamp: [
        '#e04f9e', '#fe0000', '#ee9c00', '#ffff00', '#00e13c', '#00a54c', '#00adf0', '#7e55fc', '#1f4199', '#7d3411'
    ]

});
