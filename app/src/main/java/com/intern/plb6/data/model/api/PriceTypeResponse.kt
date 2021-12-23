package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class PriceTypeResponse(
    @SerializedName("id"          ) var id          : Int?    = null,
    @SerializedName("description" ) var description : String? = null,
    @SerializedName("price"       ) var price       : Int?    = null
)
