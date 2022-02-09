
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        //Toogle isChecked
        isLULC: false,
        toShowLULC:false,
        LULC1985Checked: false,
        LULC1990Checked: false,
        LULC1995Checked: false,
        LULC2000Checked: false,
        LULC2005Checked: false,
        LULC2010Checked: false,
        LULC2015Checked: false,
        OrthoChecked: false,
    },
    mutations: {
        updatePrintTitle(state, payload) {
            state.value = payload
        },
        updatePrintDescription(state, payload) {
            state.value = payload
        }
    }
  })

var website_url = "http://192.168.50.69:7000/" 
//---------------------- Global Function(Generating Plots)--------------------
//****Entropy Charts *****/
function SetupEntropyCharts(spatialunit,areacode){
    //Get json data from Ajax 
    var jsonData = $.ajax({
        url: website_url+ 'entropy/'+ spatialunit,
        dataType: 'json',
      }).done(function (results) {
            //Filter Function
            var data_filter = results.filter(a => a.pk == areacode);
            console.log(data_filter)
            // Write into Array
            var labels = [], entropy =[]; 
            for(var entropyRecord in data_filter)
            {
                labels.push(data_filter[entropyRecord].fields.year);
                entropy.push(data_filter[entropyRecord].fields.shannon_entropy);
            }
            // Setup Data
            var EntropyData = {
                labels : labels,
                datasets : [
                    {
                        label: "Shannon Entropy",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(167, 130, 176, 0.8)",
                        borderColor: "rgba(167, 130, 176, 0.3)",
                        borderCapStyle: 'butt',
                        data:  entropy,
                        spanGaps: false,
                    }
                ]
            };
            var ctx = document.getElementById("entropy-chart").getContext('2d') 
            // Write Data into Chart                                
            var EntropyChart = new Chart(ctx, {
                type: 'line',
                data: EntropyData,
                options: {
                    responsive: true,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Shannon Entropy'
                        }
                    }
                }
            });        
        });                   
};
function addEntropyChart(spatialunit,areacode){
    var EntropyChart = SetupEntropyCharts(spatialunit,areacode)
};


