//validation script here. regular expression (RegEx)

// we are gonna store all the single fields in one single object, rather than create a single variable for each one. Each property inside the object can be a different regular expression

const inputs = document.querySelectorAll('input'); //this is a collection of elements

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation function
function validate(field, regex1) {

    if (regex1.test(field.value)) {  //if it is true we got a match and pass validation
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

inputs.forEach((item) => {
    item.addEventListener('keyup', (e) => {  //keyup event, is when you press the key and it's up
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});