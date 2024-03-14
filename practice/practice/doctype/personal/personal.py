# Copyright (c) 2024, Ali and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Personal(Document):
	# def validate(self):
	@frappe.whitelist()
	def funcc(self):
		child_docs_list = []  # Initialize an empty list to store child documents

		docs = frappe.get_all("MainDoc 1", fields=["name"])

		for doc in docs:
			# Get the MainDoc 1 document
			main_doc = frappe.get_doc("MainDoc 1", doc.name)
			
			# Get all child documents related to main_doc
			child_docs = frappe.get_all("Chil Doc 1", filters={"parent": main_doc.name}, fields=["*"])
			
			# Append the child documents to the list
			child_docs_list.extend(child_docs)

		# Print or use the list of child documents as needed
		# frappe.msgprint(f"{child_docs_list}")
		return child_docs_list					












		# self.full_name = practice_2()

		# docs = frappe.db.get_list("MainDoc 1")
		# self.chil_doc = []
		# for row in docs:
		# 	doc = frappe.get_doc("MainDoc 1", row.name)
		# 	for child in doc.chil_doc:
		# 		self.append('chil_doc', {
		# 			"mob_nu" : child.mob_nu,
		# 			"first_name" : child.first_name,
		# 			"relation" : child.relation,
		# 			"age" : child.age
		# 		})

		# subject = frappe.db.get_value('The Client Side Scripting', self.filter,'first_name')
		# subject, description = frappe.db.get_value("MainDoc 1", self.filter, ['first_name', 'last_name'])
		# self.first_name = subject
		# self.last_name = description

		# subject = frappe.db.set_value('The Client Side Scripting', self.filter, ['first_name', 'last_name'], 'New Subject')
		
		
		# frappe.db.set_value("MainDoc 1", self.one, {
		# 	'first_name': subject,
		# 	'last_name': description
		# 	})
		

		# if(frappe.db.exists("Personal", {"first_name": "Ali"})):
		# 	frappe.msgprint("yes its exist")
		# else:
		# 	frappe.msgprint("its not exist")

		# ccc =frappe.db.count('Personal', {'first_name': 'Ali'})
		# doc = frappe.get_list("Personal", {'first_name': 'Ali'})
		# frappe.msgprint(f"{doc}")