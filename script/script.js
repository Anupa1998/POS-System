let userArr = [];

let customerArr=[];

class User {
    constructor(fullName, email, password){
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}


class Customer{
    constructor(name, address, salary,nic){
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.nic = nic;
    }   
}

// const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));


// User Management

const createUser=()=>{
    const fullName = $('#full-name').val();
    const email = $('#register-email').val();
    const password = $('#register-password').val();

    let createdUser = new User(fullName,email,password);
    let existUserData = userArr.find(e=>e.email===email);

    if(existUserData){
        alert('User already exist!');
        return;
    }

    userArr.push(createdUser); 

    console.log(userArr);
    
}

const login=()=>{
    const email = $('#email').val();
    const password = $('#password').val();

    let existUserData=userArr.find(e=>e.email===email);

    if(existUserData){
        if(existUserData.password===password){
            //login=>dashboard
        }else{
            alert('Password is wrong');
            return
        }
    }else{
        alert('User email not found');
    }
}


const createCustomer = () =>{
    const customer = new Customer(
        $('#name').val(),
        $('#address').val(),
        parseFloat($('#salary').val()),
        $('#name').val()
    );

    let existData = customerArr.find(el=>el.nic===customer.nic);

    if(existData){
        alert('Customer Nic already exist!');
        return;
    }
    customerArr.push(customer);
}

const findCustomer = (id) =>{
    let selectedCustomer = customerArr.find(el=>el.nic===customer.nic);

    if (selectedCustomer) {
        return selectedCustomer;
    }
    return null;
}

const updateCustomer = (id) =>{
    let customer = findCustomer(id);

    if(customer){
        $('#name').val(customer.name);
        $('#address').val(customer.address);
        $('#salary').val(customer.salary);
        $('#nic').val(customer.nic);
    }else{
        alert('Customer Not Found');
    }
}

const deleteCustomer = (id) =>{
    
}

const getAllCustomer = () =>{
    
}


// 


const clearAndLoad=(element)=>{
    $('body').empty();
    let body = $('body');
    let tempElement=$('#'+element);
    tempElement.appendTo(body);

}



const check = () =>{
    console.log(userArr);
    
}