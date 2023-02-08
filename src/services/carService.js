import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll:() => axiosService.get(urls.cars),
    create:(data) => axiosService.post(urls.cars, data),
    updateById:(id, data) => axiosService.put(urls.carsById(id), data),
    delete:(id) => axiosService.delete(urls.carsById(id))
}

export {
    carService
}