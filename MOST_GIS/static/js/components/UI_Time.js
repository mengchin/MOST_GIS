define([],function(){
    //載入html
    var timeComponentHtml = "";
    var loadHtml = function(){
        $.ajax({
            url: 'static/componentTemplates/timeFrame/timeFrame.html', 
            type: 'GET', 
            async: false,
            data: {
                //_path: path, _name: pv_name, _t: new Date().getTime()
            },
            error: function (xml) {
               
                alert("View路徑錯誤");
            },
            success: function (xml) {
                
                timeComponentHtml = xml;
            }
        });
    }
    loadHtml()

    window.Time = (function(){
        const timeComponent = {
            name: 'timeFrame',
            mixins: [],
            components: {
            
            },
            template: timeComponentHtml,
            data: function () {
               return {
                animatedLULCchecked: false,
                animatedBuiltupchecked:false,
                animatedLULCLayer:undefined,
                animatedBuiltupLayer:undefined,
                LULCdateRange:0,
                BuiltupdateRange:0,
                builtupLegendUrl:'',
                dates:['1985-12-01T00:00:00.0Z','1990-12-01T00:00:00.0Z','1995-12-01T00:00:00.0Z','2000-12-01T00:00:00.0Z','2005-12-01T00:00:00.0Z','2010-12-01T00:00:00.0Z','2015-12-01T00:00:00.0Z'],
                startLULCDate:'1985-12-01T00:00:00.0Z',
                endLULCDate:'2015-12-01T00:00:00.0Z',
                updateLULCDate:'1985-12-01T00:00:00.0Z',
                startBuiltupDate:'1985-12-01T00:00:00.0Z',
                endBuiltupDate:'2015-12-01T00:00:00.0Z',
                updateBuiltupDate:'1985-12-01T00:00:00.0Z',
                animationId:null,
                LULCanimationId:null
               }
            },
            watch: {               

            },
            computed: {
            },
            methods: {
                /**----------------Configure LULC Layers-------------**/
                checkAnimatedLULC:function(){
                    var self = this
                    if (this.animatedLULCchecked == true) {
                        this.clearLULCLayer()
                        this.animatedLULCchecked = false
                    } else {
                        this.addAnimatedLULCLayer()
                        this.animatedLULCchecked = true
                    }
                }, 
                addAnimatedLULCLayer: function(){
                    var wms_source = new ol.source.ImageWMS({
                        url:'http://10.232.234.228:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                            'layers': 'MOST_WebGIS:LULC'
                        },
                        serverType: 'geoserver'
                    });                    
                    this.animatedLULCLayer = new ol.layer.Image({
                        source:  wms_source
                    })
                    map.addLayer(this.animatedLULCLayer); 
                },
                setLULCTime:function(){   
                    this.startLULCDate = new Date(this.startLULCDate)
                    this.startLULCDate.setFullYear(this.startLULCDate.getFullYear() + 5)   
                    if (this.startLULCDate > new Date(this.endLULCDate)){
                        this.startLULCDate = '1985-12-01T00:00:00.0Z'
                        this.startLULCDate = new Date(this.startLULCDate)
                    }
                    this.updateLULCDate = this.startLULCDate.toISOString()
                    this.animatedLULCLayer.getSource().updateParams({'time': this.updateLULCDate});
                },
                stopLULC:function () {
                    if (this.LULCanimationId !== null) {
                      window.clearInterval(this.LULCanimationId)
                      this.LULCanimationId = null
                    }
                  },
                  
                playLULC: function () {
                  this.stopLULC();
                  this.LULCanimationId = window.setInterval(this.setLULCTime(), 1000 / 0.5);
                },
                clearLULCLayer: function(){
                    var self= this;
                    map.removeLayer(this.animatedLULCLayer);
                },

                /**----------------Configure Builtup Layers-------------**/
                checkAnimatedBuiltup:function(){
                    var self = this
                    if (this.animatedBuiltupchecked == true) {
                        this.clearBuiltupLayer()
                        this.clearBuiltupLegend()
                        this.animatedBuiltupchecked = false
                    } else {
                        this.addAnimatedBuiltupLayer()
                        this.showBuiltupLegend()
                        this.animatedBuiltupchecked = true
                    }
                }, 
                addAnimatedBuiltupLayer: function(){
                    var wms_source = new ol.source.ImageWMS({
                        url:'http://10.232.234.228:8080/geoserver/MOST_WebGIS/wms',
                        params: {
                            'layers': 'MOST_WebGIS:Builtup_Density'
                        },
                        serverType: 'geoserver'
                    });                    
                    this.animatedBuiltupLayer = new ol.layer.Image({
                        source:  wms_source
                    })
                    map.addLayer(this.animatedBuiltupLayer); 
                },
                showBuiltupLegend: function(){
                    this.builtupLegendUrl = 'http://10.232.234.228:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=MOST_WebGIS:Builtup_Density';
                    document.getElementById('builtup-legend').src = this.builtupLegendUrl;
                },
                clearBuiltupLayer: function(){
                    var self= this;
                    map.removeLayer(this.animatedBuiltupLayer);
                },
                clearBuiltupLegend: function(){
                    document.getElementById('builtup-legend').src = '';
                },
                setBuiltTime:function(){   
                    this.startBuiltupDate = new Date(this.startBuiltupDate)
                    this.startBuiltupDate.setFullYear(this.startBuiltupDate.getFullYear() + 5)   
                    if (this.startBuiltupDate > new Date(this.endBuiltupDate)){
                        this.startBuiltupDate = '1985-12-01T00:00:00.0Z'
                        this.startBuiltupDate = new Date(this.startBuiltupDate)
                    }
                    this.updateBuiltupDate = this.startBuiltupDate.toISOString()
                    this.animatedBuiltupLayer.getSource().updateParams({'time': this.updateBuiltupDate});
                },
                stopBuiltup:function () {
                    if (this.animationId !== null) {
                      window.clearInterval(this.animationId)
                      this.animationId = null
                    }
                  },
                  
                playBuiltup: function () {
                  this.stopBuiltup();
                  this.animationId = window.setInterval(this.setBuiltTime(), 1000 / 0.5);
                },

                //****Make Function Window Draggable*****/
                initDraggable:function(){
                    $(".panel-info-container").draggable();
                }
            },
            mounted: function () {
                this.initDraggable();
            }
        };
        return {
            timeComponent:timeComponent
        }
    }())
    return Time
}); 