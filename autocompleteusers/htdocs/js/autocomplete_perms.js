$(document).ready(function() {
	$("#sg_subject").autocomplete("../../users", { 
		formatItem: formatItem 
		    }); 
	$("#gp_subject").autocomplete("../../users?groups=1", { 
		formatItem: formatItem 
		    }); 
});
