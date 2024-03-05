// Copyright (c) 2024, Ali and contributors
// For license information, please see license.txt

frappe.ui.form.on('Set Query Doc', {
	refresh: function(frm) {
		frm.set_query('customer', () => {
			return {
				filters: {
					territory: 'India'
				}
			}
		})
	}
});
