package com.intern.plb6.data.model.api

import com.google.gson.annotations.SerializedName

data class Film(
    @SerializedName("id") var id: Int? = null,
    @SerializedName("name") var name: String? = null,
    @SerializedName("time_release") var timeRelease: String? = null,
    @SerializedName("country") var country: String? = null,
    @SerializedName("director") var director: String? = null,
    @SerializedName("duration") var duration: Int? = null,
    @SerializedName("labor") var labor: String? = null,
    @SerializedName("stars") var stars: String? = null,
    @SerializedName("description") var description: String? = null,
    @SerializedName("hashtag") var hashtag: String? = null,
    @SerializedName("rating") var rating: Double? = null,
    @SerializedName("image") var image: String? = null,
    @SerializedName("trailer") var trailer: String? = null,
    @SerializedName("idFilmsOnWeb") var idFilmsOnWeb: Int? = null
)