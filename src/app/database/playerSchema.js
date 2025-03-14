const playerSchema = {
    username: "",
    password: "", // use bcrypt to hash the password, and save the hashed password here. To verify, compare what they input 
    email: "",
    money: Number,
    plane_health: 100,
    init_airport: "",
    experience: 0,
    level: 1,
    rank: "",
    inventory: [],
    //achievements: [], features to implement later maybe
    //friends:[],

}

export default playerSchema;
