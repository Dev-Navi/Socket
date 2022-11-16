
let users = []

const addUser = ({id,name,room}) => {
    console.log(name,room,'Secoundddddddddddddd');
    if(!name || !room) {
        return {
            error : "Name & Room Required" 
        }
    }

    name  = name.trim().toLowerCase()
    room  = room.trim().toLowerCase()

    if(users.length) {
        const exitingUser = users.find(each => each.name === name && each.room === room);
        if(exitingUser) {
            return {
                error : "name Room Already Used" 
            }
        }
    }

    const user = {id,name,room}
    console.log(user);
    users.push(user)

    return { user }
}

const removeUser = (id) => {
    const findIdx = users.findIndex(each => each.id === id);

    if(findIdx >= 0) {
        return users.slice(findIdx,1)[0]
    }
}


const getUser = (id) => {
  return users.find(each => each.id === id);
}

module.exports = {
    addUser,
    removeUser,
    getUser
}