define([],function(){
    //??html
    var functionComponentHtml = "";
    var website_url = "http://192.168.50.69:7000/" 
    var loadHtml = function(){
        $.ajax({
            url: 'static/componentTemplates/function/function.html', 
            type: 'GET', 
            async: false,
            data: {
                //_path: path, _name: pv_name, _t: new Date().getTime()
            },
            error: function (xml) {
               
                alert("View");
            },
            success: function (xml) {
                
                functionComponentHtml = xml;
            }
        });
    }
    loadHtml()
    window.FunctionWindow = (function(){
        const functionComponent = {
            name: 'functionPanel',
            mixins: [],
            components: {
              
            },
            template: functionComponentHtml,
            data: function () {
               return {
                    //measuringTool:null
               }
            },
            watch: {

            },
            computed: {
            },
            methods: {   

                           
                initDraggable:function(){
                    $(".panel-info-container").draggable();
                },

            },
            mounted: function () {
                this.initDraggable();
            }
        };
        return {
            functionComponent: functionComponent
        }
    }())
    return FunctionWindow
}); 