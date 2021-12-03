package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class Theater (

    @SerializedName("id"      ) var id      : Int?    = null,
    @SerializedName("name"    ) var name    : String? = null,
    @SerializedName("address" ) var address : String? = null,
    @SerializedName("city"    ) var city    : String? = null

)