class Employee
{
    static companyName: string ="Ck tech";
    id:number ;
    name : string ;
    constructor(id:number, name:string)
    {
        this.id = id ;
        this.name = name
    }
}


let emp = new Employee(101, "allen") ;

console.log( emp.id );
console.log( emp.name );
console.log( Employee.companyName );
console.log( Employee.companyName );

export {};