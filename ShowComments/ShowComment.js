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
      var time = setTimeout(topMove, 1000),
          j = 0,
          m = nums.length - 1,
          bottomTime;
      function topMove(){
        _this.find(options.itemClass + ":eq(" + j + ")").animate({
          marginTop:5 + 'px'
        });
        j++;
        if(j > nums.length){
          clearTimeout(time);
          m = nums.length - 1; //重置计数器
          bottomTime = setTimeout(bottomMove, 1000);
        }else{
          time = setTimeout(topMove, 1000);
        }
      }
      // m = nums.length - 1;
      function bottomMove(){
        _this.find(options.itemClass + ":eq(" + m + ")").animate({
          marginTop:-($(options.itemClass).height() + 5) + 'px'
        });
        m--;
        if(m < 0){
          clearTimeout(bottomTime);
          j = 0; //重置计数器
          time = setTimeout(topMove, 1000);
        }else{
          bottomTime = setTimeout(bottomMove, 1000);
        }
      }
    });

    return this;
  }
})(jQuery);
