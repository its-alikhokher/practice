
import frappe

@frappe.whitelist()
def practice_function(age):
    if age:
        new_age = int(age) + 5
        return new_age
    

def practice_2():
    x = 5
    y = 10
    return x+y