import react from 'react'

const faker = require('faker')
const fs = require('fs')


function generateUsers(){
    let users = []
    for (let id = 1; id < 50; id++) {
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let emailId = faker.internet.email()
        let phoneNo = faker.phone.phoneNumber()

        users.push({
            "id":id,
            "firstName":firstName,
            "lastName" : lastName,
            "emailId" : emailId,
            "phoneNo" : phoneNo
        })
    }
    return { "data": users}
}
 //module.exports = generateUsers

 const userInfo = generateUsers()
 fs.writeFileSync('dbs.json', JSON.stringify(userInfo, null, '\t'))

export default generateUsers

