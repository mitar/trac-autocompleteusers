jQuery(document).ready(function($) {
  $("[id$=reassign_owner]").autocomplete("../users", {
    formatItem: formatItem,
    max: 3
  });
});
