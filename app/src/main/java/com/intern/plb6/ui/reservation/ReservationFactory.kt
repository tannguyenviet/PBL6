package com.intern.plb6.ui.reservation

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider

class ReservationFactory(private val navigator: ReservationNavigator): ViewModelProvider.Factory {

    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(ReservationViewModel::class.java)) {
            return ReservationViewModel(navigator) as T
        }
        throw IllegalArgumentException("Unknown class name")
    }

}