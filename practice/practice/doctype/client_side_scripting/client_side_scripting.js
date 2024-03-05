// Copyright (c) 2024, Ali and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {
	//   1  way
	// after_save:function(frm){
	// 	frappe.msgprint(__("The Full name is '{0}'",[frm.doc.first_name+" "+ frm.doc.middle_name+" "+ frm.doc.last_name]))
	// }




  /// yai ik or way hai iss mai woo khud hi full naem fill krta hai

	// after_save: function(frm) {
    //     let full_name = `${frm.doc.first_name || ''} ${frm.doc.middle_name || ''} ${frm.doc.last_name || ''}`.trim();
    //     frm.set_value('full_name', full_name);
    //     frappe.msgprint(`The full Name is ${full_name}`, "LOL");
    // }

	(let row of frm.doc.)







	// after_save:function(frm) {
	// 	let msg = "The full Name is " + frm.doc.first_name+" "+ frm.doc.middle_name+" "+ frm.doc.last_name
	// 	console.log(msg);
	// 	frappe.msgprint(`${msg}`, "LOL")
	// },
});
