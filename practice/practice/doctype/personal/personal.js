// Copyright (c) 2024, Ali and contributors
// For license information, please see license.txt

frappe.ui.form.on('Personal', {
	validate: function(frm) {
		frm.call('funcc')
    .then(r => {
		// for (let child of doc.chil_doc){
			frm.doc.chil_doc= []
		for (let row of r.message){
		frm.add_child('chil_doc', {
					mob_nu : row.mob_nu,
					first_name : row.first_name,
					relation : row.relation,
					age : row.age
				});

		}	
		frm.refresh_field('chil_doc')
		// console.log(r.message)
								
		// 
			
		// }

    })















		// frappe.db.get_list("The Client Side Scripting",{
		// }).then(docs => {
		// 	frm.clear_table('family_member');
		// 	for (let row of docs) {
		// 		frappe.db.get_doc('The Client Side Scripting', row.name)
		// 		.then(doc => {
		// 			setTimeout(() => {
		// 				for (let x of doc.family_member){
								
		// 					frm.add_child('family_member', {
		// 						member_name: x.member_name,	
		// 						relation: x.relation,
		// 						age : x.age
		// 					});
							
		// 					console.log(doc)
		// 				}
		// 				frm.refresh_field('family_member');
		// 			}, 50);
		// 		})
		// 	}
		// })

	}
});
