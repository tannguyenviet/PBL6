package com.intern.plb6.data.model.mapping

import com.intern.plb6.data.model.api.City

class CityMapping (var city: String,var selected: Boolean){

    companion object {
        fun mapListCity(cities: List<City>) : List<CityMapping> {
            val citiesMap = ArrayList<CityMapping>()
            for (city in cities) {
                citiesMap.add(CityMapping(city.city.toString(), false))
            }
            if (citiesMap.size > 0) {
                citiesMap[0].selected = true
            }
            return citiesMap
        }
    }

}