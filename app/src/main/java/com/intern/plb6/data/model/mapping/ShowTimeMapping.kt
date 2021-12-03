package com.intern.plb6.data.model.mapping

import com.intern.plb6.data.model.api.ShowTimeResponse

class ShowTimeMapping (var showTimeResponse: ShowTimeResponse, var selected: Boolean){

    companion object {
        fun mapListShowTime(showTimes: List<ShowTimeResponse>) : List<ShowTimeMapping> {
            val showTimeMap = ArrayList<ShowTimeMapping>()
            for (showTime in showTimes) {
                showTimeMap.add(ShowTimeMapping(showTime, false))
            }
            if (showTimeMap.size > 0) {
                showTimeMap[0].selected = true
            }
            return showTimeMap
        }
    }

}