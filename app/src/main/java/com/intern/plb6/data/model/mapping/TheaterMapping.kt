package com.intern.plb6.data.model.mapping

import com.intern.plb6.data.model.api.Theater

class TheaterMapping (var theater: Theater,var selected: Boolean){

    companion object {
        fun mapListTheater(theaters: List<Theater>) : List<TheaterMapping> {
            val theatersMap = ArrayList<TheaterMapping>()
            for (theater in theaters) {
                theatersMap.add(TheaterMapping(theater, false))
            }
            if (theatersMap.size > 0) {
                theatersMap[0].selected = true
            }
            return theatersMap
        }
    }

}