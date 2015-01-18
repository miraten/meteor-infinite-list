
var triggerHandle;

Template.postsList.rendered = function() {
  
  triggerHandle = InfiniteScrollTrigger.bind(function() {
    $('.load-more').click();
  });

};

Template.postsList.destroyed = function() {
  InfiniteScrollTrigger.unbind(triggerHandle);
};
