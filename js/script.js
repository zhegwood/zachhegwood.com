var ZH = {

    menuHidden: true,
    
    initMenu: function() {
        ZH.hookupMenu();
        ZH.menuSelect();
    },
    
    initPage: function(page) {
        ZH.checkSupport();
        ZH.initMenu();
        switch(page) {
            case "resume":
                ZH.initResume();
                ZH.hookupHide();
                break;
            default:
                break;
        }
    },
    
    initResume: function(){
        ZH.writeDate();
    },
    
    checkSupport: function() {
        if (!$.support.opacity) {
            $("body").addClass("old-ie");
        }
    },
    
    hookupHide: function() {
        var self = this;
        $(".hide-section").on("click",function(){
            var span = $(this),
                val = $(this).html() === "hide" ? "show" : "hide";
                
            $("."+this.id+".portfolio-section").toggle("blind");

            span.html(val);
        });
    },
    
    hookupMenu: function() {
        $(".trigger").click(function(){
            if (ZH.menuHidden) {
                $(this).parent().find(".nav-ul-wrap").show();
                ZH.menuHidden = false;
            } else {
                $(this).parent().find(".nav-ul-wrap").hide();
                ZH.menuHidden = true;
            }
            
        });
    },
    
    menuSelect: function() {
        var url = location.href,
            page = url.substring(url.lastIndexOf("/")+1,url.indexOf(".html"));
        page = (page === "index") || url.indexOf(".html") === -1 ? "home" : page;
        $(".current").html(page);
    },
    
    showFuser: function() {
      $("<div>Fuser is dead.</div>").dialog();  
    },
    
    writeDate: function() {
        var span = $(".date-now"),
            now = new Date(),
            months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        
        span.html(months[now.getMonth()]+" "+now.getFullYear());
    }
};