//****AAPDEA Charts *****/
function SetupAAPDEACharts(areacode){
    //Get json data from Ajax 
    var jsonData = $.ajax({
        url: website_url+ 'AAPDEA/town',
        dataType: 'json',
      }).done(function (results) {
            //Filter Function
            var data_filter = results.filter(a => a.pk == areacode);
            // Write into Array
            var labels = [], aapdea =[]; 
            for(var aapdeaRecord in data_filter)
            {
                labels.push(data_filter[aapdeaRecord].fields.period);
                aapdea.push(data_filter[aapdeaRecord].fields.aapdea);
            }
            // Setup Data
            var AAPDEAData = {
                labels : labels,
                datasets : [
                    {
                        label: "AAPDEA",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(208, 151, 115, 1)",
                        borderColor: "rgba(208, 151, 115, 0.3)",
                        borderCapStyle: 'butt',
                        data:  aapdea,
                        spanGaps: false,
                    }
                ]
            };
            var ctx = document.getElementById("aapdea-chart").getContext('2d') 
            // Write Data into Chart                                
            var AAPDEAChart = new Chart(ctx, {
                type: 'line',
                data: AAPDEAData,
                options: {
                    responsive: true,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Abstract Achieved Population Density in Expansion Areas (AAPDEA)'
                        }
                    }
                }
            });        
        });                   
};
function addAAPDEAChart(areacode){
    var AAPDEAChart = SetupAAPDEACharts(areacode)
};
//****Population Charts *****/
function SetupPopCharts(areacode){
    //Get json data from Ajax 
    var jsonData = $.ajax({
        url: website_url+ 'pop/town',
        dataType: 'json',
      }).done(function (results) {
            //Filter Function
            var data_filter = results.filter(a => a.fields.towncode == areacode);
            // Write into Array
            var labels = [], population =[]; 
            for(var popRecord in data_filter)
            {
                labels.push(data_filter[popRecord].fields.year);
                population.push(data_filter[popRecord].fields.population);
            }
            // Setup Data
            var PopData = {
                labels : labels,
                datasets : [
                    {
                        label: "Population",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(38, 46, 152, 0.81)",
                        borderColor: "rgba(38, 46, 152, 0.3)",
                        borderCapStyle: 'butt',
                        data:  population,
                        spanGaps: false,
                    }
                ]
            };
            var ctx = document.getElementById("pop-chart").getContext('2d') 
            // Write Data into Chart                                
            var AAPDEAChart = new Chart(ctx, {
                type: 'line',
                data: PopData,
                options: {
                    responsive: true,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Population Growth'
                        }
                    }
                }
            });        
        });                   
};
function addPopChart(areacode){
    var PopChart = SetupPopCharts(areacode)
};
//****LUE Charts *****/
function SetupLUECharts(areacode){
    //Get json data from Ajax 
    var jsonData = $.ajax({
        url: website_url+ 'sdg/lue',
        dataType: 'json',
      }).done(function (results) {
            //Filter Function
            var data_filter = results.filter(a => a.fields.towncode == areacode);
            // Write into Array
            var labels = [], lue =[]; 
            for(var lueRecord in data_filter)
            {
                labels.push(data_filter[lueRecord].fields.period);
                lue.push(data_filter[lueRecord].fields.lue);
            }
            // Setup Data
            var PopData = {
                labels : labels,
                datasets : [
                    {
                        label: "Land Use Efficiency",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75, 120, 76, 0.8)",
                        borderColor: "rgba(75, 120, 76, 0.3)",
                        borderCapStyle: 'butt',
                        data: lue,
                        spanGaps: false,
                    }
                ]
            };
            var ctx = document.getElementById("lue-chart").getContext('2d') 
            // Write Data into Chart                                
            var AAPDEAChart = new Chart(ctx, {
                type: 'line',
                data: PopData,
                options: {
                    responsive: true,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Land Use Efficiency'
                        }
                    }
                }
            });        
        });                   
};
function addLUEChart(areacode){
    var LUEChart = SetupLUECharts(areacode)
};
/********************************
 *  主要 Vue app  
 * ******************************/ 
 const app = new Vue({    
  el: '#app',
  store: store,
  components:{},
  data: function () {
      return {
        currentComponentName:"",
        toShowPanelInfoContainer:false,
        toShowBaseMapSwitcher:false,
        toShowBookmarks:false,
        toShowHelpWindow:false,
        toShowStatistics:false,
        bookmarks:[],
        bookmarkScale:[],
        bookmarkName:[],
        inputBookMark:'', 
        animationLayer:undefined,
        test:[1,2,3,4,5],
        spatialUnits:'',
        TownChecked:false,
        VillageChecked:false,
        TownBoundsLayer:undefined,
        VillageBoundsLayer:undefined,
        toShowSelectInfo:false,
        toShowlulcCharts:false,
        toShowpopCharts:false,
        toShowSDGContent:false,
        toShowSDGalert:false,
        toShowPOPContent:false,
        toShowPOPalert:false,
        selectedStyle:undefined,
        select:null,
        districtCode:'',
        districtName:'',
        villageCode:'',
        villageName:'',
        LULC_all:[],
        LULC_data:[],
      };
  },
  watch:{
    spatialUnits: function(){
        if (this.spatialUnits == 'Administrative Districts'){
            this.addTown();  
            this.selectTownFeature();       
            this.showSDGContent();
            this.showPOPContent();
            //this.addTownPopup();      
            map.removeLayer(this.VillageBoundsLayer);
        } else if (this.spatialUnits =='Villages'){
            this.addVillage();
            this.selectVillageFeature();
            this.closeSDGContent();  
            this.closePOPContent();
            //this.addVillagePopup(); 
            map.removeLayer(this.TownBoundsLayer);
        }
    },
  },
  methods: {   
      //------------------- Global Configuration -----------------//
       /*Toggle Windows in Panel*/
       //BaseMap Switcher Window
       showBaseMapSwitcher:function(){
            this.toShowBaseMapSwitcher = true;
       },
       closeBasemapSwitcher:function(){
            this.toShowBaseMapSwitcher = false;
       },

       //Sider Bar Function Window
        changeCurrentComponentName:function(componentName){
            this.toShowPanelInfoContainer = true;
            this.currentComponentName = componentName
        },
        closeFunctionPanel:function(){
            this.toShowPanelInfoContainer = false;
            this.currentComponentName = ""
        },
        //Make Window  Draggable
        initDraggable:function(){
            $(".panel-info-container").draggable();
        },
        singleClickFun() {  
            map.on('singleclick', event => {  
            console.log(event)  
            })  
        }, 
        helpDraggable:function(){
            $(".help-container").draggable();
        },
       //BaseMap Switcher Window
        showStatistics:function(){
            this.toShowStatistics= true;
        },
        closeStatistics:function(){
            this.toShowStatistics = false;
        },

      //------------------- Map Configuration --------------------//
        /* Initialize Map Control*/
        initBaseLayer: function(){   
            //Built an initial map         
            const map = new ol.Map({
                view: new ol.View({
                    center: [13450000, 2700000],
                    zoom: 8,
                    minZoom:4,
                    maxZoom:18
                }),
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                target: 'map',
                //Load Tile Animation
                loadTilesWhileAnimating: true
            });      
            //Set as Global Variable
            window.map  = map;
            var zoomslider = new ol.control.ZoomSlider();
            map.addControl(zoomslider);
            this.singleClickFun() ;
        },
        /* BaseMap Switcher */
        switchBaseMap: function(){
            const openStreetMap = new ol.layer.Tile({
              source: new ol.source.XYZ({
                url:'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attributions:'&copy;'                
              }),
              visible:true,
              title:'OSM'
            })
            const cartolight = new ol.layer.Tile({
                source: new ol.source.XYZ({
                  url:'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                  attributions:'&copy;'                
                }),
                visible:false,
                title:'CartoLight'
            })
            const cartodark = new ol.layer.Tile({
                source: new ol.source.XYZ({
                  url:'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                  attributions:'&copy;'                
                }),
                visible:false,
                title:'CartoDark'
            })
            const stamen = new ol.layer.Tile({
                source: new ol.source.XYZ({
                  url:'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
                  attributions:'&copy;'                
                }),
                visible:false,
                title:'Stamen'
            })
            
            //BaseMap Layer Group//
            const baseLayerGroup = new ol.layer.Group({
                layers:[
                    openStreetMap, cartolight,cartodark, stamen
                ]
            })
            map.addLayer(baseLayerGroup);

            //Layer Switcher Logic for BaseMap
            const baseLayerElements = document.querySelectorAll('.baseMap > input[type=radio]')
            for(let baseLayerElement of baseLayerElements){
                baseLayerElement.addEventListener('change',function(){
                    let baseLayerElementValue = this.value;
                    baseLayerGroup.getLayers().forEach(function(element, index, array){
                        let baseLayerTitle = element.get('title');
                        element.setVisible(baseLayerTitle === baseLayerElementValue);
                    })
                })            
            }
        },

        /* Mouse Postition */
        getMousePosition: function(){
            const mousePositionControl = new ol.control.MousePosition({
                coordinateFormat: ol.coordinate.createStringXY(4),
                projection: 'EPSG:4326',                
                className: 'custom-mouse-position',
                target: document.getElementById('mouse-position'),
              });
            map.addControl(mousePositionControl);
        },
        /* Scale Bar */
        addScaleBar: function(){
            var scaleLineControl = new ol.control.ScaleLine({
                units: "metric"
            });
            map.addControl(scaleLineControl);
        },
        /* Clear all layers (Except for basemaps) */
        ClearAllLayer: function(){
            var layerArray, len, layer;
            layerArray = map.getLayers().getArray(),
            len = layerArray.length;
            while (len > 2){
                layer = layerArray[len-1];
                map.removeLayer(layer);
                len = layerArray.length;
            }                
        },
        /* Print Map*/
        PrintMap: function(){
            window.print();  
        },

        /* -----------BookMarks---------------- */
        //BaseMap Switcher Window
        showBookmarks:function(){
            this.toShowBookmarks = true;
        },
        closeBookmarks:function(){
            this.toShowBookmarks = false;
        },
        // Bookmarks Content
        addBookMarks: function () {
            var currentLat = map.getView().getCenter()[0];
            var currentLng = map.getView().getCenter()[1];
            var currentScale = map.getView().getZoom();
            this.bookmarkName.push(this.inputBookMark);
            this.bookmarks.push([currentLat, currentLng]); 
            this.bookmarkScale.push(currentScale)
            this.inputBookMark = ''; //clearInput)
        },
        removeBookMarks: function (index) {
            this.bookmarks.splice(index, 1);
            this.bookmarkScale.splice(index, 1); 
            this.bookmarkName.splice(index, 1);
        },
        zoomToBookMarks:function(index) {
            map.getView().setCenter(this.bookmarks[index])
            map.getView().setZoom(this.bookmarkScale[index])
        },
        clearBookMarks: function () {
          // Clear all bookmarks
          this.bookmarks = [];
          this.bookmarkScale = [];
          this.bookmarkName = [];
        },
       //---- Help Window --------/
        showHelpWindow:function(){
            this.toShowHelpWindow= true;
        },
        closeHelpWindow:function(){
            this.toShowHelpWindow= false;
        },

        //---------------- Statistic Window ------------//
        //Define Content to Show
        showSDGContent:function(){
            this.toShowSDGContent = true;
            this.toShowSDGalert = false;
        },
        closeSDGContent:function(){
            this.toShowSDGContent = false;
            this.toShowSDGalert = true;
        },

        showPOPContent:function(){
            this.toShowPOPContent = true;
            this.toShowPOPalert = false;
        },
        closePOPContent:function(){
            this.toShowPOPContent = false
            this.toShowPOPalert = true;
        },
        //----------------- Add  Spatial Units Layers ---------//
        addTown: function(){
            var self = this;
            var town_url ='http://192.168.50.69:8080/geoserver/MOST_WebGIS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=MOST_WebGIS%3AKaohsiung_Town&&outputFormat=application%2Fjson'       
            this.TownBoundsLayer = new ol.layer.Vector({
                source:  new ol.source.Vector({
                    url:town_url,
                    format: new ol.format.GeoJSON()
                }),
            })
            map.addLayer(this.TownBoundsLayer); 
            this.showSelectInfo();
        },
        addVillage: function(){
            var self = this;
            var village_url ='http://192.168.50.69:8080/geoserver/MOST_WebGIS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=MOST_WebGIS%3AKaohsiung_Village&outputFormat=application%2Fjson'       
            this.VillageBoundsLayer = new ol.layer.Vector({
                source:  new ol.source.Vector({
                    url:village_url,
                    format: new ol.format.GeoJSON()
                }),
            });
            map.addLayer(this.VillageBoundsLayer); 
            this.showSelectInfo();
        },

        //------------------ Select Feature Function------------------//
        //Style of Selected Feature
        selectStyle: function(feature) {
            const selected = new ol.style.Style({
                fill: new ol.style.Fill({
                  color: '#FF8C00',
                }),
                stroke: new ol.style.Stroke({
                  color: 'rgba(255, 255, 255, 0.7)',
                  width: 2,
                }),
            });
            const color = feature.get('COLOR') || '#FF8C00';
            selected.getFill().setColor(color);
            return selected;
        },
        //Select Feature Functions
        selectTownFeature: function(){                                                    
            if (this.select !== null) {
                map.removeInteraction(this.select);
            }
            const selectClick = new ol.interaction.Select({
                condition: ol.events.condition.click,
                //toggleCondition: ol.events.condition.shiftKeyOnly,  
                style: this.selectStyle,
            });
            this.select = selectClick;
            if (this.select != null) {
                map.addInteraction(this.select);
                this.select.on('select', function(e){
                    // Display Selected Feature Info
                    var features=e.target.getFeatures();
                    var feature=features.item(0);
                    this.districtCode = feature.getProperties().TOWNCODE;
                    this.districtName = feature.getProperties().TOWNENG;
                    document.getElementById('statistics-info-content').innerHTML = 'TOWNCODE:' +'&nbsp'+ this.districtCode + '<br>' + 'TOWNNAME:' +'&nbsp'+ this.districtName + '<br>';
                    document.getElementById('pop-chart-container').innerHTML = "<canvas width=200 height=150 id='pop-chart'>";
                    document.getElementById('entropy-chart-container').innerHTML = "<canvas width=200 height=150 id='entropy-chart'>";
                    document.getElementById('aapdea-chart-container').innerHTML = "<canvas width=200 height=150 id='aapdea-chart'>";
                    document.getElementById('lue-chart-container').innerHTML = "<canvas width=200 height=150 id='lue-chart'>";
                    var spatialunit = 'town';
                    var towncode = this.districtCode;
                    // Get ElementID for displaying Charts
                    // Display Plots
                    addPopChart(towncode)
                    addEntropyChart(spatialunit,towncode)
                    addAAPDEAChart(towncode)
                    addLUEChart(towncode)
                })                    
            }
        },
        selectVillageFeature: function(){                    
            if (this.select !== null) {
                map.removeInteraction(this.select);
            }
            const selectClick = new ol.interaction.Select({
                condition: ol.events.condition.click,
                style: this.selectStyle,
            });
            this.select = selectClick;
            if (this.select != null) {
                map.addInteraction(this.select);
                this.select.on('select', function(e){
                    var features=e.target.getFeatures();
                    var feature=features.item(0);
                    //console.log('feature',feature.getProperties())
                    this.villageCode = feature.getProperties().VILLCODE
                    this.villageName = feature.getProperties().VILLENG                           
                    document.getElementById('statistics-info-content').innerHTML = 'VILLAGECODE:' +'&nbsp'+ this.villageCode + '<br>' + 'VILLAGENAME:' +'&nbsp'+ this.villageName + '<br>';
                    document.getElementById('entropy-chart-container').innerHTML = "<canvas width=200 height=150 id='entropy-chart'>";
                    var spatialunit = 'village';
                    var villcode = this.villageCode;
                    // Get ElementID for displaying Charts
                    // Display Plots
                    addEntropyChart(spatialunit,villcode)
                })                        
            }
        },
        /***Info Window of Selected Features*****/
        showSelectInfo:function(){
            this.toShowSelectInfo = true;
        },
        closeSelectInfo:function(){
            this.toShowSelectInfo = false;
        },
        //-------Onclick/Onchange Configurations (Popup Window Content)------//
        addTownPopup:function(){
            //Create DOM Object
            var container = document.getElementById("popup")
            var content = document.getElementById("popup-content")
            var closer = document.getElementById("popup-closer")
            
            //Create Overlay(Popup Window)
            var overlay = new ol.Overlay({
                element: container,
                autoPan: true,
                autoPanAnimation:{
                    duration:250
                }
            });
            map.addOverlay(overlay);
            map.on('singleclick', function (event) {
                const coordinate = event.coordinate;
                map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
                    var districtCode = feature.getProperties().TOWNCODE
                    var districtName = feature.getProperties().TOWNENG
                    content.innerHTML = 'TOWNCODE:' + districtCode + '<br>' + 'TOWNNAME:' + districtName + '<br>';
                    overlay.setPosition(coordinate);
                }, {
                        hitTolerance: 5
                });
            });
            //Close Popup Window
            closer.onclick = function () {
                overlay.setPosition(undefined);
                closer.blur();
                return false;
            };
        },

        addVillagePopup:function(){
            //Create DOM Object
            var container = document.getElementById("popup")
            var content = document.getElementById("popup-content")
            var closer = document.getElementById("popup-closer")

            //Create Overlay(Popup Window)
            var overlay = new ol.Overlay({
                element: container,
                autoPan: true,
                autoPanAnimation:{
                    duration:250
                }
            });
            map.addOverlay(overlay);
            map.on('singleclick', function (event) {
                const coordinate = event.coordinate;
                map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
                    var villageCode = feature.getProperties().VILLCODE
                    var villageName = feature.getProperties().VILLENG
                    content.innerHTML = 'VILLAGECODE:' + villageCode + '<br>' + 'VILLAGENAME:' + villageName + '<br>';
                    overlay.setPosition(coordinate);
                }, {
                        hitTolerance: 5
                });
            });
            //Close Popup Window
            closer.onclick = function () {
                overlay.setPosition(undefined);
                closer.blur();
                return false;
            };
        },
        //-----------------Statistics Data ---------//
        getLULCall:function(){
            var self = this;
            var data_api = 'lulc/all'
            var promise = new Promise(function(resolve, reject){
                //$('#loading')[0].style.display = 'flex'
                $.get(website_url+ data_api, function(data, status){
                    self.LULC_all.push(data)
                    //$('#loading')[0].style.display = 'none'
                    resolve(self.LULC_all)
                });                        
            })
            return promise;
        },   

        //*************LULC Charts *****************/   
        showlulcChart:function(){
            this.toShowlulcCharts = true;
        },
        closelulcChart:function(){
            this.toShowlulcCharts = false;
        },
        makeLULCcharts:function(){
            //Get json data from Ajax 
            var jsonData = $.ajax({
              url: website_url+ 'lulc/all_ratio',
              dataType: 'json',
            }).done(function (results) {
                // Save json data into array
                var labels = [], builtup=[], barren=[], cultivated=[], water= [], vegetation=[]; 
                for(var lulcRecord in results)
                {
                    labels.push(results[lulcRecord].fields.year);
                    builtup.push(results[lulcRecord].fields.builtup);
                    barren.push(results[lulcRecord].fields.barren);
                    cultivated.push(results[lulcRecord].fields.cultivated);
                    water.push(results[lulcRecord].fields.water);
                    vegetation.push(results[lulcRecord].fields.vegetation);
                }
                // Setup Data
                var lulcAllData = {
                    labels : labels,
                    datasets : [
                        {
                            label: "Builtup",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(239, 89, 164, 1)",
                            borderColor: "rgba(239, 89, 164, 0.3)",
                            borderCapStyle: 'butt',
                            data: builtup,
                            spanGaps: false,
                        },
                        {
                            label: "Barren",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(106, 73, 62, 1)",
                            borderColor: "rgba(106, 73, 62, 0.3)",
                            borderCapStyle: 'butt',
                            data: barren,
                            spanGaps: false,
                        },
                        {
                            label: "Cultivated",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(218, 218, 26, 1)",
                            borderColor: "rgba(218, 200, 26, 0.3)",
                            borderCapStyle: 'butt',
                            data: cultivated,
                            spanGaps: false,
                        },
                        {
                            label: "Water Bodies",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(34, 100, 225, 0.74)",
                            borderColor: "rgba(34, 100, 225, 0.3)",
                            borderCapStyle: 'butt',
                            data: water,
                            spanGaps: false,
                        },
                        {
                            label: "Vegetation",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(18, 206, 87, 1)",
                            borderColor: "rgba(18, 206, 87, 0.3)",
                            borderCapStyle: 'butt',
                            data:vegetation,
                            spanGaps: false,
                        },
                    ]
                };
                // Get canvas Element ID
                var ctx = document.getElementById("lulc-chart").getContext('2d');
                ctx.height=9;                                  
                var myLineChart = new Chart(ctx, {
                    type: 'line',
                    data: lulcAllData,
                    options: {
                        responsive: true,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: 'Temporal Changes of Land Covers'
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    callback: function(value, index, values) {
                                        return value+ '%';
                                    }
                                }
                            }
                        }
                    }
                });
            });
        },

        //*************Population Charts *****************/   
        showpopChart:function(){
            this.toShowpopCharts = true;
        },
        closepopChart:function(){
            this.toShowpopCharts = false;
        },
        makePopcharts:function(){
            //Get json data from Ajax 
            var jsonData = $.ajax({
              url: website_url+ 'pop/all',
              dataType: 'json',
            }).done(function (results) {
                // Save json data into array
                var labels = [], population=[]; 
                for(var populationRecord in results)
                {
                    labels.push(results[populationRecord].fields.year);
                    population.push(results[populationRecord].fields.population);
                }
                // Setup Data
                var popAllData = {
                    labels : labels,
                    datasets : [
                        {
                            label: "Population",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(38, 46, 152, 0.81)",
                            borderColor: "rgba(38, 46, 152, 0.3)",
                            borderCapStyle: 'butt',
                            data: population,
                            spanGaps: false,
                        }
                    ]
                };
                // Get canvas Element ID
                var ctx = document.getElementById("pop-all-chart").getContext('2d');
                ctx.height=9;                                  
                var myLineChart = new Chart(ctx, {
                    type: 'line',
                    data: popAllData,
                    options: {
                        responsive: true,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: 'Population Growth'
                            }
                        }
                    }
                });
            });
        },
  },

  beforeCreate:function (){
    var vm = this;
    if (Object.keys(vm.$options.components).length < 1) {
        require(['static/js/components/UI_Layer','static/js/components/UI_Time', 'static/js/components/UI_Function','static/js/components/UI_Statistics'], function (UI_LayerComponents, UI_TimeComponents, UI_FunctionComponents,UI_StatisticsComponents) {
       
            for (var key in UI_LayerComponents) {
                vm.$options.components[key] = UI_LayerComponents[key];
            }
            for (var key in UI_TimeComponents) {
                vm.$options.components[key] = UI_TimeComponents[key];
            }
            for (var key in UI_FunctionComponents) {
                vm.$options.components[key] = UI_FunctionComponents[key];
            }
            for (var key in UI_StatisticsComponents) {
                vm.$options.components[key] = UI_StatisticsComponents[key];
            }
                                  
        });
    }
  },
  created:function(){
      var self = this;        
  },
  mounted: function () {  
    var self = this;
    //執行地圖初始化的相關方法
    self.initBaseLayer();
    self.getMousePosition();  
    self.addScaleBar();
    self.switchBaseMap();
    this.initDraggable();
    this.helpDraggable();
    this.makeLULCcharts(); 
    this.makePopcharts();   
  }
 
      
});

window.app = app;

