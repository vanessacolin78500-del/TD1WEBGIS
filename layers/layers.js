var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RegionHDF_1 = new ol.format.GeoJSON();
var features_RegionHDF_1 = format_RegionHDF_1.readFeatures(json_RegionHDF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionHDF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionHDF_1.addFeatures(features_RegionHDF_1);
var lyr_RegionHDF_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionHDF_1, 
                style: style_RegionHDF_1,
                popuplayertitle: 'RegionHDF',
                interactive: true,
                title: '<img src="styles/legend/RegionHDF_1.png" /> RegionHDF'
            });
var format_Commune_BD_Bio_HDF_2 = new ol.format.GeoJSON();
var features_Commune_BD_Bio_HDF_2 = format_Commune_BD_Bio_HDF_2.readFeatures(json_Commune_BD_Bio_HDF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_BD_Bio_HDF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_BD_Bio_HDF_2.addFeatures(features_Commune_BD_Bio_HDF_2);
var lyr_Commune_BD_Bio_HDF_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_BD_Bio_HDF_2, 
                style: style_Commune_BD_Bio_HDF_2,
                popuplayertitle: 'Commune_BD_Bio_HDF',
                interactive: true,
                title: '<img src="styles/legend/Commune_BD_Bio_HDF_2.png" /> Commune_BD_Bio_HDF'
            });
var format_Com_ExplBio5_SAU100_HDF_3 = new ol.format.GeoJSON();
var features_Com_ExplBio5_SAU100_HDF_3 = format_Com_ExplBio5_SAU100_HDF_3.readFeatures(json_Com_ExplBio5_SAU100_HDF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Com_ExplBio5_SAU100_HDF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Com_ExplBio5_SAU100_HDF_3.addFeatures(features_Com_ExplBio5_SAU100_HDF_3);
var lyr_Com_ExplBio5_SAU100_HDF_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Com_ExplBio5_SAU100_HDF_3, 
                style: style_Com_ExplBio5_SAU100_HDF_3,
                popuplayertitle: 'Com_ExplBio5_SAU100_HDF',
                interactive: true,
                title: '<img src="styles/legend/Com_ExplBio5_SAU100_HDF_3.png" /> Com_ExplBio5_SAU100_HDF'
            });
var format_Biocoop_HDF_4 = new ol.format.GeoJSON();
var features_Biocoop_HDF_4 = format_Biocoop_HDF_4.readFeatures(json_Biocoop_HDF_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biocoop_HDF_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biocoop_HDF_4.addFeatures(features_Biocoop_HDF_4);
var lyr_Biocoop_HDF_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biocoop_HDF_4, 
                style: style_Biocoop_HDF_4,
                popuplayertitle: 'Biocoop_HDF',
                interactive: true,
                title: '<img src="styles/legend/Biocoop_HDF_4.png" /> Biocoop_HDF'
            });

lyr_OSMStandard_0.setVisible(true);lyr_RegionHDF_1.setVisible(true);lyr_Commune_BD_Bio_HDF_2.setVisible(true);lyr_Com_ExplBio5_SAU100_HDF_3.setVisible(true);lyr_Biocoop_HDF_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RegionHDF_1,lyr_Commune_BD_Bio_HDF_2,lyr_Com_ExplBio5_SAU100_HDF_3,lyr_Biocoop_HDF_4];
lyr_RegionHDF_1.set('fieldAliases', {'ID': 'ID', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Commune_BD_Bio_HDF_2.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', 'N_Nb expl': 'N_Nb expl', 'S_libellec': 'S_libellec', 'S_Nb_exp': 'S_Nb_exp', 'S_Surfbio': 'S_Surfbio', 'Nb_Expl_T': 'Nb_Expl_T', });
lyr_Com_ExplBio5_SAU100_HDF_3.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', 'N_Nb expl': 'N_Nb expl', 'S_libellec': 'S_libellec', 'S_Nb_exp': 'S_Nb_exp', 'S_Surfbio': 'S_Surfbio', 'Nb_Expl_T': 'Nb_Expl_T', });
lyr_Biocoop_HDF_4.set('fieldAliases', {'osm_id': 'osm_id', 'type': 'type', 'name': 'name', 'brand': 'brand', 'operator': 'operator', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'level': 'level', 'siret': 'siret', 'profession': 'profession', 'wikidata': 'wikidata', 'website': 'website', 'phone': 'phone', 'email': 'email', 'facebook': 'facebook', 'address': 'address', 'com_insee': 'com_insee', 'com_nom': 'com_nom', 'last_updat': 'last_updat', });
lyr_RegionHDF_1.set('fieldImages', {'ID': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_Commune_BD_Bio_HDF_2.set('fieldImages', {'ID': '', 'NOM': '', 'NOM_M': '', 'INSEE_COM': '', 'STATUT': '', 'POPULATION': '', 'INSEE_CAN': '', 'INSEE_ARR': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'SIREN_EPCI': '', 'N_Nb expl': '', 'S_libellec': '', 'S_Nb_exp': '', 'S_Surfbio': '', 'Nb_Expl_T': '', });
lyr_Com_ExplBio5_SAU100_HDF_3.set('fieldImages', {'ID': '', 'NOM': '', 'NOM_M': '', 'INSEE_COM': '', 'STATUT': '', 'POPULATION': '', 'INSEE_CAN': '', 'INSEE_ARR': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'SIREN_EPCI': '', 'N_Nb expl': '', 'S_libellec': '', 'S_Nb_exp': '', 'S_Surfbio': '', 'Nb_Expl_T': '', });
lyr_Biocoop_HDF_4.set('fieldImages', {'osm_id': '', 'type': '', 'name': '', 'brand': '', 'operator': '', 'wheelchair': '', 'opening_ho': '', 'level': '', 'siret': '', 'profession': '', 'wikidata': '', 'website': '', 'phone': '', 'email': '', 'facebook': '', 'address': '', 'com_insee': '', 'com_nom': '', 'last_updat': '', });
lyr_RegionHDF_1.set('fieldLabels', {'ID': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', });
lyr_Commune_BD_Bio_HDF_2.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', 'N_Nb expl': 'no label', 'S_libellec': 'no label', 'S_Nb_exp': 'no label', 'S_Surfbio': 'no label', 'Nb_Expl_T': 'no label', });
lyr_Com_ExplBio5_SAU100_HDF_3.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', 'N_Nb expl': 'no label', 'S_libellec': 'no label', 'S_Nb_exp': 'no label', 'S_Surfbio': 'no label', 'Nb_Expl_T': 'no label', });
lyr_Biocoop_HDF_4.set('fieldLabels', {'osm_id': 'no label', 'type': 'no label', 'name': 'no label', 'brand': 'no label', 'operator': 'no label', 'wheelchair': 'no label', 'opening_ho': 'no label', 'level': 'no label', 'siret': 'no label', 'profession': 'no label', 'wikidata': 'no label', 'website': 'no label', 'phone': 'no label', 'email': 'no label', 'facebook': 'no label', 'address': 'no label', 'com_insee': 'no label', 'com_nom': 'no label', 'last_updat': 'no label', });
lyr_Biocoop_HDF_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});