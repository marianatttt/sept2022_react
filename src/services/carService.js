import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll:(page=1) => axiosService.get(urls.cars.cars, {params:{page}}),
    create:(data) => axiosService.post(urls.cars.cars, data),
    updateById:(id, data) => axiosService.put(urls.cars.ById(id), data),
    delete:(id) => axiosService.delete(urls.cars.ById(id))
}

export {
    carService
}