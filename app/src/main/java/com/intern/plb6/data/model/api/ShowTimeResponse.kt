package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class ShowTimeResponse (

    @SerializedName("id"            ) var id          : Int?    = null,
    @SerializedName("time_start"    ) var timeStart   : String? = null,
    @SerializedName("time_end"      ) var timeEnd     : String? = null,
    @SerializedName("film_id"       ) var filmId      : Int?    = null,
    @SerializedName("price_type_id" ) var priceTypeId : Int?    = null,
    @SerializedName("room_film_id"  ) var roomFilmId  : Int?    = null

)