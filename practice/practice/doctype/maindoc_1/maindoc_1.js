// Copyright (c) 2024, Ali and contributors
// For license information, please see license.txt

frappe.ui.form.on('MainDoc 1', {
	setup:function(frm){
		let row = frm.add_child('chil_doc', {
			mob_nu: 'Tennis Racket',
			name1: 'Tennis Racket',
			relation: 'Tennis Racket',
			fuck_you_boss: 'Tennis Racket',
			qty:5
		});
		
		frm.refresh_field('chil_doc');
}
});



// frappe.ui.form.on('chil_doc', {
   
//     item_code(frm,chil_doc , cdn) {
//         let row = frappe.get_doc(cdt, cdn);
//     }
// })