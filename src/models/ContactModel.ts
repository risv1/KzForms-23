class ContactModel{
    id: number;
    lastName: string;
    firstName: string;
    age: number;
    constructor(id: number, lastName: string, firstName: string, age: number){
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.age=age;
    }
}
export default ContactModel;