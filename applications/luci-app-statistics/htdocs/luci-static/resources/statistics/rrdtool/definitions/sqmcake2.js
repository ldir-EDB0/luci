/* Licensed to the public under the Apache License 2.0. */

'use strict';
'require baseclass';

return baseclass.extend({
	title: _('SQM-CakeBW'),

	rrdargs: function(graph, host, plugin, plugin_instance, dtype) {
		var tinusage = {
			per_instance: false,
			title: "%H: CAKE %pi Traffic",
			vlabel: "Kb/s",
			number_format: "%5.0lf",
			rrdopts: [ "--logarithmic" ],
			ordercolor: true,
			data: {
				types: [ "qdisct_bytes" ],
				options: {
					qdisct_bytes: { title: "%di", overlay:true, noarea:true, transform_rpn: "125,/" }
				}
			}
		};

		return [ tinusage ];
	}
});
