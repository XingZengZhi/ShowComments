;(function($){
  $.fn.ShowComment = function(options){
    var defaults = {
      //参数和属性
      itemClass:".commentsItem"
    }
    var options = $.extend(defaults, options);

    this.each(function(){
      //实现各种功能
      var _this = $(this);  //获取调用插件的对象
      var nums = new Array(_this.find(options.itemClass).length);
      $.each(_this.find(options.itemClass), function(i, n){
        nums[i] = i;
      });
      var time = setTimeout(topMove, 1000), j = 0;
      function topMove(){
        _this.find(options.itemClass + ":eq(" + j + ")").animate({
          marginTop:0 + 'px'
        });
        j++;
        if(j > nums.length){
          clearTimeout(time);
        }else{
          time = setTimeout(topMove, 1000);
        }
      }
    });

    return this;
  }
})(jQuery);
