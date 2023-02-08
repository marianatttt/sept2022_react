const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const urls ={
    cars:'/cars',
    carsById:(id) =>`/cars/${id}`
}

export {
    urls, baseURL
}