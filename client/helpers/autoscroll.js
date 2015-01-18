var isBorderOfContent = function() {
  var elements = $('.load-more');
  if (elements && elements[0]) {
    var rect = elements[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && //* or $(window).height()
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) //* or $(window).width()
    );
  }

  return false;
};

InfiniteScrollTrigger = {
  bind: function(callback, delay) {
    delay = delay || 50;
    return Meteor.setInterval(function() {
      if (isBorderOfContent())
        callback();
    }, delay);
  },

  unbind: function(handle) {
    Meteor.clearInterval(handle);
  }
};
/*
InfiniteScrollTrigger = {
  timeoutWait: 1500,

  bind: function(callback) {
    var instance = this;
    $(window).bind('scroll', function() {
      var delta = $(document).height() - $(window).height() - $(window).scrollTop();
      if (10 >= delta) {
        if (instance.timer === undefined) {
          instance.timer = Meteor.setTimeout(callback, this.timeoutWait);
        }
      } else {
        if (instance.timer != undefined) {
          Meteor.clearTimeout(instance.timer);
          instance.timer = undefined;
        }
      }
    });
  },

  unbind: function() {
    $(window).unbind('scroll');
  }
};
*/