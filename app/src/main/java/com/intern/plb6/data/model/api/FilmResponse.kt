package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class FilmResponse(
    @SerializedName("page") var page: Int? = null,
    @SerializedName("total_pages") var totalPages: Int? = null,
    @SerializedName("total_results") var totalResults: Int? = null,
    @SerializedName("results") var results: List<Film> = arrayListOf()
)