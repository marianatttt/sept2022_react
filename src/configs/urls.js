const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const cars ='/cars'
const auth = '/auth'
const urls = {
    auth:{
        login:auth,
        refresh: `${auth}/refresh`,
        me:`${auth}/me`
    },
    cars: {
        cars,
        ById: (id) => `${cars}/${id}`
    },
    users:'/users'


}

export {
    urls, baseURL
}