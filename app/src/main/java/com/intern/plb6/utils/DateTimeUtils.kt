package com.intern.plb6.utils

import android.annotation.SuppressLint
import java.text.SimpleDateFormat
import java.util.*

object DateTimeUtils {

    @SuppressLint("SimpleDateFormat")
    fun formatDateFromDB(dateTime: String?) : String {
        val parser = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss")
        val formatter = SimpleDateFormat("HH:mm")
        return formatter.format(parser.parse(dateTime))
    }

    fun formatDate(dateTime: String?) : String {
        val parser = SimpleDateFormat("HH:mm:ss.SSS'Z'")
        val formatter = SimpleDateFormat("HH:mm")
        return formatter.format(parser.parse(dateTime))
    }

    fun getCurrentDate():String{
        val sdf = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
        return sdf.format(Date())
    }

    @SuppressLint("SimpleDateFormat")
    fun convertStringToDate(dateTime: String?) : Date {
        return SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").parse(dateTime)
    }
}