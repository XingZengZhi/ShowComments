;(function($){
  $.fn.ShowComment = function(options){
    var defaults = {
      //参数和属性
      currentClass:"comments",
      itemClass:"commentsItem"
    }

    var options = $.extend(defaults, options);

    this.each(function(){
      //实现各种功能
      var _this = $(this);  //获取调用插件的对象
      _this.click(function(){
        console.log("被点击了")
      });
    });

    return this;
  }
})(jQuery);
