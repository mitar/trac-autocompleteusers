$(document).ready(function() {
  $("#sg_subject").autocomplete("../../users", {
    formatItem: formatItem,
    max: 3,
    minChars: 2
  });
  $("#gp_subject").autocomplete("../../users?groups=1", {
    formatItem: formatItem,
    max: 3,
    minChars: 2
  });
});
