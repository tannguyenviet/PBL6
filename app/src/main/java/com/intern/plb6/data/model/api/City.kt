package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

class City(
    @SerializedName("city") var city: String? = null
) {
    override fun toString(): String {
        return city.toString()
    }
}