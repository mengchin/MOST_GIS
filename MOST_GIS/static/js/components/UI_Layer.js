define([],function(){
    //載入html
    var layerComponentHtml = "";
    var website_url = "http://192.168.50.69:7000/" 
    var loadHtml = function(){
        $.ajax({
            url: 'static/componentTemplates/layer/layer.html', 
            type: 'GET', 
            async: false,
            data: {
                //_path: path, _name: pv_name, _t: new Date().getTime()
            },
            error: function (xml) {
               
                alert("View路徑錯誤");
            },
            success: function (xml) {
                
                layerComponentHtml = xml;
            }
        });
    }
    loadHtml()

    window.Layer = (function(){
        const layerComponent = {
            name: 'layer',
            mixins: [],
            components: {
              
            },
            template: layerComponentHtml,
            data: function () {
               return {
                //Toogle isChecked
                isLULC: false,
                toShowLULC:false,
                isImage:false,
                toShowImage:false,
                LULC1985Checked: false,
                LULC1990Checked: false,
                LULC1995Checked: false,
                LULC2000Checked: false,
                LULC2005Checked: false,
                LULC2010Checked: false,
                LULC2015Checked: false,
                Image1985Checked:false,
                Image1990Checked:false,
                Image1995Checked:false,
                Image2000Checked:false,
                Image2005Checked:false,
                Image2010Checked:false,
                Image2015Checked:false,
                TownChecked: false,
                VillageChecked: false,
                OrthoChecked: false,

                //LULCOpacity
                LULCOpacity1985:100,
                LULCOpacity1990:100,
                LULCOpacity1995:100,
                LULCOpacity2000:100,
                LULCOpacity2005:100,
                LULCOpacity2010:100,
                LULCOpacity2015:100,
                ImageOpacity1985:100,
                ImageOpacity1990:100,
                ImageOpacity1995:100,
                ImageOpacity2000:100,
                ImageOpacity2005:100,
                ImageOpacity2010:100,
                ImageOpacity2015:100,
                TownOpacity: 100,
                VillageOpacity:100,
                OrthoOpacity:100,

                //Layers
                LULC1985Layer:undefined,
                LULC1990Layer:undefined,
                LULC1995Layer:undefined,
                LULC2000Layer:undefined,
                LULC2005Layer:undefined,
                LULC2010Layer:undefined,
                LULC2015Layer:undefined,
                Image1985Layer:undefined,
                Image1990Layer:undefined,
                Image1995Layer:undefined,
                Image2000Layer:undefined,
                Image2005Layer:undefined,
                Image2010Layer:undefined,
                Image2015Layer:undefined,
                TownBoundsLayer: undefined,
                VillageBoundsLayer:undefined,
                OrthoImageLayer: undefined,
               }
            },
            watch: {
                /*Toogle Layers */
                LULC1985Checked:function(){
                    if (this.LULC1985Checked == true){
                        this.addLULC1985Layer();
                    } else {
                        map.removeLayer(this.LULC1985Layer)
                        this.LULC1985Checked = false;
                    }
                },  
                LULC1990Checked:function(){
                    if (this.LULC1990Checked == true){
                        this.addLULC1990Layer();
                    } else {
                        map.removeLayer(this.LULC1990Layer)
                        this.LULC1990Checked = false;
                    }
                },  
                LULC1995Checked:function(){
                    if (this.LULC1995Checked == true){
                        this.addLULC1995Layer();
                    } else {
                        map.removeLayer(this.LULC1995Layer)
                        this.LULC1995Checked = false;
                    }
                },  
                LULC2000Checked:function(){
                    if (this.LULC2000Checked == true){
                        this.addLULC2000Layer();
                    } else {
                        map.removeLayer(this.LULC2000Layer)
                        this.LULC2000Checked = false;
                    }
                },  
                LULC2005Checked:function(){
                    if (this.LULC2005Checked == true){
                        this.addLULC2005Layer();
                    } else {
                        map.removeLayer(this.LULC2005Layer)
                        this.LULC2005Checked = false;
                    }
                },  
                LULC2010Checked:function(){
                    if (this.LULC2010Checked == true){
                        this.addLULC2010Layer();
                    } else {
                        map.removeLayer(this.LULC2010Layer)
                        this.LULC2010Checked = false;
                    }
                },  
                LULC2015Checked:function(){
                    if (this.LULC2015Checked == true){
                        this.addLULC2015Layer();
                    } else {
                        map.removeLayer(this.LULC2015Layer)
                        this.LULC2015Checked = false;
                    }
                },  
                LULC2015Checked:function(){
                    if (this.LULC2015Checked == true){
                        this.addLULC2015Layer();
                    } else {
                        map.removeLayer(this.LULC2015Layer)
                        this.LULC2015Checked = false;
                    }
                },  
                Image1985Checked:function(){
                    if (this.Image1985Checked == true){
                        this.addImage1985Layer();
                    } else {
                        map.removeLayer(this.Image1985Layer)
                        this.Image1985Checked = false;
                    }
                }, 
                Image1990Checked:function(){
                    if (this.Image1990Checked == true){
                        this.addImage1990Layer();
                    } else {
                        map.removeLayer(this.Image1990Layer)
                        this.Image1990Checked = false;
                    }
                }, 
                Image1995Checked:function(){
                    if (this.Image1995Checked == true){
                        this.addImage1995Layer();
                    } else {
                        map.removeLayer(this.Image1995Layer)
                        this.Image1995Checked = false;
                    }
                }, 
                Image2000Checked:function(){
                    if (this.Image2000Checked == true){
                        this.addImage2000Layer();
                    } else {
                        map.removeLayer(this.Image2000Layer)
                        this.Image2000Checked = false;
                    }
                }, 
                Image2005Checked:function(){
                    if (this.Image2005Checked == true){
                        this.addImage2005Layer();
                    } else {
                        map.removeLayer(this.Image2005Layer)
                        this.Image2005Checked = false;
                    }
                }, 
                Image2010Checked:function(){
                    if (this.Image2010Checked == true){
                        this.addImage2010Layer();
                    } else {
                        map.removeLayer(this.Image2010Layer)
                        this.Image2010Checked = false;
                    }
                }, 
                Image2015Checked:function(){
                    if (this.Image2015Checked == true){
                        this.addImage2015Layer();
                    } else {
                        map.removeLayer(this.Image2015Layer)
                        this.Image2015Checked = false;
                    }
                },                  
                TownChecked:function(){
                    if (this.TownChecked == true){
                        this.addTown();
                    } else {
                        map.removeLayer(this.TownBoundsLayer)
                        this.TownChecked = false;
                    }
                },    
                VillageChecked:function(){
                    if (this.VillageChecked == true){
                        this.addVillage();
                    } else {
                        map.removeLayer(this.VillageBoundsLayer)
                        this.VillageChecked = false;
                    }
                },    
                OrthoChecked:function(){
                    if (this.OrthoChecked == true){
                        this.addOrthoMap();
                    } else {
                        map.removeLayer(this.OrthoImageLayer)
                        this.OrthoChecked = false;
                    }
                },                      

                /*Configure LULCOpacity */
                LULCOpacity1985:function(){
                    var self = this;
                    this.LULC1985Layer.setOpacity(self.LULCOpacity1985/100)
                },  
                LULCOpacity1990:function(){
                    var self = this;
                    this.LULC1990Layer.setOpacity(self.LULCOpacity1990/100)
                },  
                LULCOpacity1995:function(){
                    var self = this;
                    this.LULC1995Layer.setOpacity(self.LULCOpacity1995/100)
                },  
                LULCOpacity2000:function(){
                    var self = this;
                    this.LULC2000Layer.setOpacity(self.LULCOpacity2000/100)
                },  
                LULCOpacity2005:function(){
                    var self = this;
                    this.LULC2005Layer.setOpacity(self.LULCOpacity2005/100)
                },  
                LULCOpacity2010:function(){
                    var self = this;
                    this.LULC2010Layer.setOpacity(self.LULCOpacity2010/100)
                },  
                LULCOpacity2015:function(){
                    var self = this;
                    this.LULC2015Layer.setOpacity(self.LULCOpacity2015/100)
                },  
                /*Configure ImageOpacity */
                ImageOpacity1985:function(){
                    var self = this;
                    this.Image1985Layer.setOpacity(self.ImageOpacity1985/100)
                },  
                ImageOpacity1990:function(){
                    var self = this;
                    this.Image1990Layer.setOpacity(self.ImageOpacity1990/100)
                },  
                ImageOpacity1995:function(){
                    var self = this;
                    this.Image1995Layer.setOpacity(self.ImageOpacity1995/100)
                },  
                ImageOpacity2000:function(){
                    var self = this;
                    this.Image2000Layer.setOpacity(self.ImageOpacity2000/100)
                },  
                ImageOpacity2005:function(){
                    var self = this;
                    this.Image2005Layer.setOpacity(self.ImageOpacity2005/100)
                },  
                ImageOpacity2010:function(){
                    var self = this;
                    this.Image2010Layer.setOpacity(self.ImageOpacity2010/100)
                },  
                ImageOpacity2015:function(){
                    var self = this;
                    this.Image2015Layer.setOpacity(self.ImageOpacity2015/100)
                },
                TownLULCOpacity:function(){
                    var self = this;
                    this.TownBoundsLayer.setOpacity(self.TownLULCOpacity/100)
                },  
                VillageLULCOpacity:function(){
                    var self = this;
                    this.VillageBoundsLayer.setOpacity(self.VillageLULCOpacity/100)
                },  

            },
            computed: {
            },
            methods: {
                /*-----Show Layer Stacks----*/
                toogleLULC:function(){
                    if (this.isLULC == false){
                        this.showLULC();
                    } else {
                        this.closeLULC();                      
                    }
                },
                showLULC: function () {
                    this.toShowLULC = true;
                    this.isLULC = true;
                    this.setUpIcon();
                    
                },
                closeLULC: function(){
                    this.toShowLULC = false;
                    this.isLULC = false;
                    this.setDownIcon();               
                },
                toogleImage:function(){
                    if (this.isImage == false){
                        this.showImage();
                    } else {
                        this.closeImage();                        
                    }
                },
                showImage: function () {
                    this.toShowImage = true;
                    this.isImage = true;
                    this.setUpIcon2();
                    
                },
                closeImage: function(){
                    this.toShowImage = false;
                    this.isImage = false;
                    this.setDownIcon2();                    
                },
                //Change Icon//
                setUpIcon: function(){
                    $('#arrow1').find("i").toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
                },
                setDownIcon: function(){
                    $('#arrow1').find("i").toggleClass("fa-chevron-circle-up fa-chevron-circle-down");
                },
                setUpIcon2: function(){
                    $('#arrow2').find("i").toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
                },
                setDownIcon2: function(){
                    $('#arrow2').find("i").toggleClass("fa-chevron-circle-up fa-chevron-circle-down");
                },

                /*--------Layer Configuration----------- */
                addLULC1985Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'LULC_1985'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.LULC1985Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.LULC1985Layer);               
                },    
                addLULC1990Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'LULC_1990'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.LULC1990Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.LULC1990Layer);               
                },    
                addLULC1995Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'LULC_1995'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.LULC1995Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.LULC1995Layer);               
                },    
                addLULC2000Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'LULC_2000'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.LULC2000Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.LULC2000Layer);               
                },    
                addLULC2005Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'LULC_2005'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.LULC2005Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.LULC2005Layer);               
                },    
                addLULC2010Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'LULC_2010'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.LULC2010Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.LULC2010Layer);               
                },    
                addLULC2015Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'LULC_2015'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.LULC2015Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.LULC2015Layer);               
                },    

                //-----------Satellite Image-------------------//
                addImage1985Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'layers': 'Landsat_1985',
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.Image1985Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.Image1985Layer);               
                },    
                addImage1990Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'layers': 'Landsat_1990',
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.Image1990Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.Image1990Layer);               
                },    
                addImage1995Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'layers': 'Landsat_1995',
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.Image1995Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.Image1995Layer);               
                },    
                addImage2000Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'layers': 'Landsat_2000'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.Image2000Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.Image2000Layer);               
                },    
                addImage2005Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'SPOT_2005'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.Image2005Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.Image2005Layer);               
                },    
                addImage2010Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'SPOT_2010'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.Image2010Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.Image2010Layer);               
                },    
                addImage2015Layer: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'SPOT_2015'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.Image2015Layer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.Image2015Layer);               
                },    
                addTown: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'Kaohsiung_Town'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.TownBoundsLayer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.TownBoundsLayer); 
                },
                addVillage: function(){
                    var self = this;
                    var wms_source = new ol.source.TileWMS({
                        url: 'http://192.168.50.69:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                                 'LAYERS': 'Kaohsiung_Village'
                                 },
                        serverType: 'geoserver',
                        projection: 'EPSG:4326',
                        transition: 0
                    });
                    this.VillageBoundsLayer = new ol.layer.Tile({
                        source:  wms_source
                    })
                    map.addLayer(this.VillageBoundsLayer); 
                },
                addOrthoMap: function() {
                    var self = this
                    var wmts_source = new ol.source.WMTS({
                        url:'http://maps.nlsc.gov.tw/S_Maps/wmts/PHOTO2/default/GoogleMapsCompatible/{z}/{y}/{x}',
                        format: 'image/png',
                    });

                    this.OrthoImageLayer = new ol.layer.Tile({
                        source:  wmts_source
                    })
                    map.addLayer(this.OrthoImageLayer);   
                },
                initDraggable:function(){
                    $(".panel-info-container").draggable();
                }
            },
            mounted: function () {
                this.initDraggable();
            }
        };
        return {
            layerComponent: layerComponent
        }
    }())
    return Layer
}); 